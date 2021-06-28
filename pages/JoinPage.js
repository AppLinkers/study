import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import { withOrientation } from 'react-navigation';
import { SliderBox } from "react-native-image-slider-box";
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase'
import Constants from 'expo-constants';
import { AsyncStorage } from 'react-native';

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




export default function JoinPage({navigation, route}) {
    
    let user_idx = Constants.installationId
    const [getName, setName] = useState('');
    const [join,setJoin]= useState({})
    const {key} =route.params;

    AsyncStorage.getItem('user').then(
        (value) =>
            setName(value)
    );

    useEffect(()=>{
       
   /* firebase_db.ref('/requestStudy/'+key).once('value').then((snapshot) =>{
        console.log(snapshot)
    });*/
    firebase.database().ref('requestStudy/'+key).on("value", snapshot =>{
        var data = snapshot.val().chattingRoom
        setJoin(data)
      })
},[])
console.log(join)
console.log("---------")


    function goToChat(user){
        firebase.database().ref('requestStudy/' + key + '/chattingRoom/users').push().update({
            user
        });
        firebase.database().ref('chat/' + key + '/auth').push().update({
            id : user
        })
        navigation.navigate("ChatPage",{key : key});
    }


    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.body}>
                <Image style={styles.propilImage} source={require('../assets/profile.jpg')}/>
                <Text style={styles.name}>{join.user}</Text>
                <Text style={styles.studyName}>{join.studyName}</Text>
                <Text style={styles.studySubject}>{join.subject}</Text>
                <Text style={styles.studyShort}>{join.intro}</Text>
                <View style={styles.info}>
                    <View style={styles.infoBox}>
                        <Image style={styles.infoImage} source={require('../assets/location.jpg')}/>
                        <Text style={styles.infoTxt}>{join.locate}</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Image style={styles.infoImage} source={require('../assets/people.jpg')}/>
                        <Text style={styles.infoTxt}>{join.people} 명</Text>
                    </View>
                    <View style={styles.infoBox2}>
                        <Image style={styles.infoImage} source={require('../assets/date.jpg')}/>
                        <Text style={styles.infoTxt}>{join.term}</Text>
                    </View>
                </View>
                <View style={styles.studyDetail}><Text>{join.explain}</Text></View>
                <TouchableOpacity style={styles.joinButton} onPress={() => goToChat(getName)}><Text style={styles.joinTxt}>Join it!</Text></TouchableOpacity>
            </View>
                

            </ScrollView>

        </View>
    );

}


const styles = StyleSheet.create({

    container:{
        backgroundColor:'#c7bad9',
        flex:1,
        alignItems:'center'
    },
    
    body:{
        backgroundColor:'white',
        width:380,
        height:677,
        borderRadius:20,
        marginTop:150,
        alignItems:'center',

        
    },
    propilImage:{
        width:130,
        height:130,
        borderRadius:60,
        marginTop:-65
        
    },
    name:{
        fontSize:18,
        marginTop:10
    },
    studyName:{
        alignSelf:'flex-start',
        fontSize:20,
        fontWeight:'700',
        marginLeft:35,
        marginTop:10,
        color:'black'
    },
    studySubject:{
        alignSelf:'flex-start',
        fontSize:15,
        fontWeight:'700',
        marginLeft:35,
        marginTop:10,
        color:'black'
    },
    studySubject:{
        alignSelf:'flex-start',
        fontSize:15,
        fontWeight:'700',
        marginLeft:35,
        marginTop:10,
        color:'black'
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
        fontSize:13,
        marginTop:7,
        color:'gray'
    },
    studyDetail:{
        width:318,
        height:250,
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
        marginTop:20
    },
    joinTxt:{
        fontSize:16,
        fontWeight:'700',
        color:'white'
    }


});

