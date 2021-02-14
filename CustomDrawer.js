import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { MainPage} from './pages/MainPage'
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

//const CustomDrawer = (props) => 


export default function CustomDrawer(props)  {

    
    return(

        <View >
            <Image
                source={require('./assets/myIcon.png')}
                style={styles.sideMenuProfileIcon}
            />
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:25, fontWeight:'bold', marginBottom:15}}>{props.userID} </Text>
            </View>
            <ScrollView>
                <View style={{paddingLeft:20, paddingBottom:20 ,borderBottomWidth:1}}>
                    <Text style={{fontSize:18, marginBottom:10}}>고객 정보</Text>
                    <Text >보유 코인: </Text>
                    <Text style={{marginBottom:10}}>{props.coin}</Text>
                    <Text>관심 스터디: </Text>
                    <Text>{props.interest}</Text>
                </View>

                <View style={{borderBottomWidth:1}}>
                    <Text style={{marginTop:20, marginLeft:20, fontSize:18,}}>등록한 스터디 </Text>
                    <View style={{marginTop:10, marginBottom:30}}>
                    <DrawerItemList {...props} />
                    </View>
                </View>


                <View>
                    <Text style={{marginTop:20, marginLeft:20, fontSize:18,}}>이전 스터디 </Text>
                    <View style={{marginTop:10, marginBottom:30}}>
                    </View>
                </View>
            </ScrollView>
        
        </View>

    );
};


const styles = StyleSheet.create({

    sideMenuProfileIcon: {
        marginTop:100,
        marginBottom:30,
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        },
});

