import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function MainPage() {
return(
    <View style={styles.container}>
        <StatusBar style='auto'/>
        <View style={styles.container1}>
            <View style={styles.title}><Text>AppLinker's</Text></View>
            <View style={styles.underTitle}><Text>이달의 스터디</Text></View>
            <ScrollView style={styles.image}
                        horizontal={true}>
                <TouchableOpacity style={styles.imageButton}><Text>스티디1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}><Text>스티디2</Text></TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}><Text>스티디3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}><Text>스티디4</Text></TouchableOpacity>

            </ScrollView>
            <View style={styles.underImage}><Text>스터디</Text></View>
        </View>
        <ScrollView style={styles.container2}>
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
        flex:1,
       
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
        height:100,
        justifyContent:'flex-end',
        paddingLeft:20,
        paddingBottom:10
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
        marginTop:15
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