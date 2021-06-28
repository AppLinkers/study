import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { MainPage } from './pages/MainPage'
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import { AsyncStorage } from 'react-native';
import requestStudy from './pages/requestStudy';

//const CustomDrawer = (props) => 


export default function CustomDrawer({ navigation }) {




    const [getName, setName] = useState('');
    const [getCoin, setCoin] = useState('');

    AsyncStorage.getItem('user').then(
        (value) =>
            setName(value)
    );

    AsyncStorage.getItem('coin').then(
        (value) =>
            setCoin(value)
    );




    function changeProile() {
        navigation.navigate("ChangeProfilePage");
    }

    function BuyCoin() {
        navigation.navigate("BuyCoinPage");
    }

    function MentoApply() {
        navigation.navigate("MentoApplyPage");
    }


    function request(){
        navigation.navigate("requestStudy");
      }
    
    function tutor(){
        navigation.navigate("tutorApplyPage");
      }

    function logout(){
        navigation.navigate('LoginPage')
    }

    return(

        <View style = {{paddingBottom:10}}>


        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerName}>My Page</Text>
            </View>
            <View style={styles.profile}>
                <View style={styles.profileImage}>
                    <Image style={styles.image} source={require('./assets/profile.jpg')}/>
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>{getName}</Text>
                    <Text style={{fontSize:13}}>보유 코인: {getCoin}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.profileChange} onPress={changeProile}>
                <Text style={{color:'white', fontWeight:'700', fontSize:12}}>프로필 변경</Text>
            </TouchableOpacity>

            <View style={styles.listTitle}>
                <Text style={{fontSize:17, fontWeight:'700'}}>Apply</Text>
            </View>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName} onPress={tutor} >튜터 신청</Text></TouchableOpacity>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName} onPress={request}>스터디 신청</Text></TouchableOpacity>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName} onPress={MentoApply}>멘토 신청</Text></TouchableOpacity>
            
           
            <View style={styles.listTitle}>
                <Text style={{fontSize:17, fontWeight:'700'}}>코인</Text>
            </View>
            <TouchableOpacity style={styles.listContainer} onPress={BuyCoin}><Text style={styles.listName}>코인충전</Text></TouchableOpacity>
            

            <View style={styles.listTitle}>
                <Text style={{fontSize:17, fontWeight:'700'}}>고객센터</Text>
            </View>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName}>공지사항</Text></TouchableOpacity>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName}>문의하기</Text></TouchableOpacity>
            <TouchableOpacity style={styles.listContainer}><Text style={styles.listName}>사용 가이드</Text></TouchableOpacity>
           
            <TouchableOpacity style={styles.profileChange} onPress={logout}>
                <Text style={{color:'white', fontWeight:'700', fontSize:14}}>로 그 아 웃</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>

    );

}



const styles = StyleSheet.create({

    sideMenuProfileIcon: {
        marginTop: 100,
        marginBottom: 30,
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    header: {
        height: 80,
        backgroundColor: '#7cd175',
        justifyContent: 'flex-end'
    },
    headerName: {
        paddingLeft: 15,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: '700',
        color: 'white'
    },
    profile: {
        height: 150,
        flexDirection: 'row'
    },
    profileImage: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    profileInfo: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 5
    },
    profileName: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 7
    },
    profileChange: {
        width: 255,
        height: 35,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#7cd175',
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        height: 68,
        backgroundColor: '#fa7470',
        marginTop: 12,
        justifyContent: 'center'
    },

    banner1:{
        height:68,
        backgroundColor:'#f5a44d',
        marginTop:12,
        justifyContent:'center'
    },
    banner2:{
        height:68,
        backgroundColor:'#467fd7',
        marginTop:12,
        justifyContent:'center'
    },
    listTitle:{
        height:60,
        borderBottomWidth:2,
        borderBottomColor:'#7cd175',
        justifyContent:'flex-end',
        paddingLeft:15,
        paddingBottom:10
    },
    listName:{
        fontSize:12,
        color:'black',
        fontWeight:'bold'
    },
    listContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 15
    }

});

