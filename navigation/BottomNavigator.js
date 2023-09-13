import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Account from '../screens/Account'
import EVspots from '../screens/EVspots'
import History from '../screens/History'
import HomeScreen from '../screens/HomeScreen'



const Tab = createBottomTabNavigator();
export default class BottomNavigator extends Component {
  render() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={History} />
        <Tab.Screen name="Hist" component={Account} />

        <Tab.Screen name="Acc" component={EVspots} />

      </Tab.Navigator>
    );
    
  }
}
