import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const Grid = ({ gridData, cells, grid, onCellPress, onMatch, selectedId }) => {
  const data = gridData || cells || grid || [];
  const handler = onCellPress || onMatch;

  return (
    <View style={styles.grid}>
      {data.map((cell) => (
        <Cell
          key={cell.id}
          value={cell.value}
          isMatched={cell.matched}
          isSelected={selectedId === cell.id}
          onPress={() => handler && handler(cell.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
  },
});

export default Grid;