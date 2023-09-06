// AttemptsLeft.js
// This component displays the number of attempts left in the Hangman game.

// Import the React library to create a React component.
import React from "react";

// Define the AttemptsLeft functional component that accepts a prop called 'attemptsLeft'.
const AttemptsLeft = ({ attemptsLeft }) => {
  // Return JSX to render the component's content.
  return (
    <div className="attempts-left">
      {/* Display "Attempts Left: " in bold text followed by the value of 'attemptsLeft'. */}
      <b>Attempts Left:</b>
      {attemptsLeft}
    </div>
  );
};

// Export the AttemptsLeft component as the default export of this module.
export default AttemptsLeft;
