import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function UpcomingBookingsScreen() {
  // Sample data for upcoming bookings
  const [upcomingBookings, setUpcomingBookings] = useState([
    {
      id: 1,
      place: 'Parking Lot D',
      date: '2023-09-20',
      fees: '$8',
      timeSlot: '03:00 PM - 05:00 PM',
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
  ]);

  // Function to handle cancel booking
  const handleCancelBooking = (bookingId) => {
    Alert.alert(
      'Confirm Cancellation',
      'Are you sure you want to cancel this booking?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            // Remove the canceled booking from the upcoming bookings
            const updatedBookings = upcomingBookings.filter(
              (booking) => booking.id !== bookingId
            );
            setUpcomingBookings(updatedBookings);

            // Show a custom confirmation dialog
            Alert.alert(
              'Cancellation in Process',
              'Your cancellation is in process. We will refund your money once done.'
            );
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}
    showsVerticalScrollIndicator={false}
    >
      {upcomingBookings.map((booking) => (
        <View key={booking.id} style={styles.bookingCard}>
          <View style={styles.header}>
            <Text style={styles.bookingTitle}>{booking.place}</Text>
            <TouchableOpacity
              style={styles.mapPinIcon}
              onPress={() => navigation.navigate('BookingDetailScreen', booking)}
            >
              <Icon name="map-pin" size={24} color={'red'} />
            </TouchableOpacity>
          </View>
          <Text style={styles.date}>{booking.date}</Text>
          <Text style={styles.charges}>Charges: {booking.fees}</Text>
          <Text style={styles.timeSlot}>{booking.timeSlot}</Text>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => handleCancelBooking(booking.id)}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bookingCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#777777',
    marginTop: 8,
  },
  charges: {
    fontSize: 18,
    color: '#FF7F50',
    fontWeight: 'bold',
    marginTop: 8,
  },
  timeSlot: {
    fontSize: 16,
    marginTop: 8,
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
    fontSize: 20,
  },
  mapPinIcon: {
    marginLeft: 'auto',
    marginTop: -26,
    marginRight: 26,
  },
});
