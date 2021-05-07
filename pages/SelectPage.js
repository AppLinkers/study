import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import {firebase_db} from '../firebaseConfig'
import firebase from 'firebase'
import Card from '../Components/Card'
import { AsyncStorage } from 'react-native';


export default function SelectPage({navigation}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
const[userID, setUserID]=useState('')

const [state,setState] = useState([])


AsyncStorage.getItem('user').then(
  (value) =>
    setUserID(value)
);

function goToChat(){
  var authTemp=[]
  var go = false;
  firebase.database().ref('chat/devChat/auth').on("child_added", snapshot =>{
    var authID = snapshot.val().id
    authTemp.push(authID);
  })
  for(var i=0; i<authTemp.length; i++){
    if(authTemp[i]===userID){
      go = true;
    }
  }

  if(go==true){
    navigation.navigate("ChatPage")
  }else{
    navigation.navigate("JoinPage")
  }
}
  

  useEffect(() => {
    firebase_db.ref('requestStudy').once('value').then((snapshot) => {
      console.log("파이어베이스에서 데이터 가져왔습니다!!")
      let request = snapshot.val();
      setState(request)
     
    });
  },[])

 

  

  
  return (
      <View style={styles.container}>
        <View style={{height:40}}>
        <ScrollView style={styles.selectStudy} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>기초개발</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>앱/웹 개발</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>시스템 개발</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>보안</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>인공지능</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>기타</Text></TouchableOpacity>
        </ScrollView>
        </View>
        
        <ScrollView>
        <TouchableOpacity style={styles.chat} onPress={goToChat}>
            <View style={styles.chat1}>
              <Text style={styles.chatName}>개발스터디</Text>
              <Text style={styles.chatPeople}>6</Text>
            </View>
            <View style={styles.chat2} >
              <View style={styles.chatImage}>
                <Image style={styles.jpg}
                       source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4'}}></Image>
              </View>
              <View style={styles.chatContnet}>
                <Text style={styles.hostName}>안승우</Text>
                <Text style={styles.hostIntro}
                      numberOfLines={1}>열심히 해요</Text>
              </View>
              <View style={styles.chatDate}><Text style={styles.date}>2021-04-09</Text></View>
            </View>
          </TouchableOpacity>
        
        
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage} source={require('../assets/homeButton.png')}></Image></TouchableOpacity>
          <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../assets/chatButton.png')}></Image></TouchableOpacity>
          <TouchableOpacity style={styles.underButton}><Text style={{fontSize:18, color:'gray',fontWeight:'500'}}>QnA</Text></TouchableOpacity>
          <TouchableOpacity style={styles.underButton}><Text style={{fontSize:20, paddingBottom:10, color:'gray',fontWeight:'700'}}>. . .</Text></TouchableOpacity>
        </View> 

        
      </View>
  )

}

const styles = StyleSheet.create({
container:{
        flex:1,
        backgroundColor:'white',
},
header:{
    backgroundColor:'white',
    width:'100%',
    height:70,
    flexDirection:'row',
},
nameContainer:{
  flex:6,
  paddingLeft:10,
  paddingTop:5
},
icons:{
  flex:4,
  backgroundColor:'white',
  flexDirection:'row',
  justifyContent:'flex-end',
  paddingTop:15,
  paddingRight:10,

},
AppName:{
    marginTop:15,
    fontSize:25,
    color:'#A5DF00',
    fontWeight:'700'

},
icon:{
  height:40,
  width:40,
  marginRight:7
},
selectStudy: {
  backgroundColor:'#7cd175',
  height:5,
},
selectStudyList:{
  width:100,
  alignItems:'center',
  justifyContent:'center',

},
selectStudyTxt:{
  fontSize:13,
  fontWeight:'700',
  color:'white'
},
buttonContainer:{
  justifyContent:'flex-end',
  height:60,
  flexDirection:'row',
  backgroundColor:'#F2F2F2'
},
underButton:{
  width:'25%',
  justifyContent:'center',
  alignItems:'center'
},
buttonImage:{
  width:30,
  height:30
},
buttonImage2:{
  width:25,
  height:25
},
chat:{
  height:150,
  borderBottomColor:'gray'
},
chat1:{
  flex:2,
  backgroundColor:'white',
  flexDirection:'row'
},
chat2:{
  flex:3,
  flexDirection:'row'
},
chatName:{
  fontSize:22,
  marginTop:15,
  marginLeft:15,
  fontWeight:'700',
  
},
chatPeople:{
  marginTop:25,
  marginLeft:10,
  color:'gray'
},
chatImage:{
  flex:3,
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center'
},
jpg:{
  width:80,
  height:80,
  borderRadius:40
},
chatContnet:{
  flex:7,
  backgroundColor:'white',
  flexDirection:'column',
  paddingLeft:10
},
hostName:{
  marginTop:15,
  fontWeight:'700',
  fontSize:15
  
},
hostIntro:{
  marginTop:3,
  fontSize:13
},
chatDate:{
  flex:3,
  flexDirection:'column',
  backgroundColor:'white'

},
date:{
  fontSize:10,
  marginTop:70,
  color:'gray',
  marginRight:5,
},


})
