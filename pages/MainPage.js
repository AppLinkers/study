import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import { withOrientation } from 'react-navigation';
import { SliderBox } from "react-native-image-slider-box";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function MainPage({navigation, route}) {

    const images= [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        require('../assets/logo.png'),          // Local image
      ]

      
      const {userID} = route.params;

      const developRef = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/develop.png?alt=media&token=1e2847dd-0cdf-49bf-8c0b-bfc58cc12cf3"
      const companyRef = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/company.png?alt=media&token=cb416474-5fdc-4d47-9266-b799737bcffc"
      const startupRef = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/startup.png?alt=media&token=91f7eac3-6ae0-4099-ae9d-6866d0db49c5"
      const certifiRef = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/certifi.png?alt=media&token=c8cf7006-a106-4569-a82d-023d39c89a60"



      function selcetStudy(){
        navigation.navigate("SelectPage")
      }
    
return(
    
    <View style={styles.container}>
        

        <View style={styles.header}>
            <View style={styles.nameContainer}><Text style={styles.AppName}>App Linker's</Text></View>
            <View style={styles.icons}>
                <TouchableOpacity><Image style={styles.icon}
                        source={require('../assets/myIcon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity><Image style={styles.icon}
                        source={require('../assets/settingIcon.png')}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.alramContainer}>
        </View>

            <ScrollView>
            <SliderBox 
            images={images}
            style={{height:250, borderRadius:30, width:400,marginLeft:5, marginTop:10}} 
            autoplay={true}  //자동 슬라이드 넘김
            circleLoop={true}
            onCurrentImagePressed={index => alert(`image ${index} pressed`)}/>
            
            <TouchableOpacity style={styles.adBanner}></TouchableOpacity>


            <View style={styles.underImage}><Text style={{fontWeight:"bold",fontSize:30}}>Study</Text></View>
        
        
            <View style={styles.line1}>


                <TouchableOpacity onPress={selcetStudy} style={styles.studyBanner}>
                    <Text style={styles.studyTxt}>개 발</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={selcetStudy} style={styles.studyBanner2}>
                    <Text style={styles.studyTxt}>창 업</Text>
                </TouchableOpacity>
              
                <TouchableOpacity onPress={selcetStudy} style={styles.studyBanner3}>
                    <Text style={styles.studyTxt}>자 격 증</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={selcetStudy} style={styles.studyBanner4}>
                <Text style={styles.studyTxt}>취 업</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage} source={require('../assets/homeButton.png')}></Image></TouchableOpacity>
          <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../assets/chatButton.png')}></Image></TouchableOpacity>
          <TouchableOpacity style={styles.underButton}><Text style={{fontSize:18, color:'gray',fontWeight:'500'}}>Q&A</Text></TouchableOpacity>
          <TouchableOpacity style={styles.underButton}><Text style={{fontSize:20, paddingBottom:10, color:'gray',fontWeight:'700'}}>. . .</Text></TouchableOpacity>
        </View>
    </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1
       
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
        backgroundColor:'white',
        justifyContent:'center',
        height:5,
        backgroundColor:'#A5DF00',
        marginTop:10
      },
    container2:{
        
        backgroundColor:'yellow',
               
    },
    underTitle:{
        borderWidth:1,
        height:50
    },
    image:{
        marginTop:20
    },
    imageButton:{
        width:300,
        height:200,
        borderWidth:1,
        borderRadius:40,
        marginLeft:20
    },
    underImage:{
        height:50,
        marginTop:25,
        paddingLeft:10
    },
    adBanner:{
        width:'100%',
        height:80,
        marginTop:30,
        backgroundColor:'#FA5858'
    },
    line1:{
        alignItems:'center',
    },
    studyBanner:{
        width:400,
        height:120,
        marginTop:15,
        borderRadius:20,
        justifyContent:'flex-end',
        backgroundColor:'#00FFBF'
    },
    studyBanner2:{
        width:400,
        height:120,
        marginTop:15,
        borderRadius:20,
        justifyContent:'flex-end',
        backgroundColor:'#FFBF00'
    },
    studyBanner3:{
        width:400,
        height:120,
        marginTop:15,
        borderRadius:20,
        justifyContent:'flex-end',
        backgroundColor:'#2E64FE'
    },
    studyBanner4:{
        width:400,
        height:120,
        marginTop:15,
        borderRadius:20,
        justifyContent:'flex-end',
        backgroundColor:'#CC2EFA'
    },
    studyTxt:{
        paddingBottom:10,
        paddingLeft:15,
        fontSize:35,
        color:'white',
        fontWeight:'700'
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