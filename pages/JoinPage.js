import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import { withOrientation } from 'react-navigation';
import { SliderBox } from "react-native-image-slider-box";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function JoinPage({navigation, route}) {

    function goToChat(){
        navigation.navigate("ChatPage");
    }


    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.body}>
                <Image style={styles.propilImage} source={require('../assets/profile.jpg')}/>
                <Text style={styles.name}>이 름</Text>
                <Text style={styles.studyName}>스터디 이름</Text>
                <Text style={styles.studyShort}>"스터디 간단 소개"</Text>
                <View style={styles.info}>
                    <View style={styles.infoBox}>
                        <Image style={styles.infoImage} source={require('../assets/location.jpg')}/>
                        <Text style={styles.infoTxt}>위 치</Text>
                    </View>
                    <View style={styles.infoBox}>
                        <Image style={styles.infoImage} source={require('../assets/people.jpg')}/>
                        <Text style={styles.infoTxt}>인원수</Text>
                    </View>
                    <View style={styles.infoBox2}>
                        <Image style={styles.infoImage} source={require('../assets/date.jpg')}/>
                        <Text style={styles.infoTxt}>기 간</Text>
                    </View>
                </View>
                <View style={styles.studyDetail}><Text>설명란 (테두리 없음)</Text></View>
                <TouchableOpacity style={styles.joinButton} onPress={goToChat}><Text style={styles.joinTxt}>Join it!</Text></TouchableOpacity>
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

