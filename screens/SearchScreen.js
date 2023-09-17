import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const [textInputValue, setTextInputValue] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#FFA500', height: 250, width: 400, }}>
        <View className="flex-row justify-start mt-10">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
          <Text className="mt-1 ml-2 font-bold color-white text-2xl" >Let's Get Parking</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name="search"
            type="font-awesome"
            size={25}
            style={styles.icon}
          />
          <TextInput
           placeholder="Search for a location"
           style={styles.input}
           value={textInputValue}
           onChangeText={(text) => setTextInputValue(text)}
          />
          <Icon
            name="close"
            color="black"
            type="font-awesome"
            size={25}
            style={styles.icon}
            onPress={() => setTextInputValue('')} // Clear the input value
          />
        </View>
        <View style={styles.inputContainer2}>
          <Icon
            name="my-location"
            color="#FFA500"
            type="material"
            size={30}
            style={styles.icon2}
          />
          <TextInput
            placeholder="Current Locations"
            style={styles.input2}
          />
        </View>

        <View style={styles.locInformation}>
          <View style={styles.contDeatils}>
            <Icon
              style={{ opacity: 0.5 }}
              name="location-on"
              type="material"
              size={30}
            />
            <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 16 }}>Indra Gandhi International Airport</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.contDeatils}>
            <Icon
              name="location-on"
              type="material"
              size={30}
              style={{ opacity: 0.5 }}
            />
            <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 16 }}>Indra Gandhi International Airport</Text>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.contDeatils}>
            <Icon
              name="location-on"
              type="material"
              size={30}
              style={{ opacity: 0.5 }}
            />
            <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 16 }}>Indra Gandhi International Airport</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  inputContainer: {
    marginTop: 50,
    marginLeft: 27,
    paddingRight: 10,
    alignItems: 'center',
    width: '85%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: 'white',
    elevation: 5
  },

  inputContainer2: {
    marginTop: 95,
    marginLeft: 30,
    alignItems: 'center',
    marginRight: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 15,
    borderColor: 'white',
    elevation: 5,
  },
  input: {
    margin: 20,
    flex: 1,
    height: 15,
    marginHorizontal: 15,
    
    
  },
  input2: {
    margin: 20,
    flex: 1,
    height: 15,
    paddingHorizontal: 10,
  },

  icon: {
    opacity: 0.5,
    marginHorizontal: 15,
  },
  icon2: {
    marginHorizontal: 15,

  },
  locInformation: {
    marginTop: 75,
    marginLeft: 30,
    width: '85%',
    height: '140%',
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'black',
    elevation: 5
  },
  contDeatils: {
    marginTop: 15,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  horizontalLine: {
    width: '90%',
    marginLeft: 20,
    marginTop: 5,
    height: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
