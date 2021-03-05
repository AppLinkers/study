import React, { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import SelectPage from './pages/SelectPage';
import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';
import JoinPage from './pages/JoinPage';
import SignupPage from './pages/SignupPage';
import ChangeProfilePage from './pages/ChangeProfilePage';
import BuyCoinPage from './pages/BuyCoinPage'
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
        <Image style={styles.icon1}
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/User%20icon%20(2).png?alt=media&token=f334db93-5686-4287-a29b-13ce9cec9b16'}}/>
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
          title: "", //Set Header Title
          headerTitleStyle: styles.header,
          headerStyle:{
            height:0
          }

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

<Stack.Screen name ="JoinPage" component={JoinPage}
          options={{
          title: "", //Set Header Title
          headerTitleStyle: styles.header,
          headerStyle:{
              backgroundColor:'#c7bad9',
              height:5,
              },
              headerTintColor:'#c7bad9'
          }}/>

        <Stack.Screen name ="ChangeProfilePage" component={ChangeProfilePage}
          options={{
          title: "프로필 변경", //Set Header Title
          headerTitleStyle: styles.header2,
          headerStyle:{
            backgroundColor:'#7cd175',
            height:100
          },
          headerTitleAlign:'center',
          headerTintColor:'white'
        }}/>
        <Stack.Screen name ="BuyCoinPage" component={BuyCoinPage}
          options={{
          title: "코인샵", //Set Header Title
          headerTitleStyle: styles.header1,
          headerStyle:{
            backgroundColor:'white',
            height:100
          },
          headerTitleAlign:'center',
          headerTintColor:'white'
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
    header2:{
      marginBottom:15,
      fontSize:20,
      color:'white',
      fontWeight:'700',
      
    },
    icon:{
      height:35,
      width:35,
      marginRight:12
    },
    icon1:{
      height:28,
      width:28,
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
  