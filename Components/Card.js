import React from 'react'
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'



export default function Card({content,navigation}){
    function goToChat(){
        navigation.navigate("JoinPage");
      }
    return(
        <TouchableOpacity style={styles.chat} onPress={goToChat}>
            <View style={styles.chat1}><Text style={styles.chatName}>{content.title}</Text><Text style={styles.chatPeople}>6</Text></View>
            <View style={styles.chat2} >
              <View style={styles.chatImage}>
                <Image style={styles.jpg}
                       source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4'}}></Image>
              </View>
              <View style={styles.chatContnet}>
                <Text style={styles.hostName}>{content.host}</Text>
                <Text style={styles.hostIntro}
                      numberOfLines={1}>{content.subtitle}</Text>
              </View>
              <View style={styles.chatDate}><Text style={styles.date}>{content.date}</Text></View>
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