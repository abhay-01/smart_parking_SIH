import React, {useState}from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ActiveBookingsScreen from './ActiveBookingsScreen';
import UpcomingBookingsScreen from './UpcomingBookingsScreen';
import PastBookingsScreen from './PastBookingsScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function History() {
  const [activeTab, setActiveTab] = useState('Active'); // Initial tab

  return (
    <View style={styles.container}>
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Active' && styles.activeTab]}
        onPress={() => setActiveTab('Active')}
      >
        <Text style={[styles.tabText, activeTab === 'Active' && styles.activeTabText]}>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Upcoming' && styles.activeTab]}
        onPress={() => setActiveTab('Upcoming')}
      >
        <Text style={[styles.tabText, activeTab === 'Upcoming' && styles.activeTabText]}>Upcoming</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Past' && styles.activeTab]}
        onPress={() => setActiveTab('Past')}
      >
        <Text style={[styles.tabText, activeTab === 'Past' && styles.activeTabText]}>Past</Text>
      </TouchableOpacity>
    </View>

    {/* Content for the selected tab */}
    {activeTab === 'Active' && <ActiveBookingsScreen />}
    {activeTab === 'Upcoming' && <UpcomingBookingsScreen />}
    {activeTab === 'Past' && <PastBookingsScreen />}
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 10,
},
tabContainer: {
  flexDirection: 'row',
  justifyContent: 'space',
  marginBottom: 10,
},
tab: {
  padding: 10,

  borderWidth: 2,
  width: 123,
  marginRight:3,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#ccc',
  borderRadius: 5,
},
activeTab: {
  backgroundColor: 'orange',
  borderColor: 'black',
},
activeTabText: {
  fontSize: 18, // Increase the font size for the active tab
  color: 'white',
},
});