import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [numberToGuess, setNumberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    if (isNaN(guessNumber)) {
      Alert.alert('Invalid input', 'Please enter a valid number');
      return;
    }

    if (guessNumber < numberToGuess) {
      setFeedback('lower!');
    } else if (guessNumber > numberToGuess) {
      setFeedback('higher!');
    } else {
      setFeedback('Correct!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your guess"
        keyboardType="numeric"
        value={guess}
        onChangeText={text => setGuess(text)}
      />
      <Button title="Submit Guess" onPress={handleGuess} />
      {feedback !== '' && <Text style={styles.feedback}>{feedback}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
    width: '80%',
  },
  feedback: {
    marginTop: 16,
    fontSize: 18,
  },
});
