import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';



  export default function BookingDetailScreen({ route }) {
    const { booking } = route.params;
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.bookingDetail}>
          <Text className = "text-2xl ">Place: {booking.place}</Text>
          <Text className = "text-2xl ">Date: {booking.date}</Text>
          <Text className = "text-2xl ">Fee: {booking.fees}</Text>
          <Text>Time Slot: {booking.timeSlot}</Text>
          {/* Add more booking details here */}
        </View>

      <View style={styles.invoice}>
        <Text style={styles.detailTitle}>Invoice</Text>
        {/* Display the invoice details here, such as payment information */}
      </View>

      <View style={styles.reviews}>
        <Text style={styles.detailTitle}>Reviews</Text>
        {/* Display user reviews and ratings here */}
        {/* You can map through reviews data and display each review */}
        {/* Example: */}
        {/* <View style={styles.review}>
          <Text>User: John Doe</Text>
          <Text>Rating: 5/5</Text>
          <Text>Review: Great parking experience!</Text>
        </View> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  bookingDetail: {
    marginBottom: 20,
  },
  invoice: {
    marginBottom: 20,
  },
  reviews: {
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  review: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
