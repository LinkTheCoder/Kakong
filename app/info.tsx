import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>CREATED BY</Text>

        <Link href="https://github.com/LinkTheCoder" style={styles.link}>
          <Text style={styles.linkText}>@LinkTheDev</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'lightgreen',
  },
});
