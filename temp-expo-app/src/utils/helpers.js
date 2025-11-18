import { Alert } from 'react-native';

export function generateRandomNumber(min = 1, max = 9) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateInitialGrid(rows, cols) {
  const cells = [];
  const totalCells = rows * cols;
  for (let i = 0; i < totalCells; i++) {
    const value = Math.random() < 0.7 ? generateRandomNumber() : null;
    cells.push({ id: i, value: value, matched: false });
  }
  return cells;
}

export function showAlert(message) {
  Alert.alert('Notice', message);
}