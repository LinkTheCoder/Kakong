import { ScrollView, StyleSheet } from 'react-native';
import HangulAlphabet from '../../data/hangul-alphabet.json'; // Assuming the file is in the same directory

import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  // Splitting consonants and vowels into two arrays
  const consonants = Object.entries(HangulAlphabet.consonants);
  const vowels = Object.entries(HangulAlphabet.vowels);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Hangul Alphabet</Text>

        <Text style={styles.explanation}>
          Hangul, the Korean alphabet, is a phonetic writing system created in the 15th century.{'\n\n'}
          It consists of 14 consonants and 10 vowels, which are combined to form syllabic blocks representing sounds.{'\n\n'}
          Hangul is known for its simplicity and logical structure.{'\n\n'}
        </Text>
        
        <Text style={styles.subtitle}>Consonants</Text>
        <View style={styles.rowContainer}>
          <View style={styles.column}>
            {consonants.slice(0, Math.ceil(consonants.length / 2)).map(([character, pronunciation]) => (
              <Text key={character} style={styles.alphabet}>
                {character}: {pronunciation}
              </Text>
            ))}
          </View>
          <View style={styles.column}>
            {consonants.slice(Math.ceil(consonants.length / 2)).map(([character, pronunciation]) => (
              <Text key={character} style={styles.alphabet}>
                {character}: {pronunciation}
              </Text>
            ))}
          </View>
        </View>
        <Text style={styles.subtitle}>Vowels</Text>
        <View style={styles.rowContainer}>
          <View style={styles.column}>
            {vowels.slice(0, Math.ceil(vowels.length / 2)).map(([character, pronunciation]) => (
              <Text key={character} style={styles.alphabet}>
                {character}: {pronunciation}
              </Text>
            ))}
          </View>
          <View style={styles.column}>
            {vowels.slice(Math.ceil(vowels.length / 2)).map(([character, pronunciation]) => (
              <Text key={character} style={styles.alphabet}>
                {character}: {pronunciation}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
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
    explanation: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      textDecorationLine: 'underline', 
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 10,
    },
    column: {
      flex: 1,
      paddingHorizontal: 10,
    },
    alphabet: {
      fontSize: 16,
      marginTop: 5,
      textAlign: 'center', // Center align the text within the column
    },
  });