import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const levels = [
  { id: 1, title: 'Level 1', description: 'Easy level with fewer cells.' },
  { id: 2, title: 'Level 2', description: 'Medium level with moderate difficulty.' },
  { id: 3, title: 'Level 3', description: 'Hard level with more cells and complex matching.' },
];

const LevelSelector = ({ onSelectLevel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Level</Text>
      {levels.map(level => (
        <TouchableOpacity
          key={level.id}
          style={styles.levelButton}
          onPress={() => onSelectLevel(level.id)}
        >
          <Text style={styles.levelText}>{level.title}</Text>
          <Text style={styles.levelDescription}>{level.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  levelButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  levelText: {
    color: 'white',
    fontSize: 18,
  },
  levelDescription: {
    color: '#fff',
    fontSize: 14,
  },
});

export default LevelSelector;