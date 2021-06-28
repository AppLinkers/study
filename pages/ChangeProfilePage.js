import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase'

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
  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
  }

export default function ChangeProfilePage({navigation}) {

    const [getName, setName] = useState('');
    const [fixPhone, setFixPhone] = useState('');
    const [fixEmail, setFixEmail] = useState('');
    const [fixInterest, setFixInterest] = useState('');

    AsyncStorage.getItem('user').then(
        (value) =>
          setName(value)
      );


    AsyncStorage.getItem('email').then((value)=> setFixEmail(value))

    function fixData(){
        firebase.database().ref('/users/'+getName+'/hp').set(fixPhone);
    }


    return(
    <View style={styles.container}>
        <Image style={styles.profileImage} source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4'}}/>
        <TouchableOpacity style={styles.changeImage} >
            <Image style={styles.camera} source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/camera%20icon.png?alt=media&token=9c66d14d-21b3-491b-9bff-3760c1c018d6'}}/>
        </TouchableOpacity>
        <Text style={styles.name}>{getName}</Text>
        <TextInput style={styles.chatTxt} placeholder="상태메세지를 입력하세요"/>
        <View style={styles.seperator}/>
        <View style={{flexDirection:'row',marginTop:30,width:350}}>
            <Image style={styles.icon} source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/book%20icon.png?alt=media&token=7970a274-1345-4e15-84a7-c8dcea894d68'}}/>
            <Text style={styles.profileTxt}>참여중인 스터디 이름</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:20,width:350}}>
            <Image style={styles.icon} source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/mail%20icon.png?alt=media&token=702a3b77-e758-46b7-9d8f-bae694e50465'}}/>
            <TextInput
                value={fixEmail}
                style={styles.fixInput}
                onChangeText ={(fixEmail) =>setFixEmail(fixEmail)}
            />
        </View>
        <View style={{flexDirection:'row',marginTop:20,width:350}}>
            <Image style={styles.icon} source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/phone%20icon.png?alt=media&token=5d46c37a-c5c0-4d07-9794-181812614754'}}/>
            <TextInput
                value={fixPhone}
                style={styles.fixInput}
                onChangeText ={(fixPhone) =>setFixPhone(fixPhone)}
            />
        </View>
        <View style={{flexDirection:'row',marginTop:20,width:350}}>
            <Image style={styles.icon} source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/heart%20icon.png?alt=media&token=ac8afea9-122e-4cd1-a2f9-0632d5b8b608'}}/>
            <TextInput
                value={fixInterest}
                style={styles.fixInput}
                onChangeText ={(fixInterest) =>setFixInterest(fixInterest)}
            />
        </View>
        <TouchableOpacity style={styles.button} onPress={fixData}>
            <Text style={{fontSize:20, fontWeight:"bold", color:"#F8F8ff"}}> 수정하기 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.changePw}>
            <Text style={{marginTop:6,fontWeight:'700',fontSize:15}}>비밀번호 변경</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:12,marginTop:6}}>비밀번호 변경으로 계정을 안전하게 보호하세요</Text>
                <Image style={{width:20, height:20,marginLeft:80,marginTop:6}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/arrow%20icon.png?alt=media&token=d135dbcb-ec0f-4479-88c8-4f694605d37c'}}/>
            </View>
        </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center'
    },

    fixInput:{
        width:180, 
        borderBottomColor:"black", 
        paddingLeft:30, 
        marginLeft:10 ,
        borderBottomWidth:2
    },
    profileImage:{
        width:130,
        height:130,
        borderRadius:65,
        marginTop:30
    },
    changeImage:{
        width:35,
        height:35,
        borderRadius:17.5,
        backgroundColor:'#e1e1e1',
        marginLeft:100,
        marginTop:-40,
        justifyContent:'center',
        alignItems:'center'
    },
    camera:{
        width:40,
        height:40,
        borderRadius:15
    },
    name:{
        fontSize:17,
        fontWeight:'700',
        marginTop:15
    },
    chatTxt:{
        fontSize:13
    },
    seperator:{
        width:350,
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        marginTop:10
    },
    icon:{
        width:30,
        height:30
    },
    profileTxt:{
        marginLeft:25,
        fontSize:13,
        paddingTop:5
    },
    button:{
        marginTop:40,
        borderRadius:8,
        width:300,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#A5DF00'
      },
    changePw:{
        width:350,
        height:100,
        borderTopWidth:0.5,
        marginTop:100,
        borderTopColor:'gray'
    }
})