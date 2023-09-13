import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import History from '../screens/History';
import { View } from 'react-native';
import { useState } from 'react';
import { getData } from '../utils/AsyncStrorage';
import BookingDetailScreen from '../screens/BookingDetailScreen';
import ParkingFilter from '../screens/ParkingFilter';

const  Stack = createStackNavigator();
export default function AppNavigation() {
    // const[showOnboard, setOnboard] = useState(null);

    // useEffect(() => {

    //     checkSignUp();
    // }, []);

    // const checkSignUp = async () => {
    //     const value = await getData('signedup');
    //     if(value === 1){
    //         //hide onboarding screen
    //         showOnboard(false);
    //     }else{

    //         //show onboarding screen
    //         showOnboard(true);
    //     }
    // }

    // if(showOnboard == null){
    //     return null;
    // }
  

    // if(showOnboard){
        return(
            <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding' >
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options = {{
                headerShown: false
            }}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false
            }}/>

<Stack.Screen name="History" component={History} options={{
                headerShown: true,
                title: 'My Bookings',
                headerTintColor:'black',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize: 20,
                },
                headerBackground: () => (
                    <View style={{backgroundColor: 'orange', flex: 1}}/>
                )
                
                
            }}/>
             <Stack.Screen name="BookingDetailScreen" component={BookingDetailScreen} options={{
                headerShown: true,
                title: 'Booking Details',
                headerTintColor:'black',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize: 20,
                },
                headerBackground: () => (
                    <View style={{backgroundColor: 'orange', flex: 1}}/>
                )
                
                
            }}/>

<Stack.Screen name="ParkingFilter" component={ParkingFilter} options={{
                 headerShown: true,
                 title: 'Parking Filter',
                 headerTintColor:'black',
                 headerTitleStyle:{
                     fontWeight:'bold',
                     fontSize: 20,
                 },
                 headerBackground: () => (
                     <View style={{backgroundColor: 'orange', flex: 1}}/>
                 )
                 
             }}/>



        </Stack.Navigator>
    </NavigationContainer>
        )
    // }else{
    //     <NavigationContainer>
    //     <Stack.Navigator initialRouteName='HomeScreen'>
    //         <Stack.Screen name="Onboarding" component={OnboardingScreen} options = {{
    //             headerShown: false
    //         }}/>
    //         <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
    //             headerShown: false
    //         }}/>
    //     </Stack.Navigator>
    // </NavigationContainer>
    // }
    
}
