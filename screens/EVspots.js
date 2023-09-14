import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import CustomBottom from '../components/CustomBottom'

export default function EVspots() {
  return (
    <View>
        <Text>Espots</Text>

<View styles = {styled.bottom}>
        <CustomBottom/>
        </View>

    </View>
  )
}

const styled = StyleSheet.create({
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
})
