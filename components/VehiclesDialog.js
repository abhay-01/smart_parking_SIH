import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function VehiclesDialog({ isVisible, vehicles, onClose }) {
  return (
    <Modal isVisible={isVisible} backdropColor="black" backdropOpacity={0.7}>
      <View style={styles.dialogContainer}>
        <Text style={styles.title}>My Vehicles</Text>
        {vehicles.map((vehicle, index) => (
          <View key={index} style={styles.vehicleItem}>
            <Text style={styles.vehicleName}>Vehicle: {vehicle.name}</Text>
            <Text style={styles.vehicleInfo}>
              Type: {vehicle.type} | License: {vehicle.license}
            </Text>
          </View>
        ))}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  vehicleItem: {
    marginBottom: 15,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  vehicleInfo: {
    fontSize: 16,
    color: '#777',
  },
  closeButton: {
    backgroundColor: '#F79802',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
