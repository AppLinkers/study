import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList,TextInput} from 'react-native';
import firebase from 'firebase'


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
  
  
  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
  }

export default function requestStudy({navigation}) {
    console.disableYellowBox = true;
    const [studyName, setStudyName] = useState('');
    const [studyIntro, setStudyIntro] = useState('');
    const [studySubject, setStudySubject] = useState('');
    const [studyPeople, setStudyPeople] = useState('');
    const [studyDay, setStudyDay] = useState('');
    const [studyLocate, setStudyLocate] = useState('');
    const [studyTerm, setStudyTerm] = useState('');
    const [studyExplain, setStudyExplain] = useState('');
    const [studyWish, setStudyWish] = useState('');

    function Request(studyName,intro,subject,people,day,locate,term,explain,wish){
        const inputlist = [studyName,intro,subject,people,day,locate,term,explain,wish]
        const ref = firebase.database().ref().child('requestStudy');
        
        if (inputlist.includes('')){
            alert('모든 항목을 입력해주세요!');
        } else{
            ref.push().set({
            'chattingRoom':{
                studyName: studyName,
                intro: intro,
                subject : subject,
                people : people,
                day : day,
                locate : locate ,
                term : term,
                explain : explain,
                wish : wish
                }
                })
            
        navigation.navigate("MainPage")
            }
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.infoBox}>
                <Image style={{width:6,height:6,marginTop:29,marginLeft:5}}
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/green%20dot.png?alt=media&token=49ab3066-77cf-4c47-9401-a98af127200d'}}/>
                <Text style={styles.infoText}>주요 정보</Text>
            </View>
            <Text style={styles.title}>스터디 이름</Text>
            <TextInput 
            style={styles.input}
            placeholder="스터디 이름"
            onChangeText={text => setStudyName(text)}
            value={studyName}/>
            <Text style={styles.title}>스터디 소개</Text>
            <TextInput 
            style={styles.input} 
            placeholder="스터디 소개나 목표를 입력하세요"
            onChangeText={text => setStudyIntro(text)}
            value={studyIntro}/>
            <Text style={styles.title}>과 목</Text>
            <TextInput 
            style={styles.input} 
            placeholder="과목을 입력하세요"
            onChangeText={text => setStudySubject(text)}
            value={studySubject}/>
            <View style={styles.infoBox}>
                <Image style={{width:6,height:6,marginTop:27,marginLeft:5}}
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/green%20dot.png?alt=media&token=49ab3066-77cf-4c47-9401-a98af127200d'}}/>
                <Text style={styles.infoText}>상세 정보</Text>
            </View>
            <Text style={styles.title}>희망 인원</Text>
            <TextInput 
            style={styles.input} 
            placeholder="희망 인원수를 입력하세요" 
            keyboardType='number-pad'
            onChangeText={text => setStudyPeople(text)}
            value={studyPeople}/>
            <Text style={styles.title}>희망 요일</Text>
            <TextInput 
            style={styles.input} 
            placeholder="희망 요일을 모두 입력하세요"
            onChangeText={text => setStudyDay(text)}
            value={studyDay}/>
            <Text style={styles.title}>위 치</Text>
            <TextInput 
            style={styles.input} 
            placeholder="위치를 입력하세요 ex) OO시 OO구" 
            onChangeText={text => setStudyLocate(text)}
            value={studyLocate}/>
            <Text style={styles.title}>기 간</Text>
            <TextInput 
            style={styles.input} 
            placeholder="스터디 기간을 입력하세요"
            onChangeText={text => setStudyTerm(text)}
            value={studyTerm}/>
            <Text style={styles.title}>스터디 설명</Text>
            <TextInput 
            style={styles.input2} 
            placeholder="스터디에 대한 설명을 구체적으로 적어주세요!" 
            multiline={true}
            onChangeText={text => setStudyExplain(text)}
            value={studyExplain}/>
            <Text style={styles.title}>멘토에게 바라는 점</Text>
            
            <TextInput 
            style={styles.input1} 
            placeholder="멘토에게 바라는 점을 적어주세요!" 
            multiline={true}
            onChangeText={text => setStudyWish(text)}
            value={studyWish}/>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=>Request(studyName,studyIntro,studySubject,studyPeople,studyDay,studyLocate,studyTerm,studyExplain,studyWish)}>
                <Text style={{color:'#fff', fontWeight:'700', fontSize:14}}>신 청 하 기</Text>
            </TouchableOpacity>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        alignItems:'center'
    },
    infoBox:{
        width:330,
        height:50,
        borderBottomColor:'gray',
        borderBottomWidth:0.5,
        marginTop:20,
        flexDirection:'row',
        alignSelf:'center'
    },
    infoText:{
        color:'gray',
        marginTop:20,
        marginLeft:5
    },
    title:{
        marginTop:15,
        alignSelf:'flex-start',
        marginLeft:10,
        fontWeight:'700',
        fontSize:13
    },
    input:{
        width:330,
        height:40,
        borderBottomWidth:1.5,
        borderBottomColor:'#7cd175',
        paddingLeft:8,
        fontSize:12
    },
    input1:{
        width:330,
        height:100,
        borderWidth:1.5,
        borderColor:'#7cd175',
        paddingLeft:10,
        paddingRight:10,
        fontSize:12,
        marginTop:15,
        textAlignVertical:'top',
        paddingTop:10
    },
    input2:{
        width:330,
        height:180,
        borderWidth:1.5,
        borderColor:'#7cd175',
        paddingLeft:10,
        paddingRight:10,
        fontSize:12,
        marginTop:15,
        textAlignVertical:'top',
        paddingTop:10
    },
    button:{
        width:330,
        height:60,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#7cd175',
        borderWidth:2,
        borderColor:'#7cd175',
        marginBottom:20
    }
})
