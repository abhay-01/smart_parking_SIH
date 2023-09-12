import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const  Stack = createStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options = {{
                headerShown: false
            }}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: true
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
