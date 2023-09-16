import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomBottom from '../components/CustomBottom'
import { useNavigation } from '@react-navigation/native';
import { TouchableRipple } from 'react-native-paper';


export default function ParkingBooking() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableRipple onPress={() => navigation.navigate('SelectedSpot')}>
        <Text>Book Parking</Text>
      </TouchableRipple>




      <CustomBottom />
    </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
