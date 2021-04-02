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


var list = []
firebase.database().ref("requestStudy").on('value', (snapshot) => {
    snapshot.forEach((child) => {
        list.push({
            user: child.val().user,
            key: child.key,
            subject: child.val().subject,
            day: child.val().day,
            studyName: child.val().studyName,
            wish: child.val().wish,
            people: child.val().people,
            apply_mento: child.val().apply_mento,
            image: "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4"
        })
    })
});



export default function MentoApplyPage() {

    const [getName, setName] = useState('');
    const [subject, setSubject] = useState("");
    const [people, setPeople] = useState("");
    const [day, setDay] = useState("");
    const [masterList, setMasterList] = useState(list);
    const [filteredList, setFilteredList] = useState(list);
    const [modalVisible, setModalVisible] = useState(false);
    AsyncStorage.getItem('user').then(
        (value) =>
            setName(value)
    );
        
    useEffect(() => {
        (() => registerForPushNotificationsAsync())();
    }, []);

    const registerForPushNotificationsAsync = async () => {
        console.log(getName);
        let token;
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
            firebase.database().ref('/users/'+getName+'/token').set(token);
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
            setFilteredList(newData);
        } else {
            setFilteredList(list);
        }
    }

    const double_chk = (item,user) => {
        var double = false;
        if(item.apply_mento){
            Object.values(item.apply_mento).forEach(e => {
                if(user == e.user) {
                    double = true;
                    return double;
                }else{
                    double = false;
                }
            })
        }
        return double
    }

    const apply = async (item,user) => {
        console.log(item.user);
        if(double_chk(item,user)){
            Alert.alert("이미 신청 완료된 스터디 입니다.");
        }else{
            Alert.alert(
                "신청 확인",
                "신청 하시겠습니까?",
                [
                    {
                        text: "Ok",
                        onPress: (user) => {
                            const message = {
                                to: "ExponentPushToken[iYJVUIE61KovNJEM9z96xD]",
                                sound: 'default',
                                title: 'Original Title',
                                body: 'And here is the body!',
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
                            firebase.database().ref('/requestStudy/'+item.key+'/apply_mento').push().update({
                                 user
                            });
                            Alert.alert("신청 되었습니다.")}
                    },
                    {
                        text: "cancle"
                    }                
                ],
                {cancelable:false}
            );
        }
    }

    const ItemView = ({ item }) => (
        <View style={styles.studylist}>
            <View style={styles.study}>
                <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                    <Image style={styles.subjectimage} source={{ uri: item.image }} />
                    <View style={{ justifyContent: 'space-evenly', width: 270, height: 75 }}>
                        <Text>신청 과목 : {item.subject}</Text>
                        <Text>요일 : {item.day}</Text>
                        <Text>희망 멘토 : {item.wish}</Text>
                        <Text>인원 : {item.people}명</Text>
                    </View>
                    <TouchableOpacity ><Image style={{ width: 25, height: 25 }} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/full_star.png?alt=media&token=db37ebaf-d297-410a-8691-6feef73b1cd1" }} /></TouchableOpacity>
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
                                    <Text style={styles.modalText}>스</Text>
                                    <Text style={styles.modalText}>스</Text>
                                    <Text style={styles.modalText}>스</Text>
                                    <Text style={styles.modalText}>스</Text>
                                    <Text style={styles.modalText}>스</Text>
                                    <Text style={styles.modalText}>스</Text>
                                    <Text style={styles.modalText}>스</Text>
                                    <Text style={styles.modalText}>스</Text>
                                    <Text style={styles.modalText}>스</Text>
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
                    <TouchableOpacity style={styles.button} onPress={() => apply(item,getName)} ><Text style={{ color: '#7cd175' }}>신청하기</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity><Text style={{ marginHorizontal:5,fontWeight: '700', fontSize: 18, color: "black",borderBottomWidth: 1.5 }}>전체</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{ marginHorizontal:5,fontWeight: '700', fontSize: 18, color: "black", borderBottomWidth: 1.5 }}>신청 스터디</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{ marginHorizontal:5,fontWeight: '700', fontSize: 18, color: "black", borderBottomWidth: 1.5 }}>나를 찜한</Text></TouchableOpacity>
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
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                </View>
            </View>
            <FlatList
                data={filteredList}
                renderItem={ItemView}
                keyExtractor={(item) => item.key} />
        </View>
    )

    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    menu: {
        paddingLeft:5 ,
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
        borderRadius : 10,
        alignItems:'center'
    },
    study: {
        height: 130,
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingTop: 10,
        marginBottom: 6,
        borderRadius : 10,
        width : 397
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
        justifyContent:'center'
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
