import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function AboutDialog({ isVisible, onClose }) {
  return (
    <Modal isVisible={isVisible} backdropColor="black" backdropOpacity={0.7}>
      <View style={styles.dialogContainer}>
        <Image
          source={require('../assets/logo_sample.png')} // Replace with your app's logo
          style={styles.logo}
        />
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.description}>
          We are Technophile, passionate about solving the parking and traffic issues in metropolitan cities.
        </Text>
        <Text style={styles.contact}>Contact us at: ruyi@gmaXXXXX.com</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  dialogContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  contact: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#F79802',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
