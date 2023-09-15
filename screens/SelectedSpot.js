import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import CustomBottom from '../components/CustomBottom';
import { Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Button } from 'react-native';
import { ActivityIndicator } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SelectedSpot() {
    const navigation = useNavigation();
    const [isCheckAvailabilityModalVisible, setIsCheckAvailabilityModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const [availabilityResults, setAvailabilityResults] = useState(null);
  
    const toggleCheckAvailabilityModal = () => {
      setIsCheckAvailabilityModalVisible(!isCheckAvailabilityModalVisible);
    };
  
    const handleCheckAvailability = () => {
      // Show loading indicator
      setIsLoading(true);
  
      // Simulate loading for 3 seconds
      setTimeout(() => {
        // Replace with actual availability and pricing check
        const results = {
          availableSpaces: 50,
          averagePricing: '$10/hour',
        };
        setAvailabilityResults(results);
  
        // Hide loading indicator
        setIsLoading(false);
      }, 3000);
    };
  


    return (
        <View styles={{
            flex: 1,
        }}>


            <ScrollView style={styles.container}
                showsVerticalScrollIndicator
            >

                <View style={styles.imageBox}>
                    <Image
                        source={require('../assets/parking.png')}
                        style={{ width: windowWidth, height: windowHeight * 0.4, borderBottomLeftRadius: 22, borderBottomRightRadius: 22 }} // Adjust the height as a percentage of the screen height
                        resizeMode="cover" // You can choose how the image fits within the view
                    />

                    <View style={styles.iconContainer}>
                        <Icon name="arrow-left" size={25} color="black" margin={4} onPress={() => navigation.goBack()} />
                    </View>
                </View>

                <View style={styles.ratings}>
                    <Icon name='star' size={19} color={'orange'} marginLeft={9} marginTop={5} />
                    <Icon name='star' size={19} color={'orange'} marginLeft={9} marginTop={5} />
                    <Icon name='star' size={19} color={'orange'} marginLeft={9} marginTop={5} />
                    <Icon name='star' size={19} color={'orange'} marginLeft={9} marginTop={5} />
                    <Icon name='star' size={19} color={'gray'} marginLeft={9} marginTop={5} />
                    <Text className="ml-3 mt-1 font-bold">(1 Rating)</Text>
                    <Image source={require('../assets/selectPark.png')} style={{ width: 25, height: 25, marginLeft: 90, marginTop: 5, }}
                    />

                    <Text style={{
                        marginTop: 7,
                        fontWeight: 'bold',
                        color: 'gray',
                    }}>3 Times</Text>

                </View>

                <View style={styles.Maincontainer}>
                    {/* Parking Details Container */}
                    <View style={styles.detailsContainer}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>

                            <Text style={styles.parkingName}>Parking Near Stellar IT</Text>
                            <Icon name='map' size={33} marginTop={13} color={'orange'} />

                        </View>
                        {/* <View style={styles.borderLine}></View> */}
                        <Text style={styles.details} className='mt-2 mb-3'>Short Description of the Parking</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>

                            <Text style={styles.details} className='font-bold mt-7'>Availability</Text>
                            <Text className='mt-7 mr-2'>8:00 a.m -12:00 a.m</Text>
                        </View>
                        <View style={styles.borderLine}></View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={styles.details} className='font-bold'>Peak Hours</Text>
                            <Text className=' mr-2'>8:00 a.m -12:00 p.m</Text>

                        </View>
                        <View style={styles.borderLine}></View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={styles.details} className='font-bold'>Total Spaces</Text>
                            <Text className=' mr-2'>300</Text>

                        </View>
                        <View style={styles.borderLine}></View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={styles.details} className='font-bold'>Distance</Text>
                            <Text className=' mr-2'>300m</Text>

                        </View>

                    </View>

                    {/* Special Facilities Container */}
                    <View style={styles.facilitiesContainer}>
                        <Text style={styles.facilitiesTitle}>Special Facilities</Text>
                        <View className='flex-row'>
                            <Icon name='car' size={18} marginTop={7} marginRight={4} color={'orange'} />

                            <Text style={styles.facilities} className='mt-1'>Covered Parking</Text>

                        </View>


                        <View className='flex-row'>
                            <Image
                                source={require('../assets/cctv.png')}
                                style={{ width: 20, height: 20 }}
                                marginRight={4}
                                marginTop={4}
                                tintColor={'orange'}
                                borderRadius={45}

                            />
                            <Text style={styles.facilities} className='mt-1'>24/7 Surveillance</Text>

                        </View>

                        <View className='flex-row'>
                            <Icon name='flash' size={18} marginTop={7} marginRight={4} color={'orange'} />

                            <Text style={styles.facilities} className='mt-1 ml-2'>EV Charging Station</Text>

                        </View>
                    </View>

                    <View style={styles.facilitiesContainer} >
                        <Text style={styles.facilitiesTitle}>Payment Options</Text>
                        <View className='flex-row mt-3'>
                            <View className='flex-row'>
                                <Image
                                    source={require('../assets/card.png')}
                                    style={{ width: 20, height: 20 }}
                                    marginRight={4}
                                    marginTop={3}

                                />

                                <Text style={{
                                    fontSize: 16,
                                    marginRight: 13

                                }} className='mt-1'>Debit/Credit</Text>

                            </View>
                            <View className='flex-row'>
                                <Image
                                    source={require('../assets/tags.png')}
                                    style={{ width: 20, height: 20 }}
                                    marginRight={4}
                                    marginTop={4}

                                />

                                <Text style={{
                                    fontSize: 16,
                                    marginRight: 13


                                }} className='mt-1'>FastTags</Text>

                            </View>

                            <View className='flex-row'>
                                <Image
                                    source={require('../assets/qrcode.png')}
                                    style={{ width: 20, height: 20 }}
                                    marginTop={3}

                                />

                                <Text style={{
                                    fontSize: 16,
                                    marginLeft: 2,
                                    marginRight: 7,




                                }} className='mt-1'>QR Scanner</Text>

                            </View>

                        </View>
                    </View>

                    {/* Check Availability Button */}
                    <TouchableOpacity style={styles.button} className='mb-3' onPress={toggleCheckAvailabilityModal}>
                        <Text style={styles.buttonText} >Check Availability</Text>
                    </TouchableOpacity>

                    {/* Check Availability Modal */}
                    <Modal
        transparent={true}
        animationType="slide"
        visible={isCheckAvailabilityModalVisible}
        onRequestClose={toggleCheckAvailabilityModal}
      >
        <View style={styles.modalContainer}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size={34} color="orange" />
              <Text className = 'text-white mb-3 text-2xl'>Checking...</Text>
            </View>
          ) : availabilityResults ? (
            <View style={styles.resultsContainer}>
              <Text className = 'text-white text-2xl'>Available Spaces: {availabilityResults.availableSpaces}</Text>
              <Text className = 'text-white mb-3 text-2xl'>Average Pricing: {availabilityResults.averagePricing}</Text>
            </View>
          ) : (
            <DateTimePicker
              isVisible={true}
              mode="datetime"
              date={selectedDate}
              onConfirm={(date) => setSelectedDate(date)}
              onCancel={toggleCheckAvailabilityModal}
            />
          )}
          {!isLoading && !availabilityResults && (
            <Button title="Check" onPress={handleCheckAvailability} style = {{
                marginBottom: 24,
            }} />
          )}
          <Button title="Done" color="orange" onPress={toggleCheckAvailabilityModal} />
        </View>
      </Modal>

      {/* <DateTimePicker
        isVisible={isCheckAvailabilityModalVisible}
        mode="date"
        onConfirm={(date) => setSelectedDate(date)}
        onCancel={toggleCheckAvailabilityModal}
      />

      <DateTimePicker
        isVisible={isCheckAvailabilityModalVisible}
        mode="time"
        onConfirm={(time) => setSelectedTime(time)}
        onCancel={toggleCheckAvailabilityModal}
      /> */}

                    {/* Reserve and Book Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.reserveButton}>
                            <Text style={styles.buttonText}>Reserve</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('PaymentScreen' , {selectedDate,selectedTime})}>
                            <Text style={styles.buttonText}>Book</Text>
                        </TouchableOpacity>
                    </View>



                </View>

            </ScrollView>

            <CustomBottom />

        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    imageBox: {
        backgroundColor: 'white',
        alignItems: 'center',
    },

    iconContainer: {
        position: 'absolute',
        backgroundColor: '#FFE5B4',
        // Background color for the icon container
        borderRadius: 50, // Adjust the border radius to make it rounded
        top: 40,
        left: 20,
    },

    ratings: {
        flexDirection: 'row',
    },

    Maincontainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    detailsContainer: {
        backgroundColor: '#FFE5B4',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
    },
    parkingName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    borderLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginVertical: 8,
    },
    details: {
        fontSize: 18,

    },
    facilitiesContainer: {
        backgroundColor: '#FFE5B4',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
    },
    facilitiesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    facilities: {
        fontSize: 18,
        color: 'gray',
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reserveButton: {
        flex: 1,
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 16,
        marginRight: 8,
        alignItems: 'center',
    },
    bookButton: {
        flex: 1,
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 16,
        marginLeft: 8,
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 20, // Add padding to the sides
      },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        padding: 8,
        marginBottom: 16,
    },
    checkButton: {
        backgroundColor: 'orange',
        padding: 12,
        borderRadius: 5,
    },
    checkButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loadingIndicator: {
        marginTop: 16,
    },
    resultContainer: {
        marginTop: 16,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    resultText: {
        color: 'gray',
        fontSize: 16,
    },
    doneButton: {
        backgroundColor: 'orange',
        padding: 12,
        borderRadius: 5,
        marginTop: 16,
    },
    doneButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loadingIndicator: {
        marginTop: 16,
      },
      
    });