import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


class MyStudyPage extends Component {


    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.search} >
                    <Image style={styles.searchi_img} source={require('../assets/loupe.png')}></Image>
                    <Text style={styles.search_font}>검색</Text>
                </View>
                <TouchableOpacity onPress = {() => {ToDoPage()}}>
                    <View style={styles.todo}>
                        <Image style={styles.todo_img} source={require('../assets/list.png')}></Image>
                        <Text style={styles.todo_font}>  To Do List !!</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.content}>
                    <TouchableOpacity>
                        <View style={styles.elem}>
                            <View style={styles.userInfo}>
                                <Image style={styles.profile} source={require('../assets/profile.jpg')} />
                                <View>
                                    <Text style={styles.name}>study 이름</Text>
                                    <Text style={styles.chat}>최근 대화</Text>
                                </View>
                            </View>
                            <View style={styles.right}>
                                <Text>최근 대화 시간</Text>
                                <Text style={styles.chat_num}>1</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.elem}>
                            <View style={styles.userInfo}>
                                <Image style={styles.profile} source={require('../assets/profile.jpg')} />
                                <View>
                                    <Text style={styles.name}>study 이름</Text>
                                    <Text style={styles.chat}>최근 대화</Text>
                                </View>
                            </View>
                            <View style={styles.right}>
                                <Text>최근 대화 시간</Text>
                                <Text style={styles.chat_num}>1</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    

                </View>
                <View style={styles.footer} >
                    <TouchableOpacity style={styles.underButton} onPress={() => { navigation.goBack() }}><Image style={styles.buttonImage} source={require('../assets/homeButton.png')}></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton} ><Image style={styles.buttonImage2} source={require('../assets/check-mark.png')} ></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../assets/calendar.png')}></Image></TouchableOpacity>
                    <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../assets/steps.png')}></Image></TouchableOpacity>
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
        marginTop: 0,
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
        backgroundColor: 'yellow',
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