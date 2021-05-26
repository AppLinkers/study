import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Accordian from '../../Components/Accordian';


class ToDoPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    title: 'To Do',
                    data: [
                        { key: 0, value: 'Ch6 과제 1', chk: false },
                        { key: 1, value: 'Ch6 과제 2', chk: false },
                    ]
                },
                {
                    title: 'Progress',

                    data: [
                        { key: 2, value: 'Ch6 과제 3', chk: false },
                    ]
                },
                {
                    title: 'Done',
                    data: [
                        { key: 3, value: 'Ch6 과제 6', chk: false },
                    ]
                },
                {
                    title: 'Confirmed',
                    data: [
                        { key: 4, value: 'Ch6 과제 7', chk: false },
                        { key: 5, value: 'Ch6 과제 8', chk: false },
                        { key: 6, value: 'Ch6 과제 9', chk: false }
                    ]
                },
            ]
        }
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
        const items = [];
        for (item of this.state.menu) {
            items.push(
                <Accordian
                    title={item.title}
                    data={item.data}
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