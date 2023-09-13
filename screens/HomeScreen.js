import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomDrawer from '../CustomDrawer/CustomDrawer';
import BottomNavigator from '../navigation/BottomNavigator';
 
// AIzaSyDP45K8S2041tSGdeG-BPfFT4acXo_GDDc


export default function HomeScreen() {
    return (



        <View style={styles.container}>
            <Text>Home Screen</Text>

        


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    map: {
        flex: 1,
    },

    safe: {
        flex: 1,
        backgroundColor: '#fff',

    },
});