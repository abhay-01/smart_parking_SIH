import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomBottom from '../components/CustomBottom';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { height } = Dimensions.get('window');

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="orange" />

            <ImageBackground
                source={require('../assets/parking.png')}
                style={styles.backgroundImage}
                blurRadius={10} 
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.heading} className = 'mt-5'>Find a Parking Spot</Text>
                    <View style={styles.searchBar}>
                        <TextInput
                            placeholder="Search Parking"
                            style={styles.searchInput}
                            placeholderTextColor="#A6A6A6"
                        />
                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={() => {
                                // Implement your search logic here
                            }}
                        >
                            <Text style={styles.searchButtonText}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.enableBox}>
                <View style={{

                }}>
                    <Text style={{
                        fontSize: 27,
                        fontWeight: 'bold',

                    }}>Help Us find You</Text>

                    <View style={{
                        // backgroundColor: 'white',
                        width: 240,
                        marginTop: 7,
                        
                    }} className = "flex-row">
                        <Text className='mt-4 text-neutral-500' style={{
                            fontSize: 18,
                        }}>
                            Turn on location services so we can show your space near you
                        </Text>

                        <Icon name = "map-marker-radius" size={63} marginLeft ={20} color={'orange'}/>

                    </View>

                    <View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'orange',
                                borderRadius: 10,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                marginTop: 10,
                            }}
                            onPress={() => {
                                // Implement your search logic here
                            }}
                        >
                            <Text style={styles.searchButtonText} className ='text-center'>ENABLE LOCATION</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <View style={styles.enableBox}>
                <View style={{
                    // backgroundColor:'yellow'
                }}>
                    <Text style={{
                        fontSize: 27,
                        fontWeight: 'bold',

                    }}>We Do Monthly Parkings Too!</Text>

                    <View style={{
                        // backgroundColor: 'white',
                        width: 190,
                        marginTop: 7,
                    }} className = "flex-row">
                        <Text className='mt-2 mb-2 text-neutral-500' style={{
                            fontSize: 18,
                        }}>
                            Lets us know if you are interested
                        </Text>

                        <Icon name = "clipboard-text-clock" size={63} marginLeft ={66} color={'orange'}/>


                    </View>

                    <View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'orange',
                                borderRadius: 10,
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                marginTop: 10,
                            }}
                            onPress={() => {
                                // Implement your search logic here
                            }}
                        >
                            <Text style={styles.searchButtonText} className='text-center'>SUBSCRIBE US</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <CustomBottom />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
        height: height * 0.3, // Set the height to 30% of the screen height
        resizeMode: 'cover', // Or 'contain' based on your preference
        justifyContent: 'center',
        alignItems: 'center',


    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',

        alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    searchBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 27,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: height * 0.3 * 0.3, // Set the height to 30% of the screen height
        paddingHorizontal: 20,
        marginTop: 80,
    },
    searchInput: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    },
    searchButton: {
        backgroundColor: 'orange',
        borderRadius: 27,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: 20,
    },
    searchButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
    },

    enableBox: {
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#FFE5B4',
        width: '90%',
        height: '27%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20,
        shadowColor: 'orange',
        shadowOffset: { width: 72, height: 48 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    }
});
