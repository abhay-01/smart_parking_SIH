import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';


export default function PaymentScreen() {
    const route = useRoute();
    const { selectedDate, selectedTime } = route.params;

    const [selectedOption, setSelectedOption] = useState('Credit/Debit Card');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

    useEffect(() => {
        // Log the selected date and time when the component mounts
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);
    }, []);

    const navigation = useNavigation();

    const formattedTime = '1:00 pm'; // Replace with your desired formatted time

    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerInfo}>
                    <Text>Parking near Stellar IT</Text>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </Text>
                </View>

                <View style={styles.MainCont}>
                    <View style={styles.durationBox}>
                        <View style={styles.durationTextContainer}>
                            <Text style={styles.durationText}>Parking From</Text>
                            <Text style={styles.selectedDateTime}>
                                Today - 10:00 am
                            </Text>
                        </View>
                        <Icon name="arrow-right" size={24} color={'gray'} />
                        <View style={styles.durationTextContainer}>
                            <Text style={styles.durationText}>Parking Till</Text>
                            <Text style={styles.selectedDateTime}>Today - {formattedTime}</Text>
                        </View>
                    </View>

                    <View style={styles.paymentBox}>
                        <Text style={styles.paymentHead}>Pricing Details</Text>

                        <View className='flex-row justify-between mt-4 ml-3'>
                            <Text className='text-neutral-500 font-bold text-xl'>Charge</Text>
                            <Text className='text-xl'>Rs.599</Text>

                        </View>

                        <View className='flex-row justify-between mt-3 ml-3'>
                            <Text className='text-neutral-500 font-bold text-xl'>GST</Text>
                            <Text className='text-xl'>Rs.599</Text>


                        </View>

                        <View className='flex-row justify-between mt-3 ml-3'>
                            <Text className='text-neutral-500 font-bold text-xl'>Discount</Text>
                            <Text className='text-xl'>Rs.599</Text>


                        </View>

                        <View className='flex-row justify-between mt-3 ml-3'>
                            <Text className='text-neutral-500 font-bold text-xl'>EV Discount</Text>
                            <Text className='text-xl mr-4'>Nil</Text>


                        </View>

                        <View style={styles.borderLine}></View>

                        <View className='flex-row justify-between mt-1 ml-3'>
                            <Text className='text-neutral-900 font-bold text-2xl'>You Pay</Text>
                            <Text className='text-2xl font-bold'>Rs.599</Text>


                        </View>


                    </View>

                    <View style = {styles.optionsBox}>
                    <Text style={styles.paymentHead}>Payment Options</Text>
                    <View style={styles.radioButtonContainer}>
        <RadioButton.Group
          onValueChange={(value) => handleOptionChange(value)}
          value={selectedOption}
        >
          <View style={styles.radioButton}>
            <RadioButton.Android value="Credit/Debit Card" color='orange'/>
            <Text style = {{
                fontSize: 18,
            }}>Credit/Debit Card</Text>
          </View>
          <View style={styles.borderLine}></View>

          
          <View style={styles.radioButton}>
            <RadioButton.Android value="Fastag" color='orange'/>
            <Text style = {{
                fontSize: 18,
            }}>Fastag</Text>
          </View>

          <View style={styles.borderLine}></View>

          <View style={styles.radioButton}>
            <RadioButton.Android value="QR" color='orange'/>
            <Text style = {{
                fontSize: 18,
            }}>QR</Text>
          </View>
        </RadioButton.Group>
      </View>

                    </View>

                    <View style={styles.Bottomcontainer}>
      <View style={styles.totalView}>
        <Text style={styles.totalText}>Grand Total</Text>
      </View>
      <View style={styles.proceedView}>
        <Text style={styles.proceedText}>Proceed</Text>
      </View>
    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headerInfo: {
        backgroundColor: 'white',
        flex: 1,
        padding: 16,
    },
    durationBox: {
        flexDirection: 'row',
        backgroundColor: '#FFE5B4',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 16,
        marginBottom: 25,
    },

    paymentBox: {
        backgroundColor: '#FFE5B4',
        borderRadius: 10,
        padding: 16,
        marginBottom: 25,
    },

    paymentHead: {
        fontSize: 19,
        marginLeft: 8,
        fontWeight: 'bold',
        color: 'black',
    },

    MainCont: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    durationTextContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    optionsBox:{
        backgroundColor: '#FFE5B4',
        borderRadius: 10,
        padding: 16,
        marginBottom: 25,
    },

    durationText: {
        fontSize: 19,
        marginLeft: 8,
        fontWeight: 'bold',
        color: '#FFA500',
    },
    selectedDateTime: {
        fontSize: 14,
        marginLeft: 8,
        marginTop: 12,
        fontWeight: 'bold',
    },

    borderLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginVertical: 8,
    },
    radioButtonContainer: {
        flexDirection: 'column',
      },
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
      },
     
      Bottomcontainer: {
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginTop: 10,
      },
      totalView: {
        flex: 1,
        backgroundColor: 'orange', // Change to your app's theme color
        alignItems: 'center',
        justifyContent: 'center',
        height: 50, // Adjust the height as needed
        marginLeft: 10,
      },
      totalText: {
        color: 'white', // Change to the text color you prefer
        fontSize: 25, // Adjust the font size as needed
        fontWeight: 'bold',
      },
      proceedView: {
        flex: 1,
        backgroundColor: 'blue', // Change to your app's theme color
        alignItems: 'center',
        justifyContent: 'center',
        height: 50, // Adjust the height as needed
      },
      proceedText: {
        color: 'white', // Change to the text color you prefer
        fontSize: 25, // Adjust the font size as needed
        fontWeight: 'bold',
      },
    });