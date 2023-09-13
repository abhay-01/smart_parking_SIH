import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather'; // Import the Feather icon set





export default function ActiveBookingsScreen() {


  const [timers, setTimers] = useState({});

  // Start a timer for each active booking
  useEffect(() => {
    const updatedTimers = {};

    activeBookings.forEach((booking) => {
      updatedTimers[booking.id] = startTimer(booking.id, booking.timeSlot);
    });

    setTimers(updatedTimers);

    // Clean up timers when the component unmounts
    return () => {
      Object.values(updatedTimers).forEach((timer) => clearInterval(timer));
    };
  }, [activeBookings]);

  const startTimer = (bookingId, timeSlot) => {
    const [startTime, endTime] = timeSlot.split(' - ');
    const [startHour, startMinute] = startTime.split(':').map((str) => parseInt(str));
    const [endHour, endMinute] = endTime.split(':').map((str) => parseInt(str));
    const timeSlotDuration = (endHour - startHour) * 60 + (endMinute - startMinute);

    // Calculate the timer limit as 25% of the time slot duration
    const timerLimit = (timeSlotDuration * 0.25) * 60 * 1000; // Convert to milliseconds

    return setInterval(() => {
      // Update the timer for the specific booking
      // Decrement the timer by 1 second
      setTimers((prevTimers) => {
        const updatedTimer = prevTimers[bookingId] - 1000;

        // Clear the timer if it reaches zero
        if (updatedTimer <= 0) {
          clearInterval(prevTimers[bookingId]);
        }

        return {
          ...prevTimers,
          [bookingId]: updatedTimer,
        };
      });
    }, 1000);
  };

  // Format the timer in minutes:seconds
  const formatTimer = (timer) => {
    const minutes = Math.floor(timer / 60000);
    const seconds = ((timer % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
  };

  // Sample data for active bookings
  const activeBookings = [
    {
      place: 'Parking Lot A',
      date: '2023-09-15',
      charges: '$10',
      timeSlot: '09:00 AM - 03:00 PM',
    },
    {
      place: 'Parking Lot B',
      date: '2023-09-16',
      charges: '$12',
      timeSlot: '02:00 PM - 04:00 PM',
    },
    {
      place: 'Parking Lot C',
      date: '2023-09-17',
      charges: '$15',
      timeSlot: '11:30 AM - 01:30 PM',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {activeBookings.map((booking, index) => (
        <View key={index} style={styles.bookingCard}>
          <Text style={styles.bookingTitle}>{booking.place}</Text>
          <Text>{booking.date}</Text>
          <Text style={styles.charges}>Charges: {booking.charges}</Text>
          <Text>{booking.timeSlot}</Text>
          <Text style={styles.timer}>{formatTimer(timers[booking.id])}</Text>
          <Icon name="map-pin" size={24} color="red" style={styles.mapPinIcon} />

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
  timer: {
    fontSize: 26,
    marginLeft: 'auto',
    fontWeight: 'bold',
    marginTop: -80,
    marginBottom: 40,
  },

  mapPinIcon:{
    marginLeft: 'auto',
    marginTop: -26,
    marginRight:26,

  }
});