import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput ,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return(

        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerName}>My Page</Text>
            </View>
            <View style={styles.profile}>
                <View style={styles.profileImage}>
                    <Image style={styles.image} source={require('./assets/profile.jpg')}/>
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>이 름</Text>
                    <Text>아이디</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.profileChange}>
                <Text style={{color:'white', fontWeight:'500'}}>프로필 변경</Text>
            </TouchableOpacity>
            <View style={styles.banner}>
                <Text style={{marginLeft:15, fontSize:18, color:'white'}}>튜터 신청</Text>
            </View>
            <View style={styles.listTitle}>
                <Text style={{fontSize:20, fontWeight:'700'}}>고객센터</Text>
            </View>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName}>공지사항</Text></TouchableOpacity>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName}>문의하기</Text></TouchableOpacity>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName}>사용 가이드</Text></TouchableOpacity>
            <View style={styles.listTitle}>
                <Text style={{fontSize:20, fontWeight:'700'}}>코인센터</Text>
            </View>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName}>코인 충전</Text></TouchableOpacity>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName}>코인 환급</Text></TouchableOpacity>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName}>코인 결제</Text></TouchableOpacity>
            <DrawerItemList {...props} />


        
        </ScrollView>

    );
};


const styles = StyleSheet.create({
    header:{
        height:80,
        backgroundColor:'#7cd175',
        justifyContent:'flex-end'
    },
    headerName:{
        paddingLeft:15,
        paddingBottom:10,
        fontSize:20,
        fontWeight:'700',
        color:'white'
    },
    profile:{
        height:150,
        flexDirection:'row'
    },
    profileImage:{
        flex:1,
        justifyContent:'center',
        paddingLeft:10,
    },
    image:{
        width:120,
        height:120,
        borderRadius:60
    },
    profileInfo:{
        flex:1,
        justifyContent:'center',
        paddingLeft:5
    },
    profileName:{
        fontSize:20,
        fontWeight:'700',
        marginBottom:7
    },
    profileChange:{
        width:255,
        height:35,
        borderRadius:10,
        alignSelf:'center',
        backgroundColor:'#7cd175',
        justifyContent:'center',
        alignItems:'center'
    },
    banner:{
        height:68,
        backgroundColor:'#fa7470',
        marginTop:12,
        justifyContent:'center'
    },
    listTitle:{
        height:80,
        borderBottomWidth:2,
        borderBottomColor:'#7cd175',
        justifyContent:'flex-end',
        paddingLeft:15,
        paddingBottom:10
    },
    listContainer:{
        height:68,
        justifyContent:'center',
        paddingLeft:15
    }
   
});


export default CustomDrawer;