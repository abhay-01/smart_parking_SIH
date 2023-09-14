import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function MyProfile() {
  const navigation = useNavigation();
  return (
    <View className="justify-space flex-column">
      <View className=" flex-row m-3 w-100" style={styles.box}>
        <Icon name="account" color='#F79802' size={29} marginLeft={25} marginRight={25} marginTop={16} />
        <View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 5 }}>UserName</Text>
          </View>

          <View>
            <Text className="ml-1.5 mb-2">Johndoe123</Text>
          </View>
        </View>
      </View>



      <View className=" flex-row m-3 w-100" style={styles.box}>
        <Icon name="id-card" color='#F79802' size={29} marginLeft={25} marginRight={25} marginTop={16} />
        <View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 5 }}>Name</Text>
          </View>

          <View>
            <Text className="ml-1.5 mb-2">John doe</Text>
          </View>
        </View>
      </View>


      <View className=" flex-row m-3 w-100" style={styles.box}>
        <Icon name="email-fast" color='#F79802' size={29} marginLeft={25} marginRight={25} marginTop={16} />
        <View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 5 }}>Email</Text>
          </View>

          <View>
            <Text className="ml-1.5 mb-2">Johndoe@gmail.com</Text>
          </View>
        </View>
      </View>

      <View className=" flex-row m-3 w-100" style={styles.box}>
        <Icon name="car-back" color='#F79802' size={29} marginLeft={25} marginRight={25} marginTop={16} />
        <View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 5 }}>Vehcile Type</Text>
          </View>

          <View>
            <Text className="ml-1.5 mb-2">Car</Text>
          </View>
        </View>
      </View>

      <View className=" flex-row m-3 w-100" style={styles.box}>
        <Icon name="email-fast" color='#F79802' size={29} marginLeft={25} marginRight={25} marginTop={16} />
        <View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16, marginBottom: 5 }}>Vehcile Number</Text>
          </View>

          <View>
            <Text className="ml-1.5 mb-2">BS92F9333</Text>
          </View>
        </View>
      </View>

      <View className = "flex-row justify-center items-center ">
        <TouchableOpacity onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#F79802',
            borderRadius: 20,
            width: 150,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#FFFFF0',
            borderWidth: 2,
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
          }}

        >
          <Text style = {{fontSize:16,fontWeight:'bold'}}>Update Details</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}


const styles = StyleSheet.create({

  box: {
    backgroundColor: '#FFFFF0',
    borderRadius: 20,
  },

  boxInfo: {
    marginTop: 55,
  },


});
