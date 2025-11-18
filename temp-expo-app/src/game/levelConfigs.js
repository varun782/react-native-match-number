const levelConfigs = {
  level1: {
    gridRows: 4,
    gridCols: 4,
    numberCount: 8, // Total unique numbers
    maxMatches: 8, // Total matches to win
    timeLimit: 120, // Time limit in seconds
    maxExtraRows: 2, // allow adding up to 2 extra rows in level 1
  },
  level2: {
    gridRows: 5,
    gridCols: 5,
    numberCount: 12, // Total unique numbers
    maxMatches: 12, // Total matches to win
    timeLimit: 90, // Time limit in seconds
    maxExtraRows: 3, // allow adding up to 3 extra rows in level 2
  },
  level3: {
    gridRows: 6,
    gridCols: 6,
    numberCount: 18, // Total unique numbers
    maxMatches: 18, // Total matches to win
    timeLimit: 60, // Time limit in seconds
    maxExtraRows: 4, // allow adding up to 4 extra rows in level 3
  },
};

export default levelConfigs;