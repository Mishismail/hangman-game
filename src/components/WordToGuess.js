// WordToGuess.js
// This component displays the word to be guessed in the Hangman game, with guessed letters revealed.

// Import the React library to create a React component.
import React from "react";

// Define the WordToGuess functional component that accepts 'wordToGuess' and 'guessedWord' props.
const WordToGuess = ({ wordToGuess, guessedWord }) => {
  return (
    <div className="word-to-guess">
      {/* Map through each letter in the 'wordToGuess' and display it as a span */}
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="letter">
          {/* Display the letter if it has been guessed, otherwise display an underscore */}
          {guessedWord.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

// Export the WordToGuess component as the default export of this module.
export default WordToGuess;
