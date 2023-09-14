import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import History from '../screens/History';
import Account from '../screens/Account';
import EVspots from '../screens/EVspots';
import ParkingBooking from '../screens/ParkingBooking';



const Tabs = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="History" component={History} />
      <Tabs.Screen name="Account" component={Account} />
      <Tabs.Screen name="EVspots" component={EVspots} />
      <Tabs.Screen name="ParkingBooking" component={ParkingBooking} />
    </Tabs.Navigator>
  )
}
