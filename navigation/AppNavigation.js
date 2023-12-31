import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import History from '../screens/History';
import { View} from 'react-native';
import { useState } from 'react';
import { getData } from '../utils/AsyncStrorage';
import BookingDetailScreen from '../screens/BookingDetailScreen';
import ParkingFilter from '../screens/ParkingFilter';
import Account from '../screens/Account';
import MyProfile from '../screens/MyProfile';
import PaymentMethod from '../screens/PaymentMethod';
import BottomTab from './BottomTab';
import EVspots from '../screens/EVspots';
import ParkingBooking from '../screens/ParkingBooking';
import SelectedSpot from '../screens/SelectedSpot';
import PaymentScreen from '../screens/PaymentScreen';
import AuctionScreen from '../screens/AuctionScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import useAuth from '../hooks/useAuth';



const Stack = createStackNavigator();
export default function AppNavigation({setOnboardingComplete}) {
    const {user} = useAuth();
    if(user){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeScreen'>

                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                    headerShown : false
                }}/>

                <Stack.Screen name="BookingDetailScreen" component={BookingDetailScreen} options={{
                    headerShown: true,
                    title: 'Booking Details',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )


                }} />

                <Stack.Screen name="ParkingFilter" component={ParkingFilter} options={{
                    headerShown: true,
                    title: 'Parking Filter',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )

                }} />

                <Stack.Screen name="MyProfile" component={MyProfile} options={{
                    headerShown: true,
                    title: 'My Profile',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )

                }} />

                <Stack.Screen name="Account" component={Account} options={{
                    headerShown: true,
                    title: 'Account',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )

                }} />


                <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{
                    headerShown: true,
                    title: 'My Cards',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )

                }} />

                <Stack.Screen name="EVspots" component={EVspots} options={{
                    headerShown: true,
                    title: 'EV Charging Spots',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )

                }} />

                <Stack.Screen name="ParkingBooking" component={ParkingBooking} options={{
                    headerShown: false,
                    title: 'Find Your Spot',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )

                }} />

                <Stack.Screen name="History" component={History} options={{
                    headerShown: true,
                    title: 'My Bookings',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )


                }} />

<Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{
                    headerShown: true,
                    title: 'Book your Slot',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )


                }} />

<Stack.Screen name="SelectedSpot" component={SelectedSpot} options={{
                    headerShown: false,
                    

                }} />

<Stack.Screen name="AuctionScreen" component={AuctionScreen} options={{
                    headerShown: true,
                    title: 'Place your Bid',
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: 'orange', flex: 1 }} />
                    )


                }} />
                    </Stack.Navigator>

                </NavigationContainer>

        )
    }else{
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Onboarding'>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{
                    headerShown: false
                }} />
                    <Stack.Screen name="WelcomeScreen" options={{headerShown: false}} component={WelcomeScreen} />
                    <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LoginScreen} />
                    <Stack.Screen name="SignUpScreen" options={{headerShown: false}} component={SignUpScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )

    }

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
