# Hangman Game

## Introduction

This Hangman game is a simple React-based web application that allows users to play the classic word-guessing game. The objective of the game is to guess a hidden word by suggesting letters. Players have a limited number of attempts to guess the word correctly, and each incorrect guess results in the display of a hangman image. The game also features a hint system to provide players with clues to the hidden word.

## Features

- Randomly selects a word from a predefined list for players to guess.
- Displays a hangman image that progresses with each incorrect guess.
- Provides a hint system to give players clues about the hidden word.
- Keeps track of the player's score and streak.
- Allows players to restart the game with a new word.
- Offers a help modal with game rules for reference.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Bootstrap: A library of Bootstrap components adapted for React.
- CSS: Custom styles for the game interface.

## Installation and Usage

1. Clone the repository to your local machine:
   git clone https://github.com/Mishismail/hangman-game.git


2. Navigate to the project directory:
   cd hangman-game


3. Install the required dependencies:
   npm install


4. Start the development server:
   npm start

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to play the Hangman game.


## How to Play

1. The game will randomly select a word from its predefined list.

2. You need to guess the word by suggesting letters one at a time.

3. Each correct guess will reveal the positions of the correctly guessed letters in the word.

4. Each incorrect guess will reduce your remaining attempts and display a hangman image.

5. You can use the "Hint" button to receive a clue about one of the letters in the word.

6. Try to guess the entire word before running out of attempts to win the game.

7. You can restart the game with a new word at any time by clicking the "Restart" button.

## Game Rules

- One player thinks of a word, and the other tries to guess it by suggesting letters.
- Each incorrect guess brings you closer to being "hanged."

## Author

- Mishka (https://github.com/Mishismail)
