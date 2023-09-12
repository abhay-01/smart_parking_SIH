import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';

// AIzaSyDP45K8S2041tSGdeG-BPfFT4acXo_GDDc
 

export default function HomeScreen() {
  return (

   
   
    <View style={styles.container}>
        
        
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 28.6139, // Latitude of Delhi, India
        longitude: 77.2090, // Longitude of Delhi, India
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
      {/* Marker for Delhi */}
      <Marker
        coordinate={{ latitude: 28.6139, longitude: 77.2090 }}
        title="Delhi"
        description="Capital of India"
      />

      {/* Marker for Gurgaon */}
      <Marker
        coordinate={{ latitude: 28.4595, longitude: 77.0266 }}
        title="Gurgaon"
        description="A city in Haryana, India"
      />

      {/* Marker for Noida */}
      <Marker
        coordinate={{ latitude: 28.5355, longitude: 77.3910 }}
        title="Noida"
        description="A city in Uttar Pradesh, India"
      />

      {/* Marker for Faridabad */}
      <Marker
        coordinate={{ latitude: 28.4089, longitude: 77.3178 }}
        title="Faridabad"
        description="A city in Haryana, India"
      />

      {/* Add more markers as needed */}
    </MapView>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
map: {
  flex: 1,
},

safe: {
  flex: 1,
  backgroundColor: '#fff',
  
},
});