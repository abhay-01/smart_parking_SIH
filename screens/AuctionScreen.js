import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import CustomBottom from '../components/CustomBottom';
import { useState } from 'react';
import FeatureNotAvailableDialog from '../components/FeatureNotAvailableDialog';

export default function AuctionScreen() {
    const navigation = useNavigation();
    const [isFeatureNotAvailableDialogVisible, setFeatureNotAvailableDialogVisible] = useState(false);

    // Dummy data for trending events and highest bidders
    const trendingEventsData = [
        { id: '1', title: 'Event 1', image: require('../assets/concerts_1.png') },
        { id: '2', title: 'Event 2', image: require('../assets/concerts_3.png') },
        { id: '3', title: 'Event 3', image: require('../assets/concerts_4.png') },
        { id: '4', title: 'Event 4', image: require('../assets/concerts_1.png') },
        { id: '5', title: 'Event 5', image: require('../assets/concerts_1.png') },
    ];

    const highestBiddersData = [
        { id: '1', name: 'User 1', bidAmount: '$100' },
        { id: '2', name: 'User 2', bidAmount: '$90' },
        { id: '3', name: 'User 3', bidAmount: '$80' },
        { id: '4', name: 'User 4', bidAmount: '$70' },
        { id: '5', name: 'User 5', bidAmount: '$60' },
    ];
    const dummyVehicles = [
        {
          name: 'Car 1',
          type: 'Sedan',
          license: 'ABC123',
        },
        {
          name: 'Motorcycle 1',
          type: 'Motorcycle',
          license: 'XYZ456',
        },
      ];



    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.searchBarContainer}>
                    <Icon name="magnify" size={28} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search for events"
                        placeholderTextColor="gray"
                    />
                </View>


                <Text style={styles.heading}>Trending Events</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <FlatList
                        data={trendingEventsData}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <View style={styles.eventContainer}>
                                <TouchableRipple>
                                    <Image source={item.image} style={styles.eventImage} />
                                </TouchableRipple>
                                <Text style={styles.eventTitle}>{item.title}</Text>
                            </View>
                        )}
                    />
                </ScrollView>

                <Text style={styles.heading}>Highest Bidders</Text>
                <FlatList
                    data={highestBiddersData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.bidderContainer}>
                            <Text style={styles.bidderName}>{item.name}</Text>
                            <Text style={styles.bidAmount}>{item.bidAmount}</Text>
                        </View>
                    )}
                />

                <View style={styles.howToApplyContainer}>
                    <Text style={styles.howToApplyHeading}>How to Apply in this Auction</Text>
                    <Text style={styles.instruction}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac justo vel nisi ultricies
                        varius in ac augue.
                    </Text>
                    <Text style={styles.instruction}>
                        Sed vitae vehicula lectus. Aliquam erat volutpat. Proin consectetur odio vitae vehicula.
                    </Text>
                </View>

                <TouchableOpacity
        style={styles.startBiddingButton}
        onPress={() => setFeatureNotAvailableDialogVisible(true)}
      >
        <Text style={styles.startBiddingButtonText}>Start Bidding</Text>
      </TouchableOpacity>

      <FeatureNotAvailableDialog
        isVisible={isFeatureNotAvailableDialogVisible}
        onClose={() => setFeatureNotAvailableDialogVisible(false)}
      />
            </ScrollView>

            <CustomBottom />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 10,
        marginBottom: 16,
        marginHorizontal: 16,
        marginTop: 16,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchBar: {
        flex: 1, // Take the remaining space
        color: 'black',
        fontSize: 16,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        marginHorizontal: 16,
        marginTop: 16,
    },
    eventContainer: {
        marginRight: 10,
        alignItems: 'center',
        marginBottom: 19,
        marginHorizontal: 16,
        marginTop: 16,

    },
    eventImage: {
        width: 130,
        height: 170,
        borderRadius: 10,
    },
    eventTitle: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        fontSize: 19,
    },
    bidderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginBottom: 8,
        paddingVertical: 8,
        marginHorizontal: 16,
    },
    bidderName: {
        fontSize: 16,
    },
    bidAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    howToApplyContainer: {
        marginTop: 16,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16,
    },
    howToApplyHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    instruction: {
        fontSize: 16,
        marginBottom: 8,
    },
    startBiddingButton: {
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
        marginHorizontal: 16,
        marginTop: 16,
    },

    startBiddingButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});
