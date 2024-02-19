import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Practice from '../../components/Practice';

export default function TabStudyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Practice />
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
