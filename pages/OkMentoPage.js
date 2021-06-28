import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList,TextInput,TouchableWithoutFeedback} from 'react-native';
import firebase from 'firebase'
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
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default function OkMentoPage({navigation,key1,key2}) {
    console.disableYellowBox = true;

    
    const [getName, setName] = useState('');
    

    AsyncStorage.getItem('user').then(
        (value) =>
            setName(value)
    );
    
    

    var DATA = []
    useEffect(()=>{ 
            
        
        
    },[])



    const selectList = [
        {name: "이 름", intro:"한줄 소개", subject:"과목", university:"학교",date:'희망 요일', image:"https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4"},
        {name: "이 름", intro:"한줄 소개", subject:"과목", university:"학교",date:'희망 요일', image:"https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4"},
        {name: "이 름", intro:"한줄 소개", subject:"과목", university:"학교",date:'희망 요일', image:"https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4"},
        {name: "이 름", intro:"한줄 소개", subject:"과목", university:"학교",date:'희망 요일', image:"https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/profile.jpg?alt=media&token=dc164977-d60c-4ae6-a6a3-46062c73b7e4"},
      ]

      const ItemView = ({ item }) => {

        return (
          // Single Comes here which will be repeatative for the FlatListItems
          <TouchableOpacity style={styles.selectMento}>
                <View style={styles.imageContain}>
                    <View style={styles.mentoImageBox}>
                        <Image style={{width:80, height:80, borderRadius:40}}
                                source={{uri:item.image}}/>
                    </View>
                    <View style={styles.mentoNameBox}>
                        <Text style={styles.mentoName}>{item.name}</Text>
                    </View>
                </View>
                <View style={styles.introContain}>
                    <Text style={styles.introText}>{item.intro}</Text>
                    <Text style={styles.etcText}>{item.subject}</Text>
                    <Text style={styles.etcText}>{item.university}</Text>
                    <Text style={styles.etcText}>{item.date}</Text>
                </View>
                <View style={styles.iconContain}>
                    <TouchableOpacity>
                    <Image style={{width:25,height:25,marginLeft:20}}
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/heart%20icon%20(2).png?alt=media&token=24ea64ad-5ede-4c43-98b2-a86cefa214f5'}}/></TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
      };

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
            <View style={styles.underTitle}>
                <TouchableOpacity style={styles.underTitleButton}>
                    <Text style={styles.listText}>전체</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.underTitleButton}>
                    <Text style={styles.listText}>관심 멘토</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            data={selectList}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    underTitle:{
        height:40,
        width:'100%',
        backgroundColor:'#ededed',
        paddingLeft:5,
        flexDirection:'row',
        alignItems:'center'
    },
    listText:{
        color:'#8d8d8d',
        fontSize:13,
        fontWeight:'700',
        marginLeft:15       
    },
    selectMento:{
        width:390,
        height:140,
        backgroundColor:'#fff',
        marginTop:10,
        flexDirection:'row',
        borderRadius:10,
        alignItems:'center'
    },
    imageContain:{
        flex:3,
        borderRightWidth:0.5,
        height:110,
        alignItems:'center'
    },
    introContain:{
        flex:6,
        height:110,
        justifyContent:'center',
        paddingLeft:12
    },
    iconContain:{
        flex:2,
        height:110,
        alignItems:'center',
        
    },
    mentoImageBox:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:0.5,
        borderColor:'gray'
    },
    mentoNameBox:{
        width:90,
        height:18,
        marginTop:8,
        justifyContent:'center',
        alignItems:'center'
    },
    mentoName:{
        fontSize:13
    },
    introText:{
        fontSize:13,
        color:'gray'
    },
    etcText:{
        fontSize:10,
        color:'#000',
        marginTop:6
    }

})
