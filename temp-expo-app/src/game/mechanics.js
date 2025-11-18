import { generateRandomNumber } from '../utils/helpers';

export const matchCells = (firstCell, secondCell) => {
  if (!firstCell || !secondCell) return false;
  if (firstCell.matched || secondCell.matched) return false;
  if (firstCell.value === null || secondCell.value === null) return false;

  return (
    firstCell.value === secondCell.value || firstCell.value + secondCell.value === 10
  );
};

export const createGrid = (rows, cols) => {
  const cells = [];
  const totalCells = rows * cols;

  for (let i = 0; i < totalCells; i++) {
    const value = Math.random() < 0.7 ? generateRandomNumber() : null;
    cells.push({ id: i, value: value, matched: false });
  }

  return cells;
};

export const resetGrid = (grid) => {
  return grid.map(cell => ({ ...cell, matched: false }));
};