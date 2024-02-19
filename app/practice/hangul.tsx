import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HangulQuiz from '../../components/HangulQuiz';

export default function TabHangulScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <HangulQuiz />
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
