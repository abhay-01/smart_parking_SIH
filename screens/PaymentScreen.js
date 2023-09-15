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
import CustomBottom from '../components/CustomBottom';


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
                    <Text styles = {{
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>Parking near Stellar IT</Text>
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
        <Text className = 'text-3xl text-orange-500 font-bold'>Rs.599</Text>
      </View>
      <TouchableOpacity style={styles.proceedView} >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </View>
                </View>
            </ScrollView>
            <CustomBottom/>
        </View>
    );
}

const styles = StyleSheet.create({
    headerInfo: {
        backgroundColor: '#FFF7E7',
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
        elevation: 5,

    },

    paymentBox: {
        backgroundColor: '#FFE5B4',
        borderRadius: 10,
        padding: 16,
        marginBottom: 25,
        elevation: 5,

    },

    paymentHead: {
        fontSize: 19,
        marginLeft: 8,
        fontWeight: 'bold',
        color: 'black',
    },

    MainCont: {
        flex: 1,
        backgroundColor: '#FFF7E7',
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
        elevation: 5,

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
        borderRadius: 20,
    width: '100%',
    backgroundColor: 'white', // Background color of the container
    borderTopWidth: 1, // Optional: Add a border at the top of the container
    borderColor: 'lightgray', // Optional: Border color
    elevation: 5,

  },
  totalView: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#FFE5B4', // Background color for "Grand Total"
    alignItems: 'center',
    justifyContent: 'center',
    height: 90, // Adjust the height as needed
  },
  totalText: {
    color: 'white', // Text color for "Grand Total"
    fontSize: 27, // Font size for the text
    // fontWeight: 'bold',
    marginBottom: 5,
  },
  proceedView: {
    flex: 1,
    backgroundColor: 'orange', // Background color for "Proceed"
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    height: 90, // Adjust the height as needed
  },
  proceedText: {
    color: 'white', // Text color for "Proceed"
    fontSize: 27,  // Font size for the text
    fontWeight: 'bold',
  },
});