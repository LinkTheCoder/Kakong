import React from 'react';
import { StyleSheet, Pressable, View, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Study() {
  const navigation = useNavigation();

  const handleHangulPress = () => {
    navigation.navigate('study/hangul');
  };

  const handleGrammarPress = () => {
    navigation.navigate('study/grammar');
  };

  const handleVocabularyPress = () => {
    navigation.navigate('study/vocabulary');
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
              <Text style={styles.subText}>Learn the Korean alphabet</Text>
            </View>
          </View>
        </Pressable>

        <Pressable onPress={handleGrammarPress} style={[styles.card, { width: cardWidth }]}>
          <View style={styles.cardContent}>
            <Ionicons name="text" size={24} color="white" style={styles.iconFontAwesome} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Grammar</Text>
              <Text style={styles.subText}>Learn Korean grammar</Text>
            </View>
          </View>
        </Pressable>

        <Pressable onPress={handleVocabularyPress} style={[styles.card, { width: cardWidth }]}>
          <View style={styles.cardContent}>
            <Ionicons name="book" size={24} color="white" style={styles.iconFontAwesome} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Vocabulary</Text>
              <Text style={styles.subText}>Learn Korean vocabulary</Text>
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
    color: 'white',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});
