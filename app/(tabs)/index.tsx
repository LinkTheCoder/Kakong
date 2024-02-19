import React from 'react';
import { StyleSheet, Image, Pressable, ScrollView, Dimensions } from 'react-native'; // Import Dimensions
import { useNavigation } from '@react-navigation/native';

import { View, Text } from '@/components/Themed';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

// Require the icon image
const IconImage = require('../../assets/images/icon.png');

export default function TabOneScreen() {
  const navigation = useNavigation();

  const handleStudyPress = () => {
    navigation.navigate('study');
  };

  const handlePracticePress = () => {
    navigation.navigate('practice');
  };

  // Get screen dimensions
  const { width } = Dimensions.get('window');

  // Calculate card width based on screen dimensions
  const cardWidth = width > 600 ? width * 0.2 : width * 0.5;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Render the icon image */}
        <Image source={IconImage} style={styles.icon} resizeMode="contain" />

        {/* Cards */}
        <View style={styles.cardsContainer}>
          {/* Study Card component */}
          <Pressable onPress={handleStudyPress} style={[styles.card, { width: cardWidth }]}>
            <View style={styles.cardContent}>
              <FontAwesome name="book" size={24} color="white" style={styles.iconFontAwesome} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Study</Text>
                <Text style={styles.subText}>Learn with Korean lessons</Text>
              </View>
            </View>
          </Pressable>

          {/* Practice Card component */}
          <Pressable onPress={handlePracticePress} style={[styles.card, { width: cardWidth }]}>
            <View style={styles.cardContent}>
              <FontAwesome6 name="pen-nib" size={24} color="white" style={styles.iconFontAwesome} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Practice</Text>
                <Text style={styles.subText}>Practice quiz topics</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  icon: {
    width: '70%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  cardsContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'transparent',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
  },
  cardContent: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconFontAwesome: {
    marginBottom: 10,
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
  scrollContainer: {
    flexGrow: 1,
  },
});
