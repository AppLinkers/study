import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,FlatList} from 'react-native';

export default function SelectPage() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  const Data = [{
    name:'삼성 인더스터리 스터디' , people:'0'
  },
  {
    name:'현대 R&D 스터디' , people:'1'
  },
  {
    name:'엘지전자 스터디' , people:'2'
  },
  {
    name:'셀트리온 주가예측방' , people:'3'
  },
  {
    name:'애플 아이폰13 스터디' , people:'4'
  },
];


const Item = ({name}) =>(
  <View style={styles.item}>
    <Image style={styles.image}
                  source={require('../assets/kakao.jpeg')}/>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.item2}>
      <Image style={styles.image2}
              source={require('../assets/window10.png')}/>
      <Text>/12</Text>
    </View>
    
  </View>
);
const renderItem = ({item}) => <Item name={item.name}/>;

  return (
      <View style={styles.container}>
        <View style={styles.container2}>
              <Text style={styles.AppName}>Real Study</Text>
        </View>

      
        <View style={styles.mainMenu}>
       <TouchableOpacity style={styles.flex}>
         <Text style={styles.buttonText}>개 발</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.flex}>
         <Text style={styles.buttonText}>창 업</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.flex}>
         <Text style={styles.buttonText}>자 격 증</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.flex}>
         <Text style={styles.buttonText}>취 업</Text>
       </TouchableOpacity>
      </View>
        <View style={styles.container3}>
                    <Text style={{color:'white',
                        fontSize:15}}>공 지</Text>
        </View>
      <ScrollView style={styles.container4}>
        
        <FlatList 
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.people}/>

      </ScrollView>
      </View>
  )

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
container2:{
    alignItems:'center',
    backgroundColor:'#A5DF00',
    width:'100%',
    height:60,
},
AppName:{
    marginTop:15,
    fontSize:20,
    color:'white',
    fontWeight:'700'

},
mainMenu: {
    flexDirection: "row"
  },
flex: {
    flex:1,
    paddingTop:12,
    paddingBottom:8,
    borderColor:'#A5DF00',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center'

},
buttonText:{
  fontWeight:'700',
  color:'gray'
},
container3: {
  borderBottomWidth:1,
  backgroundColor:'#D8D8D8',
  borderBottomColor:'#D8D8D8',
  justifyContent:'center',
  alignItems:'center'
},
item:{
  borderBottomWidth:0.5,
  height:120,
  alignItems:'center',
  flexDirection:'row',
  borderColor:'gray'
},
name:{
  fontSize:20,
  marginLeft:15
},
image:{
  height:60,
  width:60,
  borderRadius:30,
  marginLeft:15
},
image2:{
  width:40,
  height:40,
  borderRadius:20
},
item2:{
  paddingLeft:15,
 
  width:100,
  height:120,
  alignItems:'center'

 
}

})
