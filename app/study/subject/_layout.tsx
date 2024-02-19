import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TopicGrammar() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Korean Subject Marking Particles {'\n'}이/가{'\n'}</Text>

        <Text style={styles.explanation}>
          In Korean, subject marking particles are crucial components that designate the subject of a sentence.{'\n\n'} 
          Two primary subject marking particles are "이" (i) and "가" (ga).{'\n\n'}
          Mastering their usage is fundamental for constructing coherent and accurate sentences.{'\n\n'}
        </Text>
        
        <Text style={styles.subtitle}>이/가</Text>
        <Text style={styles.explanation}>
          The particles "이" (i) and "가" (ga) are utilized to denote the subject of a sentence.{'\n\n'}
          The selection between "이" (i) and "가" (ga) depends on the final consonant or the absence of a final consonant in the preceding word.{'\n\n'}
          Use "이" (i) after words ending in a consonant or an empty consonant slot and "가" (ga) after words ending in a vowel.{'\n'}
        </Text>
        <Text style={styles.example}>Ex: 나는 학생이에요. {'\n'}(I'm a student.){'\n\n'}</Text>
        
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
