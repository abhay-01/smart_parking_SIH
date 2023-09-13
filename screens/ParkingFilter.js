import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-date-picker';


export default function ParkingFilterScreen({ navigation }) {
  // State variables to hold filter criteria
  const [priceRange, setPriceRange] = useState([0, 100]); // Default price range
  const [selectedVehicleType, setSelectedVehicleType] = useState('Any');
  const [distance, setDistance] = useState(5); // Default distance in Kms
  const [duration, setDuration] = useState(2); // Default duration in hours
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default date


  // Function to apply filters and navigate back to the previous screen
  const applyFilters = () => {
    const filters = {
      priceRange,
      selectedVehicleType,
      distance,
      duration,
      selectedDate,

    };

    // You can pass the filters object to your previous screen or use it to filter parking slots
    // For demonstration purposes, we'll just log the filters
    console.log('Applied Filters:', filters);

    // Navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Price Range</Text>
      <View style={styles.priceRangeContainer}>
        <Text style = {{ fontSize:27, color:'#F79802'}}>${priceRange[0]}</Text>
        <Slider
          style={styles.priceRangeSlider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor='orange'
          step={1}
          value={priceRange[0]} // Use the first value of the priceRange array
          onValueChange={(value) => setPriceRange([value, priceRange[1]])} // Update the first value
        />
        <Text style = {{ fontSize:27, color:'#F79802'}}>${priceRange[1]}</Text>
      </View>

      <Text style={styles.sectionTitle}>Vehicle Type</Text>
      <View style={styles.vehicleTypeContainer}>
        {/* Add radio buttons or a dropdown to select vehicle type */}
        {/* For simplicity, we use TouchableOpacity here */}
        <TouchableOpacity
          style={[
            styles.vehicleTypeOption,
            selectedVehicleType === 'Any' && styles.selectedOption,
          ]}
          onPress={() => setSelectedVehicleType('Any')}
        >
          <Text className = "text-xl items-center pb-2 pl-2">Any</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.vehicleTypeOption,
            selectedVehicleType === 'Car' && styles.selectedOption,
          ]}
          onPress={() => setSelectedVehicleType('Car')}
        >
          <Text className = "text-xl items-center pb-2 pl-2">Car</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.vehicleTypeOption,
            selectedVehicleType === 'Bike' && styles.selectedOption,
          ]}
          onPress={() => setSelectedVehicleType('Bike')}
        >
          <Text className = "text-xl items-center pb-2 pl-2">Bike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.vehicleTypeOption,
            selectedVehicleType === 'Cycle' && styles.selectedOption,
          ]}
          onPress={() => setSelectedVehicleType('Cycle')}
        >
          <Text className = "text-xl items-center pb-2 pl-2">Cycle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.vehicleTypeOption,
            selectedVehicleType === 'Truck' && styles.selectedOption,
          ]}
          onPress={() => setSelectedVehicleType('Truck')}
        >
          <Text className = "text-xl items-center pb-2 pl-2">Truck</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.vehicleTypeOption,
            selectedVehicleType === 'Scooty' && styles.selectedOption,
          ]}
          onPress={() => setSelectedVehicleType('Scooty')}
        >
          <Text className = "text-xl items-center pb-2 pl-1">Scooty</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.vehicleTypeOption,
            selectedVehicleType === 'Electric' && styles.selectedOption,
          ]}
          onPress={() => setSelectedVehicleType('Electric')}
        >
          <Text className = "text-xl items-center pb-2 ">Electric</Text>
        </TouchableOpacity>
        {/* Add more vehicle type options as needed */}
      </View>

      <Text style={styles.sectionTitle}>Maximum Distance (Kms)</Text>
      <Slider
        style={styles.distanceSlider}
        minimumValue={1}
        minimumTrackTintColor='orange'
        maximumValue={20}
        step={1}
        value={distance}
        onValueChange={(value) => setDistance(value)}
      />
      <Text style = {{ fontSize:22, color:'#F79802'}}>{distance} Kms</Text>

      <Text style={styles.sectionTitle}>Duration for Parking (Hours)</Text>
      <Slider
        style={styles.durationSlider}
        minimumValue={1}
        maximumValue={12}
        minimumTrackTintColor='orange'
        step={1}
        value={duration}
        onValueChange={(value) => setDuration(value)}
      />
      <Text style = {{ fontSize:22, color:'#F79802'}}>{duration} hours</Text>

     


      <TouchableOpacity
        style={styles.applyButton}
        onPress={applyFilters}
      >
        
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color:'orange'
  },
  priceRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceRangeSlider: {
    flex: 1,
    color: 'orange',
          
  },
  vehicleTypeContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10,
  },
  vehicleTypeOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth:2,
    width: 90,
    padding: 10,
    marginTop:10,
    marginRight: 10,

  },
  selectedOption: {
    backgroundColor: 'orange', // Highlight the selected option
    borderColor: 'black',
  },
  distanceSlider: {
    marginTop: 10,
    color: 'orange',

  },
 
  applyButton: {
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    borderColor: 'black',
    marginTop:'auto',

  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
