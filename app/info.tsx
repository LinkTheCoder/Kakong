import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

// Define the version number
const version = '1.0.0';

export default function ModalScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Kakong [카공]</Text>
        {/* Render the version number */}
        <Text style={styles.subtitle}>Version {version}</Text>

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
  subtitle: {
    fontSize: 16,
    marginBottom: 10, // Add some spacing between title and subtitle
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'lightgreen',
  },
});
