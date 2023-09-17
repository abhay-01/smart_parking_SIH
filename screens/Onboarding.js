import React from 'react'
import { View, Text, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { useState } from 'react';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {

    const navigation = useNavigation();
    const[onboardingComplete, setOnboardingComplete] = useState(false); // [1
    const handleDone = () => {

        // onboardingComplete ? navigation.navigate('HomeScreen') : 
        // setOnboardingComplete(true);

        navigation.navigate('WelcomeScreen');
    }

    const doneButton = () => {
        return (
            <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
                <Text style={{ color: 'black' }}>Done</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>

            <Onboarding
                containerStyles={{
                    paddingHorizontal: 15,
                }}

                onDone={handleDone}
                onSkip={handleDone}
                bottomBarHighlight={false}
                DoneButtonComponent={doneButton}

                pages={[
                    {
                        backgroundColor: '#fcae1e',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/animation_1.json')} autoPlay loop />


                            </View>
                        ),
                        title: 'Effortless Parking',
                        subtitle: 'Your hassle-free solution for stress-free parking',
                    },

                    {
                        backgroundColor: '#59788e',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/animation_2.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Find Your Spot, Anytime, Anywhere',
                        subtitle: 'Discover and reserve parking spaces on the go',
                    },
                    {
                        backgroundColor: '#ff7f50',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/animation_3.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Smarter Parking, Smoother Journey',
                        subtitle: 'Streamline your commute with our intelligent parking app',
                    },

                ]}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    lottie: {
        width: width * 0.9,
        height: width,
    },

    doneButton: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 2,
        borderTopLeftRadius: 55,
        borderBottomLeftRadius: 55,

    }

})