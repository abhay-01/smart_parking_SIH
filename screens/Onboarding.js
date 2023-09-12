import React from 'react'
import { View, Text, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
    return (
        <View style={styles.container}>

            <Onboarding
                containerStyles={{
                    paddingHorizontal: 15,
                }}

                pages={[
                    {
                        backgroundColor: 'orange',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/animation_1.json')} autoPlay loop />


                            </View>
                        ),
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },

                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/animation_2.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: 'red',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/animation_3.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
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
    }

})