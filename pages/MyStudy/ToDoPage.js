import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Accordian from '../../Components/Accordian';
import { AsyncStorage } from 'react-native';
import { firebase_db } from '../../firebaseConfig';

class ToDoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: []
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('user').then(
            value => {
                firebase_db.ref('todolist/' + value+'/').on('value', (snapshot) => {
                    var newMenu = [];
                    var key = 0;
                    snapshot.forEach((child) => {
                        var dataContent = [];
                        var state = 0;
                        if(child.key == 'todo'){
                            state = 0;
                        }else if(child.key == 'progress'){
                            state = 1;
                        }else if(child.key == 'done'){
                            state = 2;
                        }else if(child.key == 'confirmed'){
                            state = 3;
                        }
                        console.log(child)
                        child.forEach((sub_child) => {
                            
                            if(sub_child.val().content != 'nothing'){
                                dataContent.push({
                                    key : key, content : sub_child.val().content, studyName : sub_child.val().studyName, state : state
                                })
                            }
                            key = key + 1;
                        })
                        var menuContent = {};
                        menuContent = {
                            title : child.key,
                            data : dataContent
                        }
                        newMenu.push(menuContent);  
                    })
                    newMenu.sort(function(a, b) {
                        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                          return 1;
                        }
                        if (nameA > nameB) {
                          return -1;
                        }
                        // 이름이 같을 경우
                        return 0;
                      });
                    this.setState({menu : newMenu})
                })
            }
        )
    }

    render() {
        const { navigation } = this.props;


        return (

            <View style={styles.container}>

                <ScrollView style={styles.content}>

                    {this.renderAccordians()}

                </ScrollView>

                <View style={styles.footer} >
                    <TouchableOpacity style={styles.underButton} onPress={() => { navigation.navigate("MyStudyPage") }}><Image style={styles.buttonImage2} source={require('../../assets/book-club.png')} ></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../../assets/check-mark.png')} ></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../../assets/calendar.png')}></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton} onPress={() => { navigation.navigate("ProgressPage") }}><Image style={styles.buttonImage2} source={require('../../assets/steps.png')}></Image></TouchableOpacity>
                </View>
            </View>
        );

    }

    renderAccordians = () => {
        console.log("test")
        const items = [];
        for (item of this.state.menu) {
            items.push(
                <Accordian
                    title={item.title}
                    data={item.data}
                    parent = {this.props}
                />
            );
        }
        return items;
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    footer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        height: 60,
    },
    content: {
        flex: 1,
    },
    underButton: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonImage: {
        width: 30,
        height: 30
    },
    buttonImage2: {
        width: 25,
        height: 25
    },
});


export default ToDoPage;