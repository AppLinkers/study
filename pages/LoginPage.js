
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,KeyboardAvoidingView, Platform, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import CustomDrawer from '../CustomDrawer';
import App from '../App';
import { AsyncStorage } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

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


export default function LoginPage({navigation}, props) {

  console.disableYellowBox = true;

  const [typeID, setTypeId] = useState('');
  const [typePw, setTypePw] = useState('');
  const [done, setDone] = useState(false)
  const [IDchk, setIDchk] = useState(true)
  const [PWchk, setPWchk] = useState(true)

  function loginAuth(){
    const userIDs = []
    const userPWs = []
    firebase.database().ref('/users').on("child_added", snapshot =>{
        var userID = snapshot.val().id;
        userIDs.push(userID)
        var userPw = snapshot.val().pw;
        userPWs.push(userPw)
        var userCoin= snapshot.val().coin;
        var userPhone = snapshot.val().hp
        var userEmail = snapshot.val().userEmail
       
       if(userID===typeID){
          if(userPw===typePw){
            navigation.navigate("MainPage",{"userID":userID});
            AsyncStorage.setItem('user', userID); 
            AsyncStorage.setItem('coin', JSON.stringify(userCoin)); 
            AsyncStorage.setItem('phone', userPhone); 
            AsyncStorage.setItem('email', userEmail); 
          }
        }
    }); 
    
    if(userIDs.includes(typeID)){
      setIDchk(true)
      if(userPWs[userIDs.indexOf(typeID)] !== typePw){
        setPWchk(false)
        setTypePw('')
      }else{
        setPWchk(true)
      }
    }else{
      setIDchk(false)
      setTypeId('')
    }

  }

  function goToSignup(){
    navigation.navigate("SignupPage");
  }

  return (
    <KeyboardAvoidingView 
          style={styles.container}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <Text style={styles.AppName}>App Linker's</Text>
        
        <Text style={styles.txt}>Follow Your Dream!</Text>
        <TextInput
          style={styles.ID}
          value={typeID}
          onChangeText ={(typeID) =>setTypeId(typeID)}
          placeholder= {IDchk ? 'ID' : '해당 ID가 없습니다.'}
          placeholderTextColor = {IDchk ? 'gray' : '#FB0C08'}></TextInput>
        <TextInput 
          style={styles.PW}
          value={typePw}
          secureTextEntry={true}
          onChangeText ={(typePw) =>setTypePw(typePw)}
          placeholder={PWchk ? 'PassWord' : '비밀번호가 올바르지 않습니다.'}
          placeholderTextColor = {PWchk ? 'gray' : '#FB0C08'}></TextInput>
        <TouchableOpacity style={{marginTop:20}}><Text style={styles.forgetPW}>아이디/비밀번호 찾기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={loginAuth}><Text style={styles.buttonTxt}>로 그 인</Text></TouchableOpacity>
        <TouchableOpacity style={styles.enter} onPress={goToSignup}><Text style={styles.enterTxt}>아직 회원이 아니신가요?</Text></TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppName:{
    color:'#7cd175',
    fontSize:35,
    fontWeight:'700',
  },
  txt:{
    marginTop:15,
    fontSize:15,
    fontWeight:'700'  
  },
  ID:{
    borderBottomWidth:2,
    width:350,
    height:60,
    marginTop:20,
    paddingLeft:15,
    borderColor:'#7cd175',
    borderRadius:5,
    paddingTop:15
  },
  PW:{
    borderBottomWidth:2,
    borderRadius:5,
    width:350,
    height:60,
    marginTop:15,
    borderColor:'#7cd175',
    paddingLeft:15,
    paddingTop:15
  },
  forgetPW:{
    color:'gray',
    fontSize:12,
    marginLeft:220
  },
  button:{
    marginTop:20,
    borderRadius:6,
    width:350,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#7cd175'
  },
  buttonTxt:{
    fontSize:18,
    fontWeight:'700',
    color:'white'
  },
  enter:{
    marginTop:70,
    borderBottomWidth:1,
    borderColor:'#81DAF5'
  },
  enterTxt:{
    color:'#81DAF5'
  }

});
