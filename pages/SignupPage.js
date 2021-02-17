import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import firebase from 'firebase';
import {  StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';


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

export default function signup({navigation}) {


  const [signUpName, setSignUpName] = useState('');
  const [signUpSex, setSignUpSex] = useState('');
  const [signUpID, setSignUpID] = useState('');
  const [signUpPW, setSignUpPW] = useState('');
  const [signUpHP, setSignUpHP] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpStudy, setSignUpStudy] = useState('');

 function Signup(name,sex,id,pw,hp,email,study){
    var ref = firebase.database().ref('users/'+id);

    ref.set({
      name: name,
      sex: sex,
      id : id,
      pw : pw,
      hp : hp,
      email : email ,
      study : study,
      coin : 10
    })
    navigation.navigate("LoginPage")
 }

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.textinput}
      onChangeText={text => setSignUpName(text)}
      value={signUpName}
      placeholder="성명을 입력하세요"
      />

      <TextInput
      style={styles.textinput}
      onChangeText={text => setSignUpSex(text)}
      value={signUpSex}
      placeholder="성별을 입력하세요"
      />


      <TextInput
      style={styles.textinput}
      onChangeText={text => setSignUpID(text)}
      vlaue={signUpID}
      placeholder="아이디를 입력하세요"
      />

      <TextInput
      style={styles.textinput}
      onChangeText={text => setSignUpPW(text)}
      value={signUpPW}
      placeholder="비밀번호를 입력하세요"
      />

      <TextInput
      style={styles.textinput}
      onChangeText={text => setSignUpHP(text)}
      value={signUpHP}
      placeholder="핸드폰 번호를 입력하세요"
      />

      <TextInput
      style={styles.emailinput}
      onChangeText={text => setSignUpEmail(text)}
      value={signUpEmail}
      placeholder="이메일을 입력하세요"
      />      

      <TextInput
      style={styles.textinput}
      onChangeText={text => setSignUpStudy(text)}
      value={signUpStudy}
      placeholder="관심 스터디를 입력하세요"
      />      

      
      <TouchableOpacity
        onPress={() => Signup(signUpName,signUpSex,signUpID,signUpPW,signUpHP,signUpEmail,signUpStudy)}
        style={{ backgroundColor: 'gray' }}>
        <Text style={{ fontSize: 15, color: '#fff' }}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinput:{
    width:200,
    height: 25, 
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom:30 
  },

  emailinput:{
    width:200,
    height: 25, 
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom:30 
  }
});
