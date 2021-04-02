import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Modal, TouchableHighlight } from 'react-native';
import { AsyncStorage } from 'react-native';


const DATA = [
    {
        id: '1',
        title: '코인 1개',
        cost: '100원',
        value: 100
    },
    {
        id: '2',
        title: '코인 10개',
        cost: '1,000원',
        value: 1000
    },
    {
        id: '3',
        title: '코인 100개',
        cost: '10,000원',
        value: 10000
    },
    {
        id: '4',
        title: '코인 200개',
        cost: '20,000원',
        value: 20000
    },
    {
        id: '5',
        title: '코인 500개',
        cost: '50,000원',
        value: 50000
    },
    {
        id: '6',
        title: '코인 1000개',
        cost: '100,000원',
        value: 100000
    },

];

var firebaseConfig = {
    apiKey: "AIzaSyAhALJl-3lVlNXoIueqpfcR1gfLEkJXOxc",
    authDomain: "studyapp-3e58f.firebaseapp.com",
    databaseURL: "https://studyapp-3e58f-default-rtdb.firebaseio.com",
    projectId: "studyapp-3e58f",
    storageBucket: "studyapp-3e58f.appspot.com",
    messagingSenderId: "514395246608",
    appId: "1:514395246608:web:2c39981eed6d3602b4fa95",
    measurementId: "G-GL08SPFWYS"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default function BuyCoinPage() {

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
    
    function coinplus(selected_coin) {
        firebase.database().ref('/users/' + getName + '/coin').set(getCoin + selected_coin);
        console.log(getCoin);
    }

    const ItemView = ({ item }) => (
        <View style={styles.lines}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.coinImage} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/coin%20icon.png?alt=media&token=7f9c00f0-0772-4f37-8779-9ccf5acc1048' }} />
            </View>
            <View style={{ flex: 3, justifyContent: 'center' }}><Text>{item.title}</Text></View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.buyButton} onPress={() => coinplus(item.value)} ><Text style={{ color: 'white', fontWeight: '700' }}>{item.cost}</Text></TouchableOpacity>
            </View>
        </View>
    );
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.myCoin}>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontWeight: '700', fontSize: 14 }}>보유 코인 : </Text>
                </View>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}>
                    <View style={styles.modalView}>
                        <View style={{ flex: 6, paddingTop: 10, paddingLeft: 8 }}>
                            <Text style={styles.coinExplain}>스터디 참여를 위해 필요한 결제수단입니다. 코인을 미리 구매하시면 복잡한 결제과정이 간단해집니다.</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity
                                style={styles.openButton}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Image style={{ height: 20, width: 20, borderRadius: 10 }}
                                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/X%20icon.png?alt=media&token=0747e8d1-0426-43f7-969e-9a22954c34d3' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }} onPress={() => { setModalVisible(true); }}><Text style={{ fontSize: 12, color: 'gray' }}>코인이란?</Text></TouchableOpacity>
            </View>
            <View style={styles.buyCoin}>
                <Text style={{ marginLeft: 10, marginBottom: 5, fontWeight: '700', fontSize: 12 }}>코인 구매</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={ItemView}
                keyExtractor={(index) => index.toString()} />
            <View style={{ height: 45, borderBottomWidth: 0.5, marginBottom: 183, borderBottomColor: 'gray', justifyContent: 'flex-end' }}>
                <Text style={{ marginLeft: 10, marginBottom: 5, fontWeight: '700', fontSize: 12 }}>코인 이용안내</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    myCoin: {
        flexDirection: 'row',
        height: 60,
        paddingLeft: 15,
        paddingTop: 20,
        backgroundColor: '#f0f0f0'

    },
    buyCoin: {
        borderBottomWidth: 0.5,
        height: 45,
        borderBottomColor: 'gray',
        justifyContent: 'flex-end'
    },
    lines: {
        height: 70,
        borderBottomWidth: 0.25,
        flexDirection: 'row',

    },
    coinImage: {
        width: 20,
        height: 20
    },
    buyButton: {
        width: 100,
        height: 40,
        backgroundColor: '#7cd175',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        marginLeft: 220,
        marginTop: 70,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 90,
        width: 180,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5
    },
    openButton: {
        borderRadius: 10,
        width: 20,
        height: 20,
        marginTop: 5,
        marginRight: 5
    },
    coinExplain: {
        fontSize: 12
    }
})