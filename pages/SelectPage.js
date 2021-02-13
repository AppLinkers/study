import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';

export default function SelectPage({navigation}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석


  function goToChat(){
    navigation.navigate("ChatPage");
  }


  return (
      <View style={styles.container}>
        
        <View style={styles.alramContainer}>
                    <Text style={{color:'white',
                        fontSize:15, marginLeft:15}}>공 지 사 항</Text>
        </View>
        <ScrollView style={styles.chatContainer}>


          <TouchableOpacity style={styles.chat} onPress={goToChat}>
            <View style={styles.chat1}><Text style={styles.chatName}>React-native 스터디</Text><Text style={styles.chatPeople}>6</Text></View>
            <View style={styles.chat2}>
              <View style={styles.chatImage}>
                <Image style={styles.jpg}
                       source={require('../assets/profile.jpg')}></Image>
              </View>
              <View style={styles.chatContnet}>
                <Text style={styles.hostName}>안승우</Text>
                <Text style={styles.hostIntro}
                      numberOfLines={1}>expo 이용해서 앱출시까지 마쳐봐요!</Text>
              </View>
              <View style={styles.chatDate}><Text style={styles.date}>2021-02-09 개설</Text></View>
            </View>
          </TouchableOpacity>





          <TouchableOpacity style={styles.chat}>
            <View style={styles.chat1}><Text style={styles.chatName}>스타트업 스터디</Text><Text style={styles.chatPeople}>8</Text></View>
            <View style={styles.chat2}>
              <View style={styles.chatImage}>
                <Image style={styles.jpg}
                       source={require('../assets/profile2.jpg')}></Image>
              </View>
              <View style={styles.chatContnet}>
                <Text style={styles.hostName}>정승완</Text>
                <Text style={styles.hostIntro}
                      numberOfLines={1}>창업 컨퍼런스 인원 모집합니다!</Text>
              </View>
              <View style={styles.chatDate}><Text style={styles.date}>2021-02-09 개설</Text></View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={styles.chat}>
            <View style={styles.chat1}><Text style={styles.chatName}>JAVA 스터디</Text><Text style={styles.chatPeople}>10</Text></View>
            <View style={styles.chat2}>
              <View style={styles.chatImage}>
                <Image style={styles.jpg}
                       source={require('../assets/profile3.jpg')}></Image>
              </View>
              <View style={styles.chatContnet}>
                <Text style={styles.hostName}>이유석</Text>
                <Text style={styles.hostIntro}
                      numberOfLines={1}>코딩테스트 공부 같이해요!</Text>
              </View>
              <View style={styles.chatDate}><Text style={styles.date}>2021-02-09 개설</Text></View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={styles.chat}>
            <View style={styles.chat1}><Text style={styles.chatName}>산책 스터디</Text><Text style={styles.chatPeople}>6</Text></View>
            <View style={styles.chat2}>
              <View style={styles.chatImage}>
                <Image style={styles.jpg}
                       source={require('../assets/profile4.jpg')}></Image>
              </View>
              <View style={styles.chatContnet}>
                <Text style={styles.hostName}>Rex</Text>
                <Text style={styles.hostIntro}
                      numberOfLines={1}>렉스 귀여워</Text>
              </View>
              <View style={styles.chatDate}><Text style={styles.date}>2021-02-09 개설</Text></View>
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
alramContainer: {
  marginTop:10,
  backgroundColor:'white',
  justifyContent:'center',
  height:25,
  backgroundColor:'#A5DF00'
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
