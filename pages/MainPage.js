import React, { useEffect, useState } from 'react';
import LoginPage from './LoginPage'
import SelectPage from './SelectPage'
import ChatPage from './ChatPage'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { withOrientation } from 'react-navigation';
import { SliderBox } from "react-native-image-slider-box";
import Test from '../Test';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from '../CustomDrawer';
import App from '../App';
import Carousel from 'react-native-snap-carousel';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



export default function MainPage({ navigation, route, props }) {

    const images = [
        "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/mainbanner1.jpg?alt=media&token=36244cbd-94bd-448a-99d1-07c289e9173f",
        "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/mainbanner2.jpg?alt=media&token=bf703c38-0da8-41ab-8926-147f0ae7a049",
        "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/mainbanner3.jpg?alt=media&token=e89d51a7-b577-4082-82f7-52875d7aa76e",
        "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/mainbanner4.jpg?alt=media&token=83026391-3688-4e69-89fe-e24ba9d18e76", // Network image
        "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/mainbanner5.jpg?alt=media&token=47e3a129-9536-4954-92fe-124d4764e8d6"
    ]


    //  const {userID} = route.params;

    const developRef = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/develop.png?alt=media&token=1e2847dd-0cdf-49bf-8c0b-bfc58cc12cf3"
    const companyRef = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/company.png?alt=media&token=cb416474-5fdc-4d47-9266-b799737bcffc"
    const startupRef = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/startup.png?alt=media&token=91f7eac3-6ae0-4099-ae9d-6866d0db49c5"
    const certifiRef = "https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/certifi.png?alt=media&token=c8cf7006-a106-4569-a82d-023d39c89a60"



    function selcetStudy() {
        // navigation.navigate("SelectPage")
        navigation.navigate('SelectPage');
    }
    function OkPage() {
        navigation.navigate("OkMentoPage");
    }

    const data = [
        {
            title: "HOT Study",
            description: " 여러 스터디를 만나 보세요"
        },
        {
            title: "영어 회화 스터디",
            description: "토플 공부로 영어 실전 회화 같이 공부해 봐요"
        },
        {
            title: "영어 회화 스터디",
            description: "토플 공부로 영어 실전 회화 같이 공부해 봐요"
        },
        {
            title: "영어 회화 스터디",
            description: "토플 공부로 영어 실전 회화 같이 공부해 봐요"
        },
        {
            title: "영어 회화 스터디",
            description: "토플 공부로 영어 실전 회화 같이 공부해 봐요"
        },
    ]

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={{ width: 300, height: 150, borderColor: '#7cd175', borderWidth: 4, borderRadius: 20, marginVertical: 10, padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.profile} source={require('../assets/profile.jpg')} />
                        <Text style={{ fontSize: 25, fontWeight: "700", marginLeft: 5 }}>{item.title}</Text>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: '700', marginTop: 10 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    return (

        <View style={styles.container}>

            <ScrollView>
                <View style={styles.title1}>
                    <SliderBox
                        images={images}
                        style={{ height: 260, marginTop: 15, borderRadius: 30, marginHorizontal: 5 }}
                        autoplay={true}  //자동 슬라이드 넘김
                        circleLoop={true}
                        onCurrentImagePressed={index => alert(`image ${index} pressed`)} />

                </View>

                <View style={styles.title2}>
                    <TouchableOpacity onPress={selcetStudy} style={styles.studyBanner}>
                        <Image style={styles.title2_img} source={require('../assets/coding.png')} />
                        <Text style={styles.studyTxt}>프로그래밍</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={selcetStudy} style={styles.studyBanner2}>
                        <Image style={styles.title2_img} source={require('../assets/toeic.png')} />
                        <Text style={styles.studyTxt}>영 어</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={selcetStudy} style={styles.studyBanner3}>
                        <Image style={styles.title2_img} source={require('../assets/document.png')} />
                        <Text style={styles.studyTxt}>문 서</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={selcetStudy} style={styles.studyBanner4}>
                        <Image style={styles.title2_img} source={require('../assets/more.png')} />
                        <Text style={styles.studyTxt}>기 타</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.adBanner}><Text style={{ color: 'white' }}>Ad Banner</Text></TouchableOpacity>

                <View style={styles.title3}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <Image style={{ height: 40, width: 40 }} source={require('../assets/fire.png')} />
                        <Text style={{ marginLeft: 10, fontSize: 30, fontWeight: '700', color: '#7cd175' }}>Hot Study</Text>
                    </View>
                    <Carousel
                        data={data}
                        renderItem={_renderItem}
                        sliderWidth={400}
                        itemWidth={300}
                        layout={'default'}
                        firstItem={1}
                    />

                </View>
                <View style={{ backgroundColor: '#9F9F9E', height: 130 }}>
                    <Text style = {styles.info}>사업자 명</Text>
                    <Text style = {styles.info}>사업자 번호</Text>
                    <Text style = {styles.info}>통신 사업자 번호</Text>
                    <Text style = {styles.info}>주소 : </Text>
                </View>

            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage} source={require('../assets/homeButton.png')}></Image></TouchableOpacity>
                <TouchableOpacity style={styles.underButton} onPress={() => { navigation.navigate("MyStudyPage") }}><Image style={styles.buttonImage2} source={require('../assets/book-club.png')} ></Image></TouchableOpacity>
                <TouchableOpacity style={styles.underButton}><Image style={styles.buttonImage2} source={require('../assets/chatButton.png')}></Image></TouchableOpacity>
                <TouchableOpacity style={styles.underButton}><Text style={{ fontSize: 20, paddingBottom: 10, color: 'gray', fontWeight: '700' }} onPress={OkPage}>. . .</Text></TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    title1: {
        height: 280,
        alignSelf: 'center',
        backgroundColor: '#fff',

    },
    underImage: {
        height: 35,
        marginTop: 25,
        paddingLeft: 20,

    },
    adBanner: {
        width: '100%',
        height: 80,
        marginTop: 15,
        backgroundColor: '#FA5858',
        justifyContent: 'center',
        paddingLeft: 15
    },
    title2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#F1EFEF'
    },
    studyBanner: {
        height: 90,
        width: 90,
        marginVertical: 10,
        borderRadius: 20,
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    studyBanner2: {
        height: 90,
        width: 90,
        marginVertical: 10,
        borderRadius: 20,
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    studyBanner3: {
        height: 90,
        width: 90,
        marginVertical: 10,
        borderRadius: 20,
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    studyBanner4: {
        height: 90,
        width: 90,
        marginVertical: 10,
        borderRadius: 20,
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    studyTxt: {
        paddingBottom: 5,
        fontSize: 15,
        color: 'black',
        fontWeight: '700',
        textAlign: 'center'
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#F2F2F2'
    },
    underButton: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonImage: {
        width: 25,
        height: 25
    },
    buttonImage2: {
        width: 20,
        height: 20
    },
    title3: {
        marginTop: 10
    },
    title2_img: {
        marginBottom: 5,
        height: 45,
        width: 45
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info : { 
        color : 'white',
        fontSize : 13,
        paddingLeft : 5,
        paddingTop : 5
    }


})