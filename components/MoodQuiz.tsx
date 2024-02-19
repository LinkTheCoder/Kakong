import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import moodData from '../data/moods.json';

interface MoodQuestion {
  emoji: string;
  answer: string;
  options: string[];
}

export default function MoodQuiz() {
  const [questions, setQuestions] = useState<MoodQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [results, setResults] = useState<{ question: string; chosenAnswer: string; correctAnswer: string }[]>([]);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  useEffect(() => {
    initializeQuiz();
  }, []);

  const initializeQuiz = () => {
    const randomizedQuestions = getRandomQuestions(moodData.questions, 5);
    setQuestions(randomizedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setResults([]);
    setQuizCompleted(false);
  };

  const getRandomQuestions = (questions: MoodQuestion[], count: number) => {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, count);
  };

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;
    const result = {
      question: currentQuestion.emoji,
      chosenAnswer: selectedAnswer,
      correctAnswer: currentQuestion.answer
    };
    setResults([...results, result]);
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
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
    if (!quizCompleted && questions.length > 0) {
      const currentQuestion = questions[currentQuestionIndex];
      return (
        <View>
          <Text style={styles.questionText}>{currentQuestion.emoji}</Text>
          <View style={styles.optionsContainer}>{renderOptions()}</View>
        </View>
      );
    } else if (quizCompleted) {
      return (
        <View>
          <Text style={styles.scoreText}>Quiz Finished!</Text>
          <Text style={styles.scoreText}>Your Score: {score}/{questions.length}</Text>
          {results.map((result, index) => (
            <Text key={index} style={styles.resultText}>
              {result.question} = {result.chosenAnswer} {result.chosenAnswer === result.correctAnswer ? '✅' : '❌'}
            </Text>
          ))}
          <View style={styles.buttonContainer}>
            <Button title="Restart Quiz" onPress={initializeQuiz} />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Loading...</Text>
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
    fontSize: 50,
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
    color: 'white',
  },
  buttonContainer: {
    marginTop: 20, // Add more space above the button
  },
});
