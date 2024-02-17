import React from 'react';
import { StyleSheet, View } from 'react-native';
import MoodsQuiz from '../../components/MoodQuiz';

export default function TabAnimalScreen() {
  return (
    <View style={styles.container}>
      <MoodsQuiz />
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
