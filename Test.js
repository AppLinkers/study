import React, { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import SelectPage from './pages/SelectPage';
import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';
import SignupPage from './pages/SignupPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import CustomDrawer from './CustomDrawer';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




const NavigationDrawerStructure = (props) => {

  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image style={styles.icon}
                        source={require('./assets/myIcon.png')}/>
      </TouchableOpacity>
      <TouchableOpacity><Image style={styles.icon}
                        source={require('./assets/settingIcon.png')}/>
                </TouchableOpacity>
      <View style={styles.alramContainer}>
        </View>
    </View>
  );
}

function MainPageStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="LoginPage"
    screenOptions={{
      headerStatusBarHeight:60
    }}>
      <Stack.Screen name="MainPage"
        component={MainPage}
        options={{
          title: "App Linker's", //Set Header Title
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTitleStyle: styles.header,
        }}/>

        
        <Stack.Screen name="LoginPage" component={LoginPage} 
          options={{
          title: "App Linker's", //Set Header Title
          headerTitleStyle: styles.header,
        }}/>

        <Stack.Screen name ="SelectPage" component={SelectPage}
          options={{
          title: "App Linker's", //Set Header Title
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTitleStyle: styles.header,
        }}/>

        <Stack.Screen name="SignupPage" component={SignupPage} 
                  options={{
                  title: "App Linker's", //Set Header Title
                  headerTitleStyle: styles.header1,
                }}/>

        <Stack.Screen name ="ChatPage" component={ChatPage}
          options={{
          title: "App Linker's", //Set Header Title
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTitleStyle: styles.header,
        }}/>
    </Stack.Navigator>
  );
}


export default function Test(props){
  const id = props.userID;
  const coin = props.coin;
  const interest = props.interest;
    return(
    
    <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 5 },
          }}
          drawerContent={(props) => <CustomDrawer {...props} />}
          >
            <Drawer.Screen
            name="MainPage"
            options={{ drawerLabel: 'First page Option' }}
            component={MainPageStack}
          />
          <Drawer.Screen
            name="ChatPage"
            options={{ drawerLabel: 'Second page Option' }}
            component={MainPageStack}
          />
  
    </Drawer.Navigator>
    )}
  

  const styles = StyleSheet.create({
    header:{
      marginBottom:15,
      fontSize:25,
      color:'#A5DF00',
      fontWeight:'700'
    },
    header1:{
      marginBottom:15,
      fontSize:20,
      color:'black',
      fontWeight:'700',
      
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
  