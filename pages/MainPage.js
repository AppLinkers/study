import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import { withOrientation } from 'react-navigation';
import { SliderBox } from "react-native-image-slider-box";


export default function MainPage() {

    const images= [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        require('/Users/seungwanjung/Desktop/github/study/assets/logo.png'),          // Local image
      ]
    
return(
    
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.container1}>

            <View style={styles.title}>
                <Image 
                    source={require('/Users/seungwanjung/Desktop/github/study/assets/logo.png')}
                    style={{width:150,height:40}}/>
            </View>

            <SliderBox 
            images={images}
            style={{height:250}} 
            onCurrentImagePressed={index => alert(`image ${index} pressed`)}/>

            <View style={styles.underImage}><Text>스터디</Text></View>
        </View>
        
            <View style={styles.line1}>
                <TouchableOpacity style={styles.button}><Text>개발</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text>창업</Text></TouchableOpacity>
            </View>
            <View style={styles.line2}>
                <TouchableOpacity style={styles.button}><Text>자격증</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text>취업</Text></TouchableOpacity>
            </View>
            </ScrollView>
        <View style={styles.container3}>
            <TouchableOpacity style={styles.mainmenu}><Text>홈</Text></TouchableOpacity>
            <TouchableOpacity style={styles.mainmenu}><Text>홈</Text></TouchableOpacity>
            <TouchableOpacity style={styles.mainmenu}><Text>홈</Text></TouchableOpacity>
            <TouchableOpacity style={styles.mainmenu}><Text>홈</Text></TouchableOpacity>
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
        borderTopColor:'gray',
        flexDirection:'row'
    },
    title:{
        borderWidth:1,
        paddingTop:15,
        justifyContent:'flex-end',
        paddingLeft:10,
        paddingBottom:15,
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
        borderWidth:1,
        height:50,
        marginTop:1
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

    }


})