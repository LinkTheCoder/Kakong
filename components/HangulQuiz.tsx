import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import hangulData from '../data/hangul.json';

interface HangulQuestion {
  hangul_letter: string;
  answer: string;
  options: string[];
}

export default function HangulQuiz() {
  const [questions, setQuestions] = useState<HangulQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [results, setResults] = useState<{ hangulLetter: string; chosenAnswer: string; correctAnswer: string }[]>([]);

  useEffect(() => {
    setQuestions(hangulData.questions);
  }, []);

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;
    const result = {
      hangulLetter: currentQuestion.hangul_letter,
      chosenAnswer: selectedAnswer,
      correctAnswer: currentQuestion.answer
    };
    setResults([...results, result]);
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setResults([]);
  };

  const renderOptions = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return currentQuestion.options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={styles.optionButton}
        onPress={() => handleAnswer(option)}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  const renderQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      return (
        <View>
          <Text style={styles.questionText}>{currentQuestion.hangul_letter}</Text>
          <View style={styles.optionsContainer}>{renderOptions()}</View>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.scoreText}>Quiz Finished!</Text>
          <Text style={styles.scoreText}>Your Score: {score}/{questions.length}</Text>
          {results.map((result, index) => (
            <Text key={index} style={styles.resultText}>
              {result.hangulLetter} = {result.chosenAnswer} {result.chosenAnswer === result.correctAnswer ? '✅' : '❌'}
            </Text>
          ))}
          <Button title="Restart Quiz" onPress={restartQuiz} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.quizContainer}>
        {renderQuestion()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizContainer: {
    alignItems: 'center',
  },
  questionText: {
    fontSize: 80,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  optionButton: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
});
