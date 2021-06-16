import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import {firebase_db} from '../firebaseConfig'
import firebase from 'firebase'
import Card from '../Components/Card'
import { AsyncStorage } from 'react-native';

export default function SelectPage({navigation,route}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
const[userID, setUserID]=useState('')
const[count, setCount]=useState('')
const [state,setState] = useState([])
AsyncStorage.getItem('user').then(
  (value) =>
    setUserID(value)
);

function goToChat(studyKey){
  var authTemp=[]
  var go = false;
  firebase.database().ref('chat/'+studyKey+'/auth').on("child_added", snapshot =>{
    var authID = snapshot.val().id
    console.log(authID)
    authTemp.push(authID);
  })
  for(var i=0; i<authTemp.length; i++){
    if(authTemp[i]===userID){
      go = true;
    }
  }
  console.log(go)
  if(go==true){
    navigation.navigate("ChatPage",{key : studyKey})
  }else{
    console.log(studyKey)
    navigation.navigate("JoinPage",{key: studyKey})

  }
}
  
let DATA = []
  useEffect(() => {
    firebase_db.ref('requestStudy').on('value',(snapshot) => {
      
      snapshot.forEach((child) => {
        DATA.push({
          key : child.key,
          user: child.child('chattingRoom').val().user,
          studyName: child.child('chattingRoom').val().studyName,
          subject: child.child('chattingRoom').val().subject,
          day: child.child('chattingRoom').val().day,
          people: child.child('chattingRoom').val().people,
          intro: child.child('chattingRoom').val().intro,
          example: child.child('chattingRoom').val().example,
          locate: child.child('chattingRoom').val().locate,
          term: child.child('chattingRoom').val().term,
          wish: child.child('chattingRoom').val().wish,
          
        })
      })
    });
    //console.log(DATA)
    setState(DATA)
  },[])
  const ItemView = ({ item }) => (
      <TouchableOpacity style={styles.chat} onPress={()=>goToChat(item.key)}>
	      <View style={styles.chat1}>
            <Text style={styles.chatName}>{item.studyName}</Text>
            <Text style={styles.chatPeople}>{item.people}</Text>
        </View>
        <View style={styles.chat2} >
            <View style={styles.chatImage}>
              <Image style={styles.jpg}
                       source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4'}}></Image>
            </View>
            <View style={styles.chatContnet}>
              <Text style={styles.hostName}>{item.user}</Text>
              <Text style={styles.hostIntro}
                      numberOfLines={1}>{item.intro}</Text>
            </View>
          <View style={styles.chatDate}><Text style={styles.date}>{item.day}</Text></View>
          </View>
      </TouchableOpacity>
);

const ItemSeparatorView = () => {
  return (
    //Item Separator
    <View
    style={{ height: 1, width: '100%', backgroundColor: '#f5f5f5' }}
  />
  );
};
  
  
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

        
            <FlatList 
              data={state}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
              keyExtractor={(item, index) => index.toString()}/>

        
        
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage} source={require('../assets/homeButton.png')}></Image></TouchableOpacity>
          <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../assets/chatButton.png')}></Image></TouchableOpacity>
          <TouchableOpacity style={styles.underButton}><Text style={{fontSize:15, color:'gray',fontWeight:'500'}}>QnA</Text></TouchableOpacity>
          <TouchableOpacity style={styles.underButton}><Text style={{fontSize:18, paddingBottom:10, color:'gray',fontWeight:'700'}}>. . .</Text></TouchableOpacity>
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
  width:25,
  height:25
},
buttonImage2:{
  width:20,
  height:20
},
chat:{
  height:140,
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
  marginLeft:20,
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
  alignItems:'center',
  marginLeft:15
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
  marginTop:50,
  color:'gray',
  marginRight:5,
},


})
