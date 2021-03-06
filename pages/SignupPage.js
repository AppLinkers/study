import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import firebase from 'firebase';
import RadioGroup from 'react-native-custom-radio-group';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, CheckBox, FlatList } from 'react-native';


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

const sexlist = [{
  label: '남',
  value: 'male'
},
{
  label: '여',
  value: 'female'
}]

const data = [
  { id: 1, value: "개발", isChecked: false },
  { id: 2, value: "창업", isChecked: false },
  { id: 3, value: "자격증", isChecked: false },
  { id: 4, value: "취업", isChecked: false }
];

export default function signup({ navigation }) {
  const [signUpName, setSignUpName] = useState('');
  const [signUpSex, setSignUpSex] = useState('');
  const [signUpID, setSignUpID] = useState('');
  const [signUpPW, setSignUpPW] = useState('');
  const [checkPW, setCheckPW] = useState('');
  const [signUpHP, setSignUpHP] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpStudy, setSignUpStudy] = useState(data);
  const [idOk, setidOk] = useState(false);


  const handleChange = (id) => {
    let temp = signUpStudy.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setSignUpStudy(temp);
  };

  let selected = signUpStudy.filter((product) => product.isChecked);

  const renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: 'row-reverse',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <CheckBox
                  value={item.isChecked}
                  onChange={() => {
                    handleChange(item.id);
                  }}
                />
                <Text>{item.value}</Text>
              </View>
        )}
      />
    );
  };

  
  function doubleChk(idOk, id){
    setidOk(true);
    firebase.database().ref('/users').on("value", snapshot =>{
      snapshot.forEach((child) => {
        if(id === child.key){
          setidOk(false);
        }
      })
   }); 
   if (idOk && id){
     alert('사용 가능한 ID 입니다.');
   }else{
     alert("id를 입력해 주세요")
   }
  }

  function Signup(idOk,name, sex, id, pw, chkpw, hp, email, selected) {
    const studylist = [];

    selected.forEach(element => {
      studylist.push(element.value)
    });

    const inputlist = [name, sex, id, pw, chkpw, hp, email]
    if (!(idOk)) {
      alert('ID 중복확인 필요');
    }else if (pw !== chkpw) {
      alert('비밀번호 확인');
    } else if (inputlist.includes('')) {
      alert('필수사항 입력 필요');
    } else {
      var ref = firebase.database().ref('users/' + id);
      ref.set({
        name: name,
        sex: sex,
        id: id,
        pw: pw,
        hp: hp,
        email: email,
        study: studylist,
        coin: 10
      })
      var todoRef = firebase.database().ref('todolist/'+id);
      todoRef.set({
        confirmed:{
          init:{
            content : 'nothing'
          }
        },
        done : {
          init : {
            content : 'nothing'
          }
        },
        progress : {
          init : {
            content : "nothing"
          }
        },
        todo : {
          init : {
            content : "nothing"
          }
        }
      })
      navigation.goBack();
    }

  }

  navigation.setOptions({
    title: '회 원 가 입',
    headerStyle: {
      backgroundColor: '#fff',
      height: 100,
    },
    headerTitleAlign: 'center',
    headerTintColor: '#000'
  })


  return (
    <View style={styles.container}>
      <TouchableOpacity style ={styles.button} ></TouchableOpacity>
      <ScrollView>
        <Text style={{ marginTop: 30, alignSelf: 'flex-start', marginLeft: 5, fontSize: 14, color: 'black', }}>이 름</Text>

        <TextInput
          style={styles.textinput}
          onChangeText={text => setSignUpName(text)}
          value={signUpName}
          placeholder="실명을 입력하세요"
        />

        <Text style={styles.inputExplain}>성 별</Text>
        <RadioGroup
          style = {styles.sexBox}
          radioGroupList={sexlist}
          buttonContainerActiveStyle = {{backgroundColor: '#7cd175'}}
          buttonTextActiveStyle = {{color: 'white'}}
          onChange={(value) => {setSignUpSex(value);}} />

        <Text style={styles.inputExplain}>이메일</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setSignUpEmail(text)}
          value={signUpEmail}
          placeholder="이메일 주소"
        />
        <Text style={styles.inputExplain}>휴대폰 번호</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setSignUpHP(text)}
          value={signUpHP}
          placeholder="'-' 구분없이 입력"
        />
        <Text style={styles.inputExplain}>아이디</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.textinput1}
            onChangeText={text => setSignUpID(text)}
            vlaue={signUpID}
            placeholder="아이디"
          />
          <TouchableOpacity 
            style={styles.sameButton}
            onPress = {() => doubleChk(idOk, signUpID)}>
            <Text style={{ color: '#7cd175', fontSize: 12, fontWeight: '700' }}>중 복 확 인</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inputExplain}>비밀번호</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setSignUpPW(text)}
          value={signUpPW}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
        <Text style={styles.inputExplain}>비밀번호 확인</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => setCheckPW(text)}
          value={checkPW}
          placeholder="비밀번호 확인"
          secureTextEntry={true}
        />
        <Text style={styles.inputExplain}>관심 스터디</Text>
        <View style={{ flex: 1 }}>{renderFlatList(signUpStudy)}</View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => Signup(idOk,signUpName, signUpSex, signUpID, signUpPW, checkPW, signUpHP, signUpEmail, selected)}
        style={styles.button}>
        <Text style={{ fontSize: 15, color: '#fff', fontWeight: '700' }}>Sign up</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'

  },

  textinput: {
    width: 325,
    height: 45,
    paddingLeft: 7,
    paddingTop: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1.5,
    borderBottomColor: '#7cd175'

  },
  textinput1: {
    width: 225,
    height: 45,
    paddingLeft: 7,
    paddingTop: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1.5,
    borderBottomColor: '#7cd175'
  },
  inputExplain: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 14,
    color: 'black',
    marginTop: 15

  },
  sexBox: {
    borderWidth: 0.5,
    width: 160,
    height: 45,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    marginHorizontal: 2.5

  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  sameButton: {
    width: 100,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#7cd175'
  },
  button: {
    backgroundColor: '#7cd175',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 350,
    borderRadius: 20,
    marginBottom: 10
  },
  checkbox: {
    marginLeft: 10
  }
});
