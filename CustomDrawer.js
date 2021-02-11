import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
    return(

        <View>
            <Image
                source={{ uri: "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/develop.png?alt=media&token=1e2847dd-0cdf-49bf-8c0b-bfc58cc12cf3"}}
                style={styles.sideMenuProfileIcon}
            />
            <DrawerItemList {...props} />


        
        </View>

    );
};


const styles = StyleSheet.create({

    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        },
});


export default CustomDrawer;