import React from 'react';
import { StyleSheet, View } from 'react-native';
import HangulQuiz from '../../components/HangulQuiz';

export default function TabHangulScreen() {
  return (
    <View style={styles.container}>
      <HangulQuiz />
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
