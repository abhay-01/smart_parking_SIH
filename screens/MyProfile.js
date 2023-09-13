import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function MyProfile() {
  return (
   <View className = "justify-space flex-column">
    <View className = "bg-neutral-400 flex-row m-3 w-100">
            <Icon name="account" color='#F79802'size={29} margin={25}/>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:25}}>UserName</Text>
            <Text className = "text-sm" style = {{
                marginTop:'auto',
                marginRight:43,
            }}>John Dow</Text>
            
            </View>
            <View className = "bg-neutral-400 flex-row m-3 w-100">
            <Icon name="account" color='#F79802'size={29} margin={25}/>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:25}}>UserName</Text>
            
            </View>
   </View>

  )
}
