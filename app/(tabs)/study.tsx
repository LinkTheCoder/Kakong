import React from 'react';
import { StyleSheet, View } from 'react-native';
import Study from '../../components/Study';

export default function TabStudyScreen() {
  return (
    <View style={styles.container}>
      <Study />
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
