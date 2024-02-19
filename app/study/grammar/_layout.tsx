import React from 'react';
import { StyleSheet, Pressable, ScrollView, View, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function LayoutGrammar() {
  const navigation = useNavigation();

  const handleTopicParticlesPress = () => {
    navigation.navigate('study/topic');
  };

  const handleSubjectParticlesPress = () => {
    navigation.navigate('study/subject');
  };

  const handleSubjectLocationPress = () => {
    navigation.navigate('study/location');
  };

  // Get screen dimensions
  const { width } = Dimensions.get('window');

  // Calculate card width based on screen dimensions
  const cardWidth = width > 600 ? width * 0.2 : width * 0.5;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <Pressable onPress={handleTopicParticlesPress} style={[styles.card, { width: cardWidth }]}>
            <View style={styles.cardContent}>
              <Ionicons name="text" size={24} color="white" style={styles.iconFontAwesome} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>는/은 & 를/을</Text>
                <Text style={styles.subText}>Korean Topic Particles</Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={handleSubjectParticlesPress} style={[styles.card, { width: cardWidth }]}>
            <View style={styles.cardContent}>
              <Ionicons name="text" size={24} color="white" style={styles.iconFontAwesome} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>가/이</Text>
                <Text style={styles.subText}>Korean Subject Particles</Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={handleSubjectLocationPress} style={[styles.card, { width: cardWidth }]}>
            <View style={styles.cardContent}>
              <Ionicons name="text" size={24} color="white" style={styles.iconFontAwesome} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>에, 에서</Text>
                <Text style={styles.subText}>Korean Location Particles</Text>
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
  scrollContainer: {
    flexGrow: 1,
  },
});
