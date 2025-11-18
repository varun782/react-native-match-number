import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import Grid from '../components/Grid';
import Timer from '../components/Timer';
import Score from '../components/Score';
import levelConfigs from '../game/levelConfigs';
import useTimer from '../hooks/useTimer';

export default function Level3Screen({ navigation }) {
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState([]);
  const config = levelConfigs.level3;
  const { timeLeft, startTimer, resetTimer } = useTimer(config.timeLimit);

  useEffect(() => {
    setGrid(generateInitialGrid(config));
    startTimer();
    return () => resetTimer();
  }, []);

  const generateInitialGrid = (cfg) => {
    const cells = [];
    for (let i = 0; i < cfg.gridRows * cfg.gridCols; i++) {
      const value = Math.floor(Math.random() * 9) + 1;
      cells.push({ id: i, value, matched: false });
    }
    return cells;
  };

  const [selectedId, setSelectedId] = useState(null);
  const [extraRows, setExtraRows] = useState(0);

  const addRow = () => {
    if (extraRows >= (config.maxExtraRows || 0)) {
      Alert.alert('Limit reached', 'You cannot add more rows for this level');
      return;
    }

    const startId = grid.length;
    const newCells = [];
    for (let i = 0; i < config.gridCols; i++) {
      newCells.push({ id: startId + i, value: Math.floor(Math.random() * 9) + 1, matched: false });
    }

    setGrid(prev => [...prev, ...newCells]);
    setExtraRows(prev => prev + 1);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeUp();
    }
  }, [timeLeft]);

  const handleTimeUp = () => {
    Alert.alert('Time up!', `Your score: ${score}`);
    navigation.navigate('Home');
  };

  const handleMatch = (cell1, cell2) => {
    if (!cell1 || !cell2) return;
    if (cell1.value === cell2.value || cell1.value + cell2.value === 10) {
      setScore(prev => prev + 1);
      setGrid(prevGrid => prevGrid.map(c =>
        c.id === cell1.id || c.id === cell2.id ? { ...c, matched: true } : c
      ));
    } else {
      Alert.alert('No Match', 'Try again!');
    }
  };

  const onCellPress = (id) => {
    const cell = grid.find(c => c.id === id);
    if (!cell || cell.matched) return;

    if (selectedId == null) {
      setSelectedId(id);
      return;
    }

    if (selectedId === id) {
      setSelectedId(null);
      return;
    }

    const firstCell = grid.find(c => c.id === selectedId);
    const secondCell = cell;
    setSelectedId(null);
    handleMatch(firstCell, secondCell);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Level 3</Text>
      <Score score={score} />
      <Timer timeLeft={timeLeft} onTimeUp={handleTimeUp} />
      <TouchableOpacity
        onPress={addRow}
        style={[styles.addButton, extraRows >= (config.maxExtraRows || 0) ? styles.addButtonDisabled : null]}
      >
        <Text style={styles.addButtonText}>Add Row ({extraRows}/{config.maxExtraRows})</Text>
      </TouchableOpacity>
      <Grid grid={grid} onCellPress={onCellPress} selectedId={selectedId} />
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginBottom: 12,
  },
  addButtonDisabled: {
    backgroundColor: '#aaa',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});