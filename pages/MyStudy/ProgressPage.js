import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import * as Progress from 'react-native-progress';

class ProgressPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    study_name: 'Study 1',
                    study_img: '../../assets/profile.jpg',
                    study_per: 30,
                },
                {
                    study_name: 'Study 2',
                    study_img: '../../assets/profile.jpg',
                    study_per: 50,
                },
                {
                    study_name: 'Study 3',
                    study_img: '../../assets/profile.jpg',
                    study_per: 70,
                },
                {
                    study_name: 'Study 4',
                    study_img: '../../assets/profile.jpg',
                    study_per: 80,
                }
            ]
        }
    }



    render() {
        const { navigation } = this.props;



        return (

            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            data={this.state.data}
                            numColumns={1}
                            scrollEnabled={false}
                            renderItem={({ item, index }) =>
                                <View style={styles.progress}>
                                    <View style={styles.progress_sub_up}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Image style={styles.img} source={require('../../assets/profile.jpg')}></Image>
                                            <Text style={styles.name}>{item.study_name}</Text>
                                        </View>
                                        <View style = {{flexDirection: 'row', alignItems: 'center'}} >
                                            <Text style = {styles.percet_text}>{item.study_per}%</Text>
                                        </View>
                                    </View>
                                    <View style={styles.percent}>
                                        <Progress.Bar style={styles.progress_bar} progress={item.study_per / 100} color={'#7cd175'} width={380} height={20} borderWidth={1.5} />
                                    </View>
                                </View>
                            } />
                    </View>

                </ScrollView>

                <View style={styles.footer} >
                    <TouchableOpacity style={styles.underButton} onPress={() => { navigation.navigate("MyStudyPage") }}><Image style={styles.buttonImage2} source={require('../../assets/book-club.png')} ></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton} onPress={() => { navigation.navigate('ToDoPage') }}><Image style={styles.buttonImage2} source={require('../../assets/check-mark.png')} ></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../../assets/calendar.png')}></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton} ><Image style={styles.buttonImage2} source={require('../../assets/steps.png')}></Image></TouchableOpacity>
                </View>
            </View>
        );

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
    progress_sub_up: {
        width:380,
        flex: 1,
        flexDirection : 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    img: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginRight: 15
    },
    name: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    progress: {
        height: 100,
        width: 380,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 10,
        padding: 6
    },
    percent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    percet_text : {
        fontSize : 25,
        fontWeight:'bold'
    }, 
    progress_bar: {
        width: 380,
        height: 20
    }
});


export default ProgressPage;