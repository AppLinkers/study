import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AsyncStorage } from 'react-native';
import { firebase_db } from '../firebaseConfig';
import { createIconSetFromFontello } from 'react-native-vector-icons';

export default class Accordian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: true,
            user: 'name',
            parent : props.parent
        }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    
    componentWillMount() {
        AsyncStorage.getItem('user').then(
            value => {
                this.setState({ user: value })
            }
        )
    }

    render() {
        
        return (
            <View style={{ borderBottomWidth: 1, borderColor: 'black', }}>
                <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
                    <Text style={[styles.title]}>{this.props.title}</Text>
                    <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'black'} />
                </TouchableOpacity>
                <View style={styles.parentHr} />
                {
                    this.state.expanded &&
                    <View>
                        <FlatList
                            data={this.state.data}
                            numColumns={1}
                            scrollEnabled={false}
                            renderItem={({ item, index }) =>
                                <View>
                                    <TouchableOpacity style={[styles.childRow, styles.button]} onPress={() => { this.onClick(index);}}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon style={{ marginRight: 10 }} name={'check-circle'} size={24} color={item.state == 2 ? '#29D454' : '#A0A2A1'} />
                                            <Text style={styles.itemInActive} >{item.content}</Text>
                                        </View>
                                        <Image style={styles.profile} source={require('../assets/profile.jpg')} />
                                    </TouchableOpacity>
                                </View>
                            } />
                    </View>
                }

            </View>
        )
    }

    onClick = (index) => {
        var chk = true;
        function isEquivalent(a, b) {
            if ((a.content !== b.val().content) || (a.studyName !== b.val().studyName)) {
                return false;
            } else {
                return true;
            }
        }
        const temp = this.state.data.slice();
        const subTemp = { content: temp[index].content, studyName: temp[index].studyName };
        firebase_db.ref('todolist/' + this.state.user + '/').on('value', (snapshot) => {
            snapshot.forEach((child) => {
                const state = child.key;
                child.forEach((subChild) => {
                    if (isEquivalent(subTemp, subChild) && chk) {
                        
                        chk = false;
                        if (state == "todo") {
                            console.log("test")
                            firebase_db.ref('todolist/' + this.state.user + '/' + state + '/' + subChild.key).remove();
                            firebase_db.ref('todolist/' + this.state.user + '/progress/').push(
                                {
                                    content: subChild.val().content,
                                    studyName: subChild.val().studyName
                                }
                            )
                            return true;
                        } else if (state == "progress") {
                            firebase_db.ref('todolist/' + this.state.user + '/' + state + '/' + subChild.key).remove();
                            firebase_db.ref('todolist/' + this.state.user + '/done/').push(
                                {
                                    content: subChild.val().content,
                                    studyName: subChild.val().studyName
                                }
                            )
                            return true;
                        }
                        return true;
                    }
                })
            })
            return true;
        })
        this.state.parent.navigation.replace('ToDoPage')
        //firebase 데이터 적용 -> set 화면 리로딩
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: 54,
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
    },
    itemActive: {
        fontSize: 12,
        color: '#23E01C',
    },
    itemInActive: {
        fontSize: 16,
        color: '#828B85',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 53,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    childRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    parentHr: {
        height: 1,
        color: 'white',
        width: '100%',

    },
    colorActive: {
        borderColor: '#23E01C',
    },
    colorInActive: {
        borderColor: '#828B85',
    },
    profile: {
        width: 35,
        height: 35,
        borderRadius: 25,
    }

});