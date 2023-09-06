// Keyboard.js
// This component represents the keyboard used for guessing letters in the Hangman game.

// Import necessary modules and components
import React from "react";
import { Button } from "react-bootstrap";

// Define the Keyboard functional component, which accepts a 'handleGuess' prop
const Keyboard = ({ handleGuess }) => {
  // Define the layout of the QWERTY keyboard
  const qwertyLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="keyboard">
      {qwertyLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => (
            <Button
              key={letter}
              onClick={() => handleGuess(letter)}
              variant="outline-warning" // Set the button style here
              disabled={false} // Add a condition to disable the button if it's already guessed
            >
              {letter}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

// Export the Keyboard component as the default export of this module
export default Keyboard;

