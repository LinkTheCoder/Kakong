import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TopicGrammar() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Korean Location Particles {'\n'}에/에서{'\n'}</Text>

        <Text style={styles.explanation}>
          In Korean, location particles are essential for indicating the location or direction of an action or event.{'\n\n'} 
          Two commonly used location particles are "에" (e) and "에서" (eseo).{'\n\n'}
          Understanding when to use them correctly is crucial for conveying precise meaning.{'\n\n'}
        </Text>
        
        <Text style={styles.subtitle}>에</Text>
        <Text style={styles.explanation}>
          The particle "에" (e) is used to indicate a specific location where an action takes place or an event occurs.{'\n\n'}
          It's also used to indicate the direction of movement towards a location.{'\n'}
        </Text>
        <Text style={styles.example}>Ex: 학교에 갔어요. {'\n'}(I went to school.){'\n\n'}</Text>
        
        <Text style={styles.subtitle}>에서</Text>
        <Text style={styles.explanation}>
          The particle "에서" (eseo) is used to denote the location where an action originates, starts, or is in progress.{'\n\n'}
          It also signifies the source or starting point of movement or action.{'\n'}
        </Text>
        <Text style={styles.example}>Ex: 집에서 일해요. {'\n'}(I work at home.) {'\n\n'}</Text>
        
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
      textAlign: 'left',
      marginVertical: 5,
      color: 'lightgreen',
    },
});
