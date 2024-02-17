import React from 'react';
import { StyleSheet, View } from 'react-native';
import Practice from '../../components/Practice';

export default function TabStudyScreen() {
  return (
    <View style={styles.container}>
      <Practice />
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
