import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your preferred icon library



const CustomBottom = () => {
  const navigation = useNavigation();

  const route = useRoute();

  // Maintain the selected state for each tab
  const [selectedTab, setSelectedTab] = useState(route.name);

  const navigateToScreen = (screenName) => {
    setSelectedTab(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('HomeScreen')}
      >
        <Icon name="home" size={32} color={selectedTab =='HomeScreen' ? 'orange' : 'gray'}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('EVspots')}
      >
        <Icon name="flash" size={24} color={selectedTab == 'EVspots' ? 'orange' : 'gray'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('ParkingBooking')}
      >
        <Icon name="car" size={30} color={selectedTab =='ParkingBooking' ? 'red' : 'gray'}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('History')}
      >
        <Icon name="history" size={24} color={selectedTab =='History' ? 'orange' : 'gray'}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('Account')}
      >
        <Icon name="map-pin" size={24} color={selectedTab =='Account' ? 'orange' : 'gray'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#F5DEB3',
    borderTopWidth: 1,
    borderTopColor: 'white',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    marginTop:'auto',
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabBarText: {
    marginTop: 5,
    fontSize: 12,
    // color: 'blue',
  },
});

export default CustomBottom;
