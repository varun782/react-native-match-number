# React Native Number Match Game

## Overview
This project is a number-matching puzzle game built with React Native. Players will match numbers based on specific rules across three distinct levels, each with increasing difficulty. The game features a countdown timer, score tracking, and a visually appealing theme.

## Setup
To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-native-number-match
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```
   Then, follow the instructions to run the app on your desired platform (iOS or Android).

## Game Structure
The game consists of three levels, each with unique configurations:

- **Level 1:** Basic matching rules with a smaller grid size.
- **Level 2:** Increased grid size and more complex matching rules.
- **Level 3:** The most challenging level with the largest grid and additional obstacles.

## Architecture
The project is organized into the following main directories:

- **src/components:** Contains reusable components such as Grid, Cell, Timer, Score, Header, and LevelSelector.
- **src/screens:** Contains the main screens for the game, including HomeScreen and individual level screens.
- **src/navigation:** Manages the navigation between different screens of the app.
- **src/game:** Contains the core game mechanics, level configurations, and theme settings.
- **src/hooks:** Custom hooks for managing game logic, such as timers.
- **src/utils:** Utility functions for various tasks.
- **src/styles:** Contains styling files to ensure a consistent look and feel.

## Game Rules
- Players must match numbers that are either equal or sum to a specific target (e.g., 10).
- Each level has a countdown timer, and players must make matches before time runs out.
- The score increases with each successful match, and players can track their progress on the Score component.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or features you would like to add.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.