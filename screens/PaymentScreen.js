import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'; // Import the Feather icon set
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';



export default function PaymentScreen() {

    const route = useRoute();
  const { selectedDate, selectedTime } = route.params;
  useEffect(() => {
    // Log the selected date and time when the component mounts
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
  }, []);

        const navigation = useNavigation();
  return (
    <View className = 'flex-1'>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            <View style = {styles.headerInfo}>
            <Text>Parking near Stellar IT</Text>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            </View>

            <View style = {styles.MainCont}>

            <View style = {styles.durationBox}>
                <Text style  = {styles.durationText}>Parking From</Text>
                <Icon name = "arrow-right" size = {24} color = {'gray'}/>
                <Text style  = {styles.durationText}>Parking Till</Text>
            </View>

            </View>

           
        </ScrollView>
        
    </View>
)
}

const styles = StyleSheet.create({

    headerInfo:{
        backgroundColor: 'white',
        flex: 1,
    },

    durationBox:{
        flexDirection: 'row',
        backgroundColor: '#FFE5B4',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
    },
    MainCont:{
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },

    durationText:{
        fontSize: 19,
        fontWeight: 'bold',
        color: '#FFA500',
    }
})
