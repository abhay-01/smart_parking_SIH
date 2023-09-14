import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ProgressBarAndroid, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomBottom from '../components/CustomBottom';

export default function EVspots() {
  const navigation = useNavigation();
  const [showMainScreen, setShowMainScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMainScreen(true);
    }, 3000); // Show the main screen after 3 seconds
  }, []);

  const renderMainScreen = () => {
    if (showMainScreen) {
      return (
        <View style={styles.container}>
          <Image source={require('../assets/parking.png')} style={styles.image} />
          <Text style={styles.message}>
            There are no EV charging points in your location,
            {"\n"}Keep looking for parking spots
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ParkingBooking')}
            setShowMainScreen = {!setShowMainScreen}
          >
            <Text style={styles.buttonText}>Book a Parking Spot</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="orange" />
            <Text style={styles.loadingText}>Loading...</Text>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={1}
              color="orange"
              style={styles.progressBar}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.background}>
      {renderMainScreen()}
      <CustomBottom />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#FFF8E1', // Light yellow background color
    borderRadius: 15,
    padding: 20,
    marginTop: 134,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:134,

  },
  loadingBox: {
    backgroundColor: '#FFF8E1', // Light yellow background color
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  loadingText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  progressBar: {
    width: 200,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#888', // Change to your theme color
  },
  button: {
    backgroundColor: 'orange', // Change to your theme color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
