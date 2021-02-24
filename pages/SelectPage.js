import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList, AsyncStorage} from 'react-native';
import firebase from 'firebase';

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


export default function SelectPage({navigation}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
const[userID, setUserID]=useState('')

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


  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View
      style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
    />
    );
  };

  

  const ItemView = ({ item }) => {

    return (
      // Single Comes here which will be repeatative for the FlatListItems
      <TouchableOpacity style={styles.chat} onPress={goToChat}>
            <View style={styles.chat1}><Text style={styles.chatName}>{item.title}</Text><Text style={styles.chatPeople}>6</Text></View>
            <View style={styles.chat2} >
              <View style={styles.chatImage}>
                <Image style={styles.jpg}
                       source={{uri: item.image}}></Image>
              </View>
              <View style={styles.chatContnet}>
                <Text style={styles.hostName}>{item.host}</Text>
                <Text style={styles.hostIntro}
                      numberOfLines={1}>{item.subTitle}</Text>
              </View>
              <View style={styles.chatDate}><Text style={styles.date}>{item.date}</Text></View>
            </View>
          </TouchableOpacity>
    );
  };


  const selectList = [
    {title: "React-native Study", host:"안승우", subTitle:"expo 이용해서 앱출시까지 마쳐봐요", date:"2021-02-09"+ " 개설", image:"https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4"},
    {title: "스타트업 스터디", host:"정승완", subTitle:"창업 컨퍼런스 인원 모집합니다!", date:"2021-02-09"+ " 개설", image:"https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile2.jpg?alt=media&token=be4087a4-4ff5-4fe7-b0a2-b1c233f99313"},
    {title: "JAVA 스터디", host:"이유석", subTitle:"코딩테스트 공부 같이해요", date:"2021-02-09"+ " 개설",image:"https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile3.jpg?alt=media&token=d83432d6-bc4d-4df3-96a3-966b62653934"},
    {title: "애견 스터디", host:"Rex", subTitle:"나를 범해주세요 주인님 하앍", date:"2021-02-09"+ " 개설", image:"https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile4.jpg?alt=media&token=78f0a31b-2b53-4a52-aaa7-7b66a4a7dc4c"},
  ]

  return (
      <View style={styles.container}>
        
        <ScrollView style={styles.selectStudy} horizontal={true}>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>기초개발</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>앱/웹 개발</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>시스템 개발</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>보안</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>인공지능</Text></TouchableOpacity>
          <TouchableOpacity style={styles.selectStudyList}><Text style={styles.selectStudyTxt}>기타</Text></TouchableOpacity>
        </ScrollView>
        <ScrollView style={styles.chatContainer}>


          <FlatList
            data={selectList}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            keyExtractor={(item, index) => index.toString()}
            />
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
  height:5
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
}


})
