import React, { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import SelectPage from './pages/SelectPage';
import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';
import JoinPage from './pages/JoinPage';
import SignupPage from './pages/SignupPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import CustomDrawer from './CustomDrawer';
import Test from './Test'



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




export default function App({navigation}){

  
  return (
    <NavigationContainer independent={true}>
      <Test/>
    </NavigationContainer>
    
    


    )
}







const styles = StyleSheet.create({
  header:{
    marginTop:15,
    marginBottom:15,
    fontSize:25,
    color:'#A5DF00',
    fontWeight:'700'
  },
  icon:{
    height:40,
    width:40,
    marginRight:7
  },
  nameContainer:{
    flex:6,
    paddingLeft:10,
    paddingTop:5
  },
  AppName:{
    marginTop:15,
    fontSize:25,
    color:'#A5DF00',
    fontWeight:'700'

},
alramContainer: {
  backgroundColor:'white',
  justifyContent:'center',
  height:5,
  backgroundColor:'#A5DF00',
  marginTop:10
},
})

