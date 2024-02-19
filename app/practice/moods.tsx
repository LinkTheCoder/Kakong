import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import MoodsQuiz from '../../components/MoodQuiz';

export default function TabAnimalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <MoodsQuiz />
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
  scrollContainer: {
    flexGrow: 1,
  },
});
