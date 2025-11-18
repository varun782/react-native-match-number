import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Cell = ({ value, onPress, isMatched, isSelected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isMatched}
      style={[
        styles.cell,
        isMatched ? styles.matchedCell : null,
        isSelected ? styles.selectedCell : null,
      ]}
    >
      <Text style={[styles.cellText, isMatched ? styles.matchedText : null]}>
        {value !== null ? value : ''}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 75,
    height: 75,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  matchedCell: {
    backgroundColor: '#ccc',
  },
  matchedText: {
    color: '#999',
  },
  selectedCell: {
    borderWidth: 3,
    borderColor: '#4a90e2',
  },
});

export default Cell;