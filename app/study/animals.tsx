import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnimalsQuiz from '../../components/AnimalsQuiz';

export default function TabAnimalScreen() {
  return (
    <View style={styles.container}>
      <AnimalsQuiz />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
