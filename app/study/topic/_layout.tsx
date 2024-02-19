import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TopicGrammar() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Korean Topic Particles {'\n'}는/은 & 를/을{'\n'}</Text>

        <Text style={styles.explanation}>
          In Korean, particles are essential elements that attach to nouns and other parts of speech to indicate grammatical relationships.{'\n\n'} 
          Two commonly used particles are "는/은" (neun/eun) and "를/을" (reul/eul).{'\n\n'}
          Understanding when to use them correctly is crucial for constructing meaningful sentences.{'\n\n'}
        </Text>
        
        <Text style={styles.subtitle}>는/은 (neun/eun)</Text>
        <Text style={styles.explanation}>
          The particles "는" (neun) and "은" (eun) are used to mark the topic or the subject of a sentence.{'\n\n'}
          Which one you use depends on the ending consonant of the preceding word.{'\n\n'}
          Use "는" (neun) after words ending in a consonant and "은" (eun) after words ending in a vowel.{'\n'}
        </Text>
        <Text style={styles.example}>Ex: 저는 한국 사람입니다. {'\n'}(I'm a korean.) {'\n\n'}</Text>
        
        <Text style={styles.subtitle}>를/을 (reul/eul)</Text>
        <Text style={styles.explanation}>
          The particles "를" (reul) and "을" (eul) are used to mark the object of a sentence, specifically the direct object.{'\n\n'}
          Similar to "는/은", the choice between "를" (reul) and "을" (eul) depends on the preceding word's ending sound.{'\n\n'}
          Use "를" (reul) after words ending in a consonant and "을" (eul) after words ending in a vowel.{'\n'}
        </Text>
        <Text style={styles.example}>Ex: 사과를 먹었습니다. {'\n'}(I ate an apple.){'\n\n'}</Text>
        
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
      textAlign: 'center',
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
    example: {
      fontSize: 20,
      textAlign: 'center',
      marginVertical: 5,
      color: 'lightgreen',
    },
});
