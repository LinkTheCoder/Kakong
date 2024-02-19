import React from 'react';
import { StyleSheet, Image, Pressable, Dimensions } from 'react-native'; // Import Dimensions
import { useNavigation } from '@react-navigation/native';
import { View, Text } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function TabOneScreen() {
  const navigation = useNavigation();

  const handleHangulPress = () => {
    navigation.navigate('practice/hangul');
  };

  const handleAnimalsPress = () => {
    navigation.navigate('practice/animals');
  };

  const handleMoodsPress = () => {
    navigation.navigate('practice/moods');
  };

  // Get screen dimensions
  const { width } = Dimensions.get('window');

  // Calculate card width based on screen dimensions
  const cardWidth = width > 600 ? width * 0.2 : width * 0.5;

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <Pressable onPress={handleHangulPress} style={[styles.card, { width: cardWidth }]}>
          <View style={styles.cardContent}>
            <FontAwesome name="language" size={24} color="white" style={styles.iconFontAwesome} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Hangeul</Text>
              <Text style={styles.subText}>Quiz of all 24 letters</Text>
            </View>
          </View>
        </Pressable>

        <Pressable onPress={handleAnimalsPress} style={[styles.card, { width: cardWidth }]}>
          <View style={styles.cardContent}>
            <FontAwesome name="paw" size={24} color="white" style={styles.iconFontAwesome} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Animals</Text>
              <Text style={styles.subText}>Guess the animal quiz</Text>
            </View>
          </View>
        </Pressable>

        <Pressable onPress={handleMoodsPress} style={[styles.card, { width: cardWidth }]}>
          <View style={styles.cardContent}>
            <FontAwesome name="smile-o" size={24} color="white" style={styles.iconFontAwesome} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Moods</Text>
              <Text style={styles.subText}>Guess the mood quiz</Text>
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
  },
  cardsContainer: {
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconFontAwesome: {
    marginBottom: 10,
    fontSize: 24,
  },
  textContainer: {
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
