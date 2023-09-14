import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your preferred icon library

const CustomBottom = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('Screen1')}
      >
        <Icon name="circle" size={24} color="blue" />
        <Text style={styles.tabBarText}>Tab 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('Screen2')}
      >
        <Icon name="circle" size={24} color="blue" />
        <Text style={styles.tabBarText}>Tab 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('Screen3')}
      >
        <Icon name="circle" size={24} color="blue" />
        <Text style={styles.tabBarText}>Tab 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('Screen4')}
      >
        <Icon name="circle" size={24} color="blue" />
        <Text style={styles.tabBarText}>Tab 4</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabBarItem}
        onPress={() => navigateToScreen('Screen5')}
      >
        <Icon name="circle" size={24} color="blue" />
        <Text style={styles.tabBarText}>Tab 5</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    marginTop:'auto'
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabBarText: {
    marginTop: 5,
    fontSize: 12,
    color: 'blue',
  },
});

export default CustomBottom;
