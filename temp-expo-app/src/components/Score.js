import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Score = ({ score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#4a90e2',
    borderRadius: 5,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Score;