import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList,TextInput,TouchableWithoutFeedback} from 'react-native';

export default function tutorApplyPage({navigation}){
 return(
    <View style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.infoBox}>
                <Image style={{width:6,height:6,marginTop:29,marginLeft:5}}
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/green%20dot.png?alt=media&token=49ab3066-77cf-4c47-9401-a98af127200d'}}/>
                <Text style={styles.infoText}>개인 정보</Text>
            </View>
                <Text style={styles.title}>이 름</Text>
                <TextInput 
                style={styles.input}
                placeholder="이름"
                />
                <Text style={styles.title}>나 이</Text>
                <TextInput 
                style={styles.input}
                placeholder="나이"
                />
                <Text style={styles.title}>학 교</Text>
                <TextInput 
                style={styles.input}
                placeholder="학교명을 입력하세요"
                />
                <Text style={styles.title}>전 공</Text>
                <TextInput 
                style={styles.input}
                placeholder="전공명을 입력하세요"
                />
                <Text style={styles.title}>사 진</Text>
                <View style={styles.imageBox}>
                    <TouchableOpacity style={styles.imageInput}>
                        <Text style={{fontSize:24, color:'gray'}}>+</Text>
                    </TouchableOpacity>   
                </View>
            <View style={styles.infoBox}>
                <Image style={{width:6,height:6,marginTop:29,marginLeft:5}}
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/green%20dot.png?alt=media&token=49ab3066-77cf-4c47-9401-a98af127200d'}}/>
                <Text style={styles.infoText}>상세 정보</Text>
            </View>
                <Text style={styles.title}>한줄 소개</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder="이름"
                    />
                <Text style={styles.title}>과 목</Text>
                <TextInput 
                style={styles.input}
                placeholder="이름"
                />
                <Text style={styles.title}>과목별 수업내용</Text>
                <TextInput 
                style={styles.input2} 
                placeholder="과목별 수업내용을 구체적으로 적어주세요!" 
                multiline={true}
                />
                <Text style={styles.title}>수업 방식</Text>
                <TextInput 
                style={styles.input2} 
                placeholder="수업방식을 구체적으로 적어주세요!" 
                multiline={true}
                />
                <Text style={styles.title}>가능 시간</Text>
                <TextInput 
                style={styles.input1} 
                placeholder="가능한 시간을 입력하세요" 
                multiline={true}
                />
                <Text style={styles.title}>어 필</Text>
                <TextInput 
                style={styles.input1} 
                placeholder="어필할 내용을 적어주세요!" 
                multiline={true}
                />
            <View style={styles.infoBox}>
                <Image style={{width:6,height:6,marginTop:29,marginLeft:5}}
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/studyapp-3e58f.appspot.com/o/green%20dot.png?alt=media&token=49ab3066-77cf-4c47-9401-a98af127200d'}}/>
                <Text style={styles.infoText}>학교 인증</Text>
            </View>
            <View style={{width:330,height:120,marginTop:10,alignItems:'center'}}>
                <TouchableOpacity style={styles.schoolAuth}>
                    <Text style={{fontSize:24, color:'gray'}}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            style={styles.button}>
                <Text style={{color:'#fff', fontWeight:'500', fontSize:14}}>신 청 하 기</Text>
            </TouchableOpacity>
         </ScrollView>

    </View>
 )}


 const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        alignItems:'center'
    },
    infoBox:{
        width:330,
        height:50,
        borderBottomColor:'gray',
        borderBottomWidth:0.7,
        marginTop:20,
        flexDirection:'row',
        alignSelf:'center'
    },
    infoText:{
        color:'gray',
        marginTop:20,
        marginLeft:5
    },
    title:{
        marginTop:15,
        alignSelf:'flex-start',
        marginLeft:10,
        fontWeight:'700',
        fontSize:13
    },
    input:{
        width:330,
        height:40,
        borderBottomWidth:1.5,
        borderBottomColor:'#7cd175',
        paddingLeft:8,
        fontSize:12
    },
    input1:{
        width:330,
        height:90,
        borderWidth:1.5,
        borderColor:'#7cd175',
        paddingLeft:10,
        paddingRight:10,
        fontSize:12,
        marginTop:15,
        textAlignVertical:'top',
        paddingTop:10
    },
    input2:{
        width:330,
        height:180,
        borderWidth:1.5,
        borderColor:'#7cd175',
        paddingLeft:10,
        paddingRight:10,
        fontSize:12,
        marginTop:15,
        textAlignVertical:'top',
        paddingTop:10
    },
    imageBox:{
        width:330,
        height:120,
        marginTop:10,
        flexDirection:'row'
    },
    imageInput:{
        height:100,
        width:90,
        borderWidth:1.5,
        borderRadius:5,
        borderColor:'#7cd175',
        backgroundColor:'#f5f5f5',
        justifyContent:'center',
        alignItems:'center'
    },
    schoolAuth:{
        width:240,
        height:120,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#7cd175',
        backgroundColor:'#f5f5f5',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:330,
        height:60,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#7cd175',
        borderWidth:2,
        borderColor:'#7cd175',
        marginBottom:20
    }
 })

