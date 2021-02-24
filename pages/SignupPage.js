import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

// main
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

// test
/*var firebaseConfig = {
  apiKey: "AIzaSyA6mVXJi_3GY-oqhrPuiJwzaZAPikQ6Gbk",
  authDomain: "test-eeaf5.firebaseapp.com",
  databaseURL: "https://test-eeaf5-default-rtdb.firebaseio.com",
  projectId: "test-eeaf5",
  storageBucket: "test-eeaf5.appspot.com",
  messagingSenderId: "148353670549",
  appId: "1:148353670549:web:3701244a0151f0fe106a9c",
  measurementId: "G-NGZGMLYRF1"
};*/

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function signup() {

  state = {
    signUpSex: "Male",
    signUpStudy : "basic",
    signUpEmailServer : "@gmail.com",
  };

  const [signUpName, setSignUpName] = useState('이름를 입력하세요');
  const [signUpSex, setSignUpSex] = useState('성을 입력하세요');
  const [signUpID, setSignUpID] = useState('아이디를 입력하세요');
  const [signUpPW, setSignUpPW] = useState('비밀번호를 입력하세요');
  const [signUpHP, setSignUpHP] = useState('핸드폰 번호를 입력하세요');
  const [signUpEmail, setSignUpEmail] = useState('이메일을 입력하세요');
  const [signUpEmailServer, setSignUpEmailServer] = useState('이메일서버를 입력하세요');
  const [signUpStudy, setSignUpStudy] = useState('관심 스터디를 입력하세요');

  function Signup(name, sex, id, pw, hp, email,emailServer, study) {
    var ref = firebase.database().ref('users/' + id);
    ref.set({
      name: name,
      sex: sex,
      id: id,
      pw: pw,
      hp: hp,
      email: email + emailServer,
      study: study,
      coin: 10
    })

  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        onChangeText={text => setSignUpName(text)}
        signUpName={signUpName}
        placeholder="성명을 입력하세요"
      />
      
      <RNPickerSelect
        style={{ ...pickerSelectStyles }}
        placeholder={{
          label: '성별을 선택하세요',
          value: null,
        }}
        onValueChange={value => setSignUpSex(value)}
        signUpSex={signUpSex}
        items={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
      />

      <TextInput
        style={styles.textinput}
        onChangeText={text => setSignUpID(text)}
        signUpID={signUpID}
        placeholder="아이디를 입력하세요"
      />

      <TextInput
        style={styles.textinput}
        onChangeText={text => setSignUpPW(text)}
        signUpPW={signUpPW}
        placeholder="비밀번호를 입력하세요"
      />

      <TextInput
        style={styles.textinput}
        onChangeText={text => setSignUpHP(text)}
        signUpHP={signUpHP}
        placeholder="핸드폰 번호를 입력하세요"
      />
      <View 
        style={emailStyles.email}>
        <TextInput
          
          onChangeText={text => setSignUpEmail(text)}
          signUpEmail={signUpEmail}
          placeholder="이메일을 입력하세요"
        />
        <Text>@</Text>
        <RNPickerSelect
          placeholder={{
            label: '직접 입력',
            value: null,
          }}
          onValueChange={value => setSignUpEmailServer(value)}
          signUpEmailServer={signUpEmailServer}
          items={[
            { label: "gmail.com", value: "@gmail.com" },
            { label: "naver.com", value: "@naver.com" },
          ]}
        />
      </View>
      

      <RNPickerSelect
        placeholder={{
          label: '관심 스터디를 선택하세요',
          value: null,
        }}
        style={{ ...pickerSelectStyles }}
        onValueChange={value => setSignUpStudy(value)}
        signUpStudy={signUpStudy}
        items={[
          { label: "basic", value: "basic" },
          { label: "A.I", value: "A.I" },
          { label: "back-end", value: "back-end" },
          { label: "front-end", value: "front-end" },
          { label: "start-up", value: "start-up" },
        ]}
      />


      <TouchableOpacity
        onPress={() => Signup(signUpName, signUpSex, signUpID, signUpPW, signUpHP, signUpEmail,signUpEmailServer, signUpStudy)}
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
    justifyContent: 'center'
  },

  textinput: {
    width: 200,
    height: 25,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30
  },
  emailinput: {
    width: 100,
    height: 25,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30
  },
  
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      marginLeft:100,
      width: 200,
      fontSize: 16,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: 'white',
      color: 'black',
  },
});

const emailStyles = StyleSheet.create({
  email:{
    justifyContent : 'center'
  }
});
