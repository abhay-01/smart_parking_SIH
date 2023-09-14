import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
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
    {
      id: 4,
      place: 'Parking Lot E',
      date: '2023-09-21',
      fees: '$9',
      timeSlot: '09:30 AM - 11:30 AM',
    },
    {
      id: 5,
      place: 'Parking Lot F',
      date: '2023-09-22',
      fees: '$11',
      timeSlot: '01:00 PM - 03:00 PM',
    },
    // Add more past bookings
  ];

  return (
    <ScrollView style={styles.container}     showsVerticalScrollIndicator={false}
    >
      {pastBookings.map((booking) => (
        <View key={booking.id} style={styles.bookingCard}>
          <Text style={styles.bookingTitle}>{booking.place}</Text>
          <Text>{booking.date}</Text>
          <Text style={styles.charges}>Charges: {booking.fees}</Text>
          <Text>{booking.timeSlot}</Text>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigation.navigate('BookingDetailScreen', { booking })}
          >
            <Text style={styles.detailsButtonText}>Details</Text>
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
  detailsButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 'auto',
    marginTop: -70,
    marginBottom: 30,
  },
  detailsButtonText: {
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
