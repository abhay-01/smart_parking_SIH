import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AboutDialog from '../components/AboutDialog';
import VehiclesDialog from '../components/VehiclesDialog';
import CustomBottom from '../components/CustomBottom';






const Account = () => {
  const [isAboutDialogVisible, setAboutDialogVisible] = useState(false);
  const [isVehiclesDialogVisible, setVehiclesDialogVisible] = useState(false);


  const dummyVehicles = [
    {
      name: 'Car 1',
      type: 'Sedan',
      license: 'ABC123',
    },
    {
      name: 'Motorcycle 1',
      type: 'Motorcycle',
      license: 'XYZ456',
    },
  ];


const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    
    

      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={require('../assets/profile.png')}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color='#F79802' size={22} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color='#F79802' size={22} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color='#F79802' size={22} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>john_doe@email.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Title>43 Hrs</Title>
          <Caption>In Parking</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Slots</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate('MyProfile')}>
          <View style={styles.menuItem}>
            <Icon name="account" color='#F79802'size={25} />
            <Text style={styles.menuItemText}>Profile</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('PaymentMethod')}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color='#F79802' size={25} />
            <Text style={styles.menuItemText}>Payment Methods</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => setVehiclesDialogVisible(true)}>
          <View style={styles.menuItem}>
            <Icon name="car-back" color='#F79802' size={25} />
            <Text style={styles.menuItemText}>My Vehicles</Text>
          </View>
        </TouchableRipple>

        <VehiclesDialog
        isVisible={isVehiclesDialogVisible}
        vehicles={dummyVehicles} // Pass the dummy vehicle data
        onClose={() => setVehiclesDialogVisible(false)}
      />


        <TouchableRipple onPress={() => navigation.navigate('AuctionScreen')}>
          <View style={styles.menuItem}>
            <Icon name="sale" color='#F79802' size={25} />
            <Text style={styles.menuItemText}>Auctions</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => setAboutDialogVisible(true)}>
          <View style={styles.menuItem}>
            <Icon name="information" color='#F79802'size={25} />
            <Text style={styles.menuItemText}>About</Text>
          </View>
        </TouchableRipple>

        <AboutDialog isVisible={isAboutDialogVisible} onClose={() => setAboutDialogVisible(false)} />

        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem} >
            <Icon name="logout" color='#F79802'size={25} />
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="logout" color='#F79802'size={25} />
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>

      <CustomBottom/>

    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E7',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 2,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});