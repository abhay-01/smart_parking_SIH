import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function PaymentMethod() {
    const navigation = useNavigation();
  // Replace this with actual card data
  const existingCard = {
    cardNumber: '**** **** **** 1234',
    expirationDate: '12/24',
  };

  return (
    <View style={styles.container}>
      {/* Existing Card Section */}
      <View style={styles.cardContainer}>
        <Icon name="credit-card" size={30} color="#F79802" />
        <View>
          <Text style={styles.cardNumber}>{existingCard.cardNumber}</Text>
          <Text style={styles.expirationDate}>Expires: {existingCard.expirationDate}</Text>
        </View>
      </View>

      {/* Add New Card Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.goBack()}>
        <Text style={styles.addButtonLabel}>Add New Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFF0',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  expirationDate: {
    fontSize: 14,
    color: '#777',
    marginLeft: 16,
  },
  addButton: {
    backgroundColor: '#F79802',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
  },
});
