import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import * as firebase from 'firebase';
import { firebase_db } from '../../firebaseConfig';
import { AsyncStorage } from 'react-native';


// 채팅 flatlist 데이터 정리해서 띄우기
// chat --> 현재 확인 안한 chat 개수 / 최근 대화 시간 / 채팅창 이름 / 최근 대화 내용 / chat image
// 채팅창 링크 navigation 활성화


class MyStudyPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newdata : []
        }
    }

    componentWillMount() {
        const list = []
        const chatList = []
        AsyncStorage.getItem('user').then(
            value => {
                firebase_db.ref('requestStudy').on('value', (snapshot) => {
                    snapshot.forEach((child) => {
                        if (child.val().chattingRoom.users) {
                            const users = child.val().chattingRoom.users;
                            for (let key in users){
                                if(value == users[key].user){
                                    list.push(child.key)
                                    return;
                                }
                            };
                        } else {
                            console.log("no users")
                        }

                    })
                });
            }
        ).then(
            value => {
            for (let chatKey of list){
                firebase_db.ref('chat/'+chatKey).on('value', snapshot => {
                    if(snapshot.exists()){
                        chatList.push({
                            chatKey : chatKey,
                            name : snapshot.val().info.studyName,
                            chat_nums : '1',
                            chat : snapshot.val().messages[Object.keys(snapshot.val().messages)[Object.keys(snapshot.val().messages).length-1]].msg,
                            chat_time : snapshot.val().messages[Object.keys(snapshot.val().messages)[Object.keys(snapshot.val().messages).length-1]].time
                        })
                        this.setState({newdata : chatList})
                        
                    }
                    
                })
        }
        });
        
    }

    

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ToDoPage') }}>
                    <View style={styles.todo}>
                        <Image style={styles.todo_img} source={require('../../assets/list.png')}></Image>
                        <Text style={styles.todo_font}>  To Do List !!</Text>
                    </View>
                </TouchableOpacity>

                <ScrollView style={styles.content}>
                    <FlatList
                        data={this.state.newdata}
                        numColumns={1}
                        scrollEnabled={false}
                        renderItem={({ item, index }) =>
                            <View>
                                <TouchableOpacity onPress = {() => this.props.navigation.navigate("ChatPage",{key : item.chatKey})}> 
                                    <View style={styles.elem}>
                                        <View style={styles.userInfo}>
                                            <Image style={styles.profile} source={require('../../assets/profile.jpg')} />
                                            <View>
                                                <Text style={styles.name}>{item.name}</Text>
                                                <Text style={styles.chat}>{item.chat}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.right}>
                                            <Text>{item.chat_time}</Text>
                                            <Text style={styles.chat_num}>{item.chat_nums}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        } />
                </ScrollView>
                <View style={styles.footer} >
                    <TouchableOpacity style={styles.underButton} onPress={() => { this.props.navigation.navigate('MainPage') }}><Image style={styles.buttonImage} source={require('../../assets/homeButton.png')}></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton} onPress={() => { this.props.navigation.navigate('ToDoPage') }}><Image style={styles.buttonImage2} source={require('../../assets/check-mark.png')} ></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../../assets/calendar.png')}></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton} onPress={() => { this.props.navigation.navigate('ProgressPage') }}><Image style={styles.buttonImage2} source={require('../../assets/steps.png')}></Image></TouchableOpacity>
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
    todo: {
        flexDirection: 'row',
        borderRadius: 11,
        margin: 10,
        height: 60,
        backgroundColor: '#F1EFEF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    todo_font: {
        fontSize: 30,
    },
    todo_img: {
        width: 30,
        height: 30
    },
    search: {
        flexDirection: 'row',
        borderRadius: 11,
        margin: 10,
        height: 40,
        backgroundColor: 'white',
        borderColor: '#7cd175',
        borderWidth: 3,
        justifyContent: 'flex-start'

    },
    search_font: {
        marginTop: 4,
        fontSize: 20,
        color: '#544F4F',
    },
    searchi_img: {
        marginTop: 7,
        width: 25,
        height: 25,
        marginLeft: 7,
        marginRight: 10
    },
    footer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        height: 60,
    },
    content: {
        flex: 1,
    },

    elem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#F1EFEF',
        borderBottomWidth: 1.5,
        padding: 5,
        marginLeft: 6,
        marginRight: 5,
        height: 80
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        padding: 8,
        alignItems: 'flex-end'
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 25,
    },
    name: {
        fontSize: 19,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    chat: {
        fontSize: 13,
        paddingLeft: 10
    },
    chat_num: {
        width: 20,
        height: 20,
        backgroundColor: '#FD1919',
        borderRadius: 25,
        margin: 5,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
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
    }
});


export default MyStudyPage;