import React from 'react'
import { View, Text, Touchable } from 'react-native'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


 
// AIzaSyDP45K8S2041tSGdeG-BPfFT4acXo_GDDc

export default function HomeScreen() {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <Text className = "text-neutral-500 text-3xl">Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Text>Go to History</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ParkingFilter')}>
                <Text>Go to Parking filter</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                <Text>Go to Profile Section</Text>
            </TouchableOpacity>




            
           

        </View>

    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    map: {
        flex: 1,
    },

    safe: {
        flex: 1,
        backgroundColor: '#fff',

    },
});