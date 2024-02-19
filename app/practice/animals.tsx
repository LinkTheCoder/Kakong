import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AnimalsQuiz from '../../components/AnimalsQuiz';

export default function TabAnimalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <AnimalsQuiz />
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
