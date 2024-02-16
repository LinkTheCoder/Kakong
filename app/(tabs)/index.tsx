import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { View, Text } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';

// Require the icon image
const IconImage = require('../../assets/images/icon.png');

export default function TabOneScreen() {
  const navigation = useNavigation();

  const handleHangulPress = () => {
    navigation.navigate('hangul'); // Navigate to the "Hangul" page
  };

  const handleAnimalsPress = () => {
    navigation.navigate('study'); // Navigate to the "Animals" page
  };

  return (
    <View style={styles.container}>
      {/* Render the icon image */}
      <Image source={IconImage} style={styles.icon} resizeMode="contain" />

      {/* Cards */}
      <View style={styles.cardsContainer}>
        {/* Hangul Card component */}
        <Pressable onPress={handleHangulPress} style={styles.card}>
          <View style={styles.cardContent}>
            <FontAwesome name="language" size={24} color="white" style={styles.iconFontAwesome} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Hangul</Text>
              <Text style={styles.subText}>Quiz of all 24 letters</Text>
            </View>
          </View>
        </Pressable>

        {/* Animals Card component */}
        <Pressable onPress={handleAnimalsPress} style={styles.card}>
          <View style={styles.cardContent}>
            <FontAwesome name="book" size={24} color="white" style={styles.iconFontAwesome} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Study</Text>
              <Text style={styles.subText}>Several quiz topics</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Set background color to transparent
  },
  icon: {
    width: '70%', // Set the width to 70% of the screen width
    aspectRatio: 1, // Maintain aspect ratio
    marginBottom: 10, // Add margin bottom to separate the icon from the cards
  },
  cardsContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'transparent', // Set background color to transparent
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Ensure no overflow content is visible
    borderWidth: 1, // Add border width
    borderColor: 'gray', // Set border color to gray
    width: '45%', // Set card width to 45% of the container width
  },
  cardContent: {
    backgroundColor: 'transparent',
    flexDirection: 'column', // Change to column layout to stack elements vertically
    alignItems: 'center',
  },
  iconFontAwesome: {
    marginBottom: 10, // Add margin bottom to separate the icon from the text
    fontSize: 24,
  },
  textContainer: {
     backgroundColor: 'transparent',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});
