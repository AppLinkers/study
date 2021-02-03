import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image 
        style={styles.mainImage}
        source={require('../assets/smart.png')}></Image>
        <Text style={styles.txt}>Follow Your Dream!</Text>
        <TextInput 
          style={styles.ID}
          placeholder='ID'></TextInput>
        <TextInput 
          style={styles.PW}
          placeholder='PassWord'></TextInput>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonTxt}>로 그 인</Text></TouchableOpacity>
        <TouchableOpacity style={styles.enter}><Text style={styles.enterTxt}>아직 회원이 아니신가요?</Text></TouchableOpacity>
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
  mainImage: {
    width:300,
    height:80
  },
  txt:{
    marginTop:15,
    fontSize:20,
    fontWeight:'700'  
  },
  ID:{
    borderWidth:3,
    width:300,
    height:60,
    marginTop:20,
    paddingLeft:15,
    borderColor:'#A5DF00',
    borderRadius:8
  },
  PW:{
    borderWidth:3,
    borderRadius:8,
    width:300,
    height:60,
    marginTop:20,
    borderColor:'#A5DF00',
    paddingLeft:15,
  },
  button:{
    marginTop:15,
    borderRadius:8,
    width:300,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#A5DF00'
  },
  buttonTxt:{
    fontSize:20,
    fontWeight:'700',
    color:'white'
  },
  enter:{
    marginTop:30,
    borderBottomWidth:1,
    borderColor:'#81DAF5'
  },
  enterTxt:{
    color:'#81DAF5'
  }

});
