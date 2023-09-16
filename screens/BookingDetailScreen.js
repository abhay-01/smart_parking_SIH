import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {captureScreen} from 'react-native-view-shot';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function BookingDetailScreen({ route }) {
  const { booking } = route.params;

  const [imageURI, setImageURI] = useState(
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
  );
  const [savedImagePath, setSavedImagePath] = useState('');

  const takeScreenShot = () => {
    // To capture Screenshot
    captureScreen({
      // Either png or jpg (or webm Android Only), Defaults: png
      format: 'jpg',
      // Quality 0.0 - 1.0 (only available for jpg)
      quality: 0.8, 
    }).then(
      //callback function to get the result URL of the screnshot
      (uri) => {
        setSavedImagePath(uri);
        setImageURI(uri);
      },
      (error) => console.error('Oops, Something Went Wrong', error),
    );
  };

  // Sample data for user reviews
  const userReviews = [
    {
      userName: 'John Doe',
      rating: 5,
      reviewText: 'Excellent parking spot! Highly recommended.',
    },
    {
      userName: 'Jane Smith',
      rating: 4,
      reviewText: 'Convenient location and friendly staff.',
    },

    {
      userName: 'John Doe',
      rating: 5,
      reviewText: 'Excellent parking spot! Highly recommended.',
    },
    {
      userName: 'Jane Smith',
      rating: 4,
      reviewText: 'Convenient location and friendly staff.',
    },
    // Add more reviews as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Booking Information */}
      <View style={styles.bookingInfoContainer}>
        <Text style={styles.heading}>Booking Details</Text>
        <Text style = {styles.text}>Location: {booking.place}</Text>
        <Text style = {styles.text}>Date: {booking.date}</Text>
        <Text style = {styles.text}>Charges: {booking.fees}</Text>
        <Text style = {styles.text}>Time Slot: {booking.timeSlot}</Text>
        {/* Add more booking details here */}
      </View>

      {/* Invoice */}
      <View style={styles.invoiceContainer}>
        <Text style={styles.heading}>Invoice</Text>
        <View style={styles.invoiceItem}>
          <Text style = {styles.text}>Pricing: {booking.fees}</Text>
        </View>
        <View style={styles.invoiceItem}>
          <Text style = {styles.text}>Payment Method: {booking.paymentMethod}</Text>
        </View>
        <View style={styles.invoiceItem}>
          <Text style = {styles.text}>Transaction ID: {booking.transactionId}</Text>
        </View>
      </View>

      {/* User Reviews */}
      <View style={styles.reviewsContainer}>
        <Text style={styles.heading}>User Reviews</Text>
        <Carousel
          data={userReviews}
          renderItem={({ item }) => (
            <View style={styles.reviewItem}>
              <Icon name="person" size={24} color="gray" marginRight = {4} paddingRight = {3}/>
              <View style={styles.reviewTextContainer}>
                <Text style={styles.userName}>{item.userName}</Text>
                <Text style={styles.rating}>Rating: {item.rating}/5</Text>
                <Text style={styles.reviewText}>{item.reviewText}</Text>
              </View>
            </View>
          )}
          sliderWidth={350}
          itemWidth={300}   
          layout={'default'}  
        />
      </View>

<TouchableOpacity
          style={styles.buttonStyle}
          onPress={takeScreenShot}>
          <Text style={styles.buttonTextStyle}>
            Take Screenshot
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {
            savedImagePath ?
            `Saved Image Path\n ${savedImagePath}` : ''
          }
        </Text>

        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookingInfoContainer: {
    backgroundColor: '#FFFFF0',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  }, 
  invoiceContainer: {
    backgroundColor: '#FFFFF0',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },

  text:{
    fontSize: 16,

  },
  invoiceItem: {
    marginBottom: 8,
  },
  reviewsContainer: {
    backgroundColor: '#FFFFF0', 
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  reviewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    color: 'gray',
  },
  reviewText: {
    marginTop: 4,
    fontSize: 14,
  },
  reviewTextContainer: {
    marginLeft: 10,
    marginRight: 20,
  },
  textStyle: {
    textAlign: 'center',
    padding: 10,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'orange',
    borderRadius: 18,
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});