import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import CustomBottom from '../components/CustomBottom'

export default function ParkingBooking() {
  return (
    <View style={styles.container}>
    <Text>Espots</Text>



<CustomBottom/>
    </View>
    
  )
}

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: 'white',
  },
})
