import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput ,TouchableOpacity,Button ,ScrollView,FlatList} from 'react-native';
import { withOrientation } from 'react-navigation';
import { SliderBox } from "react-native-image-slider-box";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function ChantPage({navigation, route}) {
    const [chatType, setChatType] = useState('')

    return(
        <View style={styles.container}>
            
            
     <View style={{backgroundColor:"#ffd3ae"}}>
       <Text style={{fontSize:20, textAlign:"center", marginTop:12}}>StudyGroup Name: </Text>
       <View style={{borderBottomColor: '#D5D5D5', borderBottomWidth: 1, paddingBottom:10}}/>
     </View>
 
 
 
 
 
 
 <View>
   <View style={{backgroundColor:"white", flexDirection:"row"}}>
   <Button title="   +   "></Button>
     <TextInput 
       value={chatType}
       onChangeText={(chatType)=>setChatType(chatType)}
       placeholder="TYPE CHAT"
       style={styles.chatInput}></TextInput>
     <Button style={styles.sendBtn} title=" send " onPress={()=>{sendChat(userID,chatType)}}></Button>
   </View>
            
</View>

        </View>
    );

}


const styles = StyleSheet.create({

    container:{
        flex: 1,
     flexDirection: 'column',
     justifyContent: 'space-between',
     backgroundColor: "white"
    },

    chatInput:{
        width:302,
        height:40,
        backgroundColor:"#e8e8e8",
        marginLeft:2,
        marginRight:2,
        paddingLeft:15
      },

    sendBtn:{
        backgroundColor:'blue'
    },
    
    body:{
        backgroundColor:'white',
        width:380,
        height:677,
        borderRadius:20,
        marginTop:70,
        alignItems:'center',

        
    },
    propilImage:{
        width:130,
        height:130,
        borderRadius:60,
        marginTop:-65
        
    },
    name:{
        fontSize:20,
        marginTop:10
    },
    studyName:{
        alignSelf:'flex-start',
        fontSize:22,
        fontWeight:'700',
        marginLeft:35,
        marginTop:10
    },
    studyShort:{
        fontSize:16,
        marginTop:15,
        color:'gray'
    },
    info:{
        width:318,
        height:80,
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        marginTop:20,
        flexDirection:'row'

    },
    infoBox:{
        width:'33.3%',
        height:60,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:0.5
    },
    infoBox2:{
        width:'33.3%',
        height:60,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    infoImage:{
        width:18,
        height:18
    },
    infoTxt:{
        fontSize:15,
        marginTop:7,
        color:'gray'
    },
    studyDetail:{
        width:318,
        height:305,
        borderWidth:0.5,
        marginTop:15,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10
    },
    joinButton:{
        width:318,
        height:53,
        borderRadius:20,
        backgroundColor:'#7cd175',
        justifyContent:'center',
        alignItems:'center',
        marginTop:8
    },
    joinTxt:{
        fontSize:16,
        fontWeight:'700',
        color:'white'
    }


});

