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
      
      function selcetStudy(){
        navigation.navigate("SelectPage")
      }
    
return(
    
    <View style={styles.container}>
        

        <View style={styles.container1}>

            <View style={styles.title}>
                <Image 
                    source={require('../assets/logo.png')}
                    style={{width:150,height:40}}/>

                <Text style={{fontWeight:"bold",fontSize:20, marginRight:10, marginTop:12}}>Welcome {userID}</Text>
            </View>
        </View>

            <ScrollView>
            <SliderBox 
            images={images}
            style={{height:250}} 
            autoplay={true}  //자동 슬라이드 넘김
            circleLoop={true}
            onCurrentImagePressed={index => alert(`image ${index} pressed`)}/>


            <View style={styles.underImage}><Text style={{fontWeight:"bold",fontSize:30}}>Study</Text></View>
        
        
            <View style={styles.line1}>
                <TouchableOpacity onPress={selcetStudy}>
                    <Image
                        source={require('../assets/develop.png')}
                        style={{height:150, width:150,marginLeft:30}}
                        />
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={selcetStudy}>
                <Image
                        source={require('../assets/startup.png')}
                        style={{height:100, width:100, marginLeft:50, marginTop:20}}
                        />
                </TouchableOpacity>
            </View>
            <View style={styles.line2}>
                <TouchableOpacity onPress={selcetStudy}>
                    <Image
                        source={require('../assets/certifi.png')}
                        style={{height:100, width:100, marginLeft:56, marginTop:10}}
                        />
                </TouchableOpacity>
                <TouchableOpacity onPress={selcetStudy}>
                <Image
                        source={require('../assets/company.png')}
                        style={{height:120, width:120, marginLeft:70}}
                        />
                </TouchableOpacity>
            </View>
            </ScrollView>
        <View style={styles.container3}>
            <TouchableOpacity style={styles.mainmenu}><Text style={styles.mainmenuText}>홈</Text></TouchableOpacity>
            <TouchableOpacity style={styles.mainmenu} onPress={selcetStudy}><Text style={styles.mainmenuText}>Study</Text></TouchableOpacity>
            <TouchableOpacity style={styles.mainmenu}><Text style={styles.mainmenuText}>QnA</Text></TouchableOpacity>
            <TouchableOpacity style={styles.mainmenu}><Text style={styles.mainmenuText}>My</Text></TouchableOpacity>
        </View>
    </View>
        )
};

const styles = StyleSheet.create({
    container:{
        flex:1
       
    },
    container1:{
       
    },
    container2:{
        
        backgroundColor:'yellow',
               
    },
    container3:{
        
        backgroundColor:'skyblue',
        height:55,
        borderTopWidth:1,
        borderTopColor:'#D5D5D5',
        flexDirection:'row'
    },
    title:{
        borderWidth:1,
        paddingTop:10,
        justifyContent:'space-between',
        flexDirection: "row",
        paddingLeft:10,
        paddingBottom:10,
        backgroundColor:"white"
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
        alignItems:'center',
        borderWidth:1,
        height:50,
        paddingTop:5
    },
    line1:{
        flexDirection:'row'
    },
    line2:{
        flexDirection:'row'
    },
    button:{
        borderWidth:1,
        width:180,
        height:100,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:25,
        marginTop:30
    },
    mainmenu:{
        width:103,
        alignItems:'center',
        paddingTop:8,
        paddingBottom:8,
        backgroundColor:'white'
    },
    mainmenuText:{
        marginTop:4,
      fontSize:20
    }


})