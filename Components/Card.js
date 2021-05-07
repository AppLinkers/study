import React from 'react'
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'



export default function Card({content,navigation}){
  
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
    return(
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
    )}

    const styles = StyleSheet.create({
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