## Project Description
This project is a simple **Tic-Tac-Toe game** built using **HTML, CSS, and JavaScript**. It is a two-player game where players take turns marking spaces in a 3×3 grid using **X** and **O**. The game automatically checks for a winner or a draw and displays the result.

## Features
* Two-player gameplay (Player X and Player O)
* Interactive 3×3 game board
* Automatic winner detection
* Draw condition detection
* Reset game option
* New game option after result
* Simple and responsive design

## Technologies Used
* HTML (for structure)
* CSS (for styling and layout)
* JavaScript (for game logic and interactivity)

## How to Play
1. The game starts with Player **X**.
2. Players take turns clicking on empty boxes.
3. Each click marks the box with **X** or **O**.
4. The game checks after every move:
   * If a player has won
   * If the game is a draw
5. The winner or draw message is displayed on screen.
   
## Game Controls
* **Reset Game** → Clears the board and restarts the game
* **New Game** → Starts a fresh game after result
  
## Game Logic
* The game stores all winning patterns (rows, columns, diagonals).
* After each move, it compares the selected boxes with winning patterns.
* If all boxes are filled and no winner is found, it declares a **draw**.

## Project Structure
* Game layout and buttons
* Styling for board and UI
* JavaScript logic for gameplay

## Future Improvements
* Add single-player mode (AI)
* Add score tracking
* Improve UI with animations
* Add sound effects

## Conclusion
This project is a beginner-friendly implementation of a classic game. It helps in understanding **DOM manipulation, event handling, and basic game logic** in JavaScript.
