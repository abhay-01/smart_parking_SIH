import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PastBookingsScreen() {
  const navigation = useNavigation();

  // Sample data for past bookings
  const pastBookings = [
    {
      id: 1,
      place: 'Parking Lot X',
      date: '2023-09-10',
      fees: '$7',
      timeSlot: '01:30 PM - 03:30 PM',
    },

    {
        id: 2,
        place: 'Parking Lot E',
        date: '2023-09-21',
        fees: '$9',
        timeSlot: '09:30 AM - 11:30 AM',
      },
      {
        id: 3,
        place: 'Parking Lot F',
        date: '2023-09-22',
        fees: '$11',
        timeSlot: '01:00 PM - 03:00 PM',
      },
    // Add more past bookings
  ];

 

  return (
    <View style={styles.container}>
      {pastBookings.map((booking) => (
        <View key={booking.id} style={styles.bookingCard}>
          <Text style={styles.bookingTitle}>{booking.place}</Text>
          <Text>{booking.date}</Text>
          <Text style={styles.charges}>Charges: {booking.fees}</Text>
          <Text>{booking.timeSlot}</Text>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.navigate('BookingDetailScreen', {booking})}
          >
            <Text style={styles.cancelButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      },
      bookingCard: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      },
      bookingTitle: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      charges: {
        fontSize: 16,
        color: 'blue', // Customize the fees text color
        fontWeight: 'bold', // Make the fees text bold
      },
     
  cancelButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 'auto',
    marginTop: -70,
    marginBottom: 30,

  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:20
  },
});
