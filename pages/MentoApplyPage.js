import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, FlatList, Modal, Pressable } from 'react-native';
import { AsyncStorage, Picker } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permisssions from 'expo-notifications';
import Constants from 'expo-constants';


var firebaseConfig = {
    apiKey: "AIzaSyAhALJl-3lVlNXoIueqpfcR1gfLEkJXOxc",
    authDomain: "studyapp-3e58f.firebaseapp.com",
    databaseURL: "https://studyapp-3e58f-default-rtdb.firebaseio.com",
    projectId: "studyapp-3e58f",
    storageBucket: "studyapp-3e58f.appspot.com",
    messagingSenderId: "514395246608",
    appId: "1:514395246608:web:2c39981eed6d3602b4fa95",
    measurementId: "G-GL08SPFWYS"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
var list = [];

AsyncStorage.getItem('user').then(
    (value) => {
        firebase.database().ref("requestStudy").on('value', (snapshot) => {
            list = [];
            snapshot.forEach((child1) => {
                var child = child1.val().chattingRoom;
                var heart = false;
                var heart_img = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/heart%20icon.png?alt=media&token=ac8afea9-122e-4cd1-a2f9-0632d5b8b608";
                // heart init
                var heart_mento = child.heart_mento;
                if (heart_mento) {
                    Object.values(heart_mento).forEach(e => {
                        if (value == e.user) {
                            heart = true;
                            heart_img = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/heart.png?alt=media&token=f1d57d52-74d4-4d41-8c9c-7bd02c51bc5a";
                        } else {
                            heart_img = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/heart%20icon.png?alt=media&token=ac8afea9-122e-4cd1-a2f9-0632d5b8b608";
                            heart = false;
                        }
                    })
                }
                list.push({
                    user: child.user,
                    key: child1.key,
                    subject: child.subject,
                    day: child.day,
                    studyName: child.studyName,
                    wish: child.wish,
                    people: child.people,
                    apply_mento: child.apply_mento,
                    heart: heart,
                    heart_img: heart_img,
                    image: "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4"
                })
            })
            list = Array.from(new Set(list));
        });
        
    }
);



export default function MentoApplyPage() {
    const [getName, setName] = useState('');
    const [subject, setSubject] = useState("");
    const [people, setPeople] = useState("");
    const [day, setDay] = useState("");
    const [masterList, setMasterList] = useState(list);
    const [filteredList, setFilteredList] = useState(list);
    const [modalVisible, setModalVisible] = useState(false);
    const [topFilter, setTopFilter] = useState(1);
    const [top_color,setTop_color] = useState(["black","#646363", "#646363" ]);
    const [a, setA] = useState("");
    AsyncStorage.getItem('user').then(
        (value) =>
            setName(value)
    );

    useEffect(() => {
        (() => registerForPushNotificationsAsync())();
    }, []);

    const registerForPushNotificationsAsync = async () => {
        var token;
        if (Constants.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (token) {
            console.log(getName);
            firebase.database().ref('users/' + "aaa" + '/token').set(token);
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        return token;
    }


    const Filtering = (sel_sub, sel_peo, sel_day) => {
        if (sel_sub || sel_peo || sel_day) {
            const newData = masterList.filter(
                function (item) {
                    var filter_chk = false;
                    if (sel_sub && sel_peo && sel_day) {
                        if (sel_sub === item.subject && sel_peo === item.people && sel_day === item.day) {
                            filter_chk = true;
                        }
                    } else if (!sel_sub && !sel_peo && sel_day) {
                        if (sel_day === item.day) {
                            filter_chk = true;
                        }
                    } else if (!sel_sub && sel_peo && !sel_day) {
                        if (sel_peo === item.people) {
                            filter_chk = true;
                        }
                    } else if (sel_sub && !sel_peo && !sel_day) {
                        if (sel_sub === item.subject) {
                            filter_chk = true;
                        }
                    } else if (!sel_sub && sel_peo && sel_day) {
                        if (sel_peo === item.people && sel_day === item.day) {
                            filter_chk = true;
                        }
                    } else if (sel_sub && !sel_peo && sel_day) {
                        if (sel_sub === item.subject && sel_day === item.day) {
                            filter_chk = true;
                        }
                    } else if (sel_sub && sel_peo && !sel_day) {
                        if (sel_sub === item.subject && sel_peo === item.people) {
                            filter_chk = true;
                        }
                    }
                    return filter_chk;
                }
            );
            setFilteredList(Array.from(new Set(newData)));
        } else {
            setFilteredList(Array.from(new Set(list)));
        }
    }

    const double_chk = (item, user) => {
        var double = false;
        if (item.chattingRoom.apply_mento) {
            Object.values(item.chattingRoom.apply_mento).forEach(e => {
                if (user == e.user) {
                    double = true;
                    return double;
                } else {
                    double = false;
                }
            })
        }
        return double;
    }



    const apply = async (item, user) => {
        var token = "";
        firebase.database().ref("users/" + item.user).on('value', snapshot => {
            token = snapshot.val().token;
        });
        var key = item.key;
        firebase.database().ref("requestStudy/" + item.key ).on('value', (snapshot) => {
            item = snapshot.val()
        });

        if (double_chk(item, user)) {
            Alert.alert("이미 신청 완료된 스터디 입니다.");
        } else {
            Alert.alert(
                "신청 확인",
                "신청 하시겠습니까?",
                [
                    {
                        text: "Ok",
                        onPress: () => {
                            const message = {
                                to: `${token}`,
                                sound: 'default',
                                title: item.studyName + "멘토 신청",
                                body: user + '님이 멘토 신청을 하였습니다.',
                                data: { someData: 'goes here' },
                            };

                            fetch('https://exp.host/--/api/v2/push/send', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Accept-encoding': 'gzip, deflate',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(message),
                            });
                            firebase.database().ref('/requestStudy/' + key + '/chattingRoom/apply_mento').push().update({
                                user
                            });
                            Alert.alert("신청 되었습니다.")
                        }
                    },
                    {
                        text: "cancle"
                    }
                ],
                { cancelable: false }
            );
        }
    }

    useEffect(() => {
        (() => setFilteredList(Array.from(new Set(filteredList))))();
    }, []);

    const ref = firebase.database().ref('/requestStudy/');
    const heartchk = (item, user) => {
        if (item.heart == true) {
            var same_key = [];
            ref.child(item.key + '/chattingRoom/heart_mento').once("value").then(function (snapshot) {
                var name = snapshot.val();
                for (var e in name) {
                    if (user === name[e].user) {
                        same_key.push(e);
                    }
                }
                same_key.forEach(i => {
                    ref.child(item.key + '/chattingRoom/heart_mento/' + i).remove();
                })
            });
            item.heart_img = ("https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/heart%20icon.png?alt=media&token=ac8afea9-122e-4cd1-a2f9-0632d5b8b608");
            item.heart = (false);
        } else {
            ref.child(item.key + '/chattingRoom/heart_mento').push().update({
                user
            });
            item.heart = (true);
            item.heart_img = ("https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/heart.png?alt=media&token=f1d57d52-74d4-4d41-8c9c-7bd02c51bc5a");
        }
        setA(item.heart_img);
    }

    
    const top_menu = (ith, user) => {
        var new_top_color = [0,1,2];
        for(var i in new_top_color){
            if(ith == i){
                new_top_color[i] = "black";
            }else{
                new_top_color[i] = "#646363"
            }
        }
        setTop_color(new_top_color);

        if (ith == 0) {
            setFilteredList(Array.from(new Set(list)));
        } else if (ith == 1) {
            const newData = masterList.filter(
                function (item) {
                    var filter_chk = false;
                    if(item.apply_mento){
                        // object 타입을 리스트 형태로 변환 하든가 오브젝트에서 각 요소를 뽑아오기.
                        console.log(typeof(Array.from(Object.values(item.apply_mento))))
                        for(var e in Object.values(item.apply_mento)){
                            // if(user == Ob)
                        }
                    }else{
                        filter_chk = false;
                    }
                    return filter_chk;
                }
            );
            setFilteredList(Array.from(new Set(newData)));
        } else{
            setFilteredList(Array.from(new Set(list)));
        }
    }

    const ItemView = ({ item }) => {
        return (
            <View style={styles.studylist} >
                <View style={styles.study}>
                    <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                        <Image style={styles.subjectimage} source={{ uri: item.image }} />
                        <View style={{ justifyContent: 'space-evenly', width: 270, height: 75 }}>
                            <Text>신청 과목 : {item.subject}</Text>
                            <Text>요일 : {item.day}</Text>
                            <Text>희망 멘토 : {item.wish}</Text>
                            <Text>인원 : {item.people}명</Text>
                        </View>
                        <TouchableOpacity onPress={() => { heartchk(item, getName) }}><Image style={{ width: 25, height: 25 }} source={{ uri: item.heart_img }} /></TouchableOpacity>
                    </View>
                    <View style={styles.studybutton}>
                        <Modal
                            animationType="none"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <View >
                                        <Text style={styles.modalText}>스터디 이름 : {item.studyName}</Text>
                                        <Text style={styles.modalText}>스터디 장 : {item.user}</Text>
                                        <Text style={styles.modalText}>과목 : {item.subject}</Text>
                                        <Text style={styles.modalText}>요일 : {item.day}</Text>
                                        <Text style={styles.modalText}>인원수 : {item.people}</Text>
                                        <Text style={styles.modalText}>희망 사항 : {item.wish}</Text>
                                    </View>
                                    <Pressable
                                        style={styles.buttonClose}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>확인 완료</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}><Text style={{ color: '#646363' }}>상세보기</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => apply(item, getName)} ><Text style={{ color: '#7cd175' }}>신청하기</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );

    };

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity onPress = {() => {top_menu(0,getName)}}><Text style={[{color: top_color[0] },styles.top_menu]}>전체</Text></TouchableOpacity>
                <TouchableOpacity onPress = {() => {top_menu(1,getName)}}><Text style={[{color: top_color[1] },styles.top_menu]}>신청 스터디</Text></TouchableOpacity>
                <TouchableOpacity onPress = {() => {top_menu(2,getName)}}><Text style={[{color: top_color[2] },styles.top_menu]}>나를 찜한</Text></TouchableOpacity>
            </View>
            <View style={styles.searchFilter} >
                <Text style={{ marginBottom: 15, marginLeft: 10, fontWeight: '700', fontSize: 14 }}>검색 필터</Text>
                <View style={styles.Filters} >
                    <View style={{ marginLeft: 10, borderWidth: 4, borderColor: '#f0f0f0', borderRadius: 10 }}>
                        <Picker
                            selectedValue={subject}
                            style={styles.Filters}
                            onValueChange={(value) => (setSubject(value), Filtering(value, people, day))}
                            mode="dropdown"
                        >
                            <Picker.Item color="grey" label="과목" value='' />
                            <Picker.Item label="개발" value="개발" />
                            <Picker.Item label="내신" value="내신" />
                            <Picker.Item label="창업" value="창업" />
                            <Picker.Item label="토익" value="토익" />
                        </Picker>

                    </View>

                    <View style={{ marginHorizontal: 10, borderWidth: 3, borderColor: '#f0f0f0', borderRadius: 10 }}>
                        <Picker
                            selectedValue={people}
                            style={styles.Filters}
                            onValueChange={(value) => (setPeople(value), Filtering(subject, value, day))}
                            mode="dropdown"
                        >
                            <Picker.Item color="grey" label="인원수" value="" />
                            <Picker.Item label="3명" value="3" />
                            <Picker.Item label="4명" value="4" />
                            <Picker.Item label="5명" value="5" />
                        </Picker>
                    </View>

                    <View style={{ borderWidth: 3, borderColor: '#f0f0f0', borderRadius: 10 }}>
                        <Picker
                            selectedValue={day}
                            style={styles.Filters}
                            onValueChange={(value) => (setDay(value), Filtering(subject, people, value))}
                            mode="dropdown"
                        >
                            <Picker.Item color="grey" label="요일" value="" />
                            <Picker.Item label="월" value="월" />
                            <Picker.Item label="화" value="화" />
                            <Picker.Item label="수" value="수" />
                            <Picker.Item label="목" value="목" />
                            <Picker.Item label="금" value="금" />
                            <Picker.Item label="토" value="토" />
                            <Picker.Item label="일" value="일" />
                        </Picker>
                    </View>
                </View>
            </View>

            <FlatList
                data={Array.from(new Set(filteredList))}
                renderItem={ItemView}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    top_menu:{
        marginHorizontal: 5,
        fontWeight: '700',
        fontSize: 18, 
        borderBottomWidth: 1.5
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    menu: {
        paddingLeft: 5,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    searchFilter: {
        borderBottomWidth: 0.5,
        height: 75,
        borderBottomColor: 'gray',
        justifyContent: 'flex-end',
        backgroundColor: "white",
    },
    Filters: {
        paddingBottom: 20,
        flexDirection: 'row',
        height: 35,
        width: 110,
        alignItems: 'center'
    },
    studylist: {
        marginTop: 10,
        flexDirection: 'column',
        borderRadius: 10,
        alignItems: 'center'
    },
    study: {
        height: 130,
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingTop: 10,
        marginBottom: 6,
        borderRadius: 10,
        width: 397
    },
    subjectimage: {
        width: 75,
        height: 75,
        borderRadius: 60,
        borderColor: '#f0f0f0',
        borderWidth: 3,
        marginRight: 15,
    },
    studybutton: {
        flexDirection: 'row',
        paddingTop: 10
    },
    button: {
        flex: 1,
        borderWidth: 3,
        borderColor: '#f0f0f0',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: 350,
        height: 500,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#7cd175',
        justifyContent: 'center'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})