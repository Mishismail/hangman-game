// Import necessary modules and components
import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, ProgressBar } from "react-bootstrap";
import WordToGuess from "./components/WordToGuess";
import AttemptsLeft from "./components/AttemptsLeft";
import Keyboard from "./components/Keyboard";
import KirbyHangman from './images/KirbyHangman.png'; // Replace with the actual path
import hangman1 from "./images/Hangman1.jpeg";
import hangman2 from "./images/Hangman2.jpeg";
import hangman3 from "./images/Hangman3.jpeg";
import hangman4 from "./images/Hangman4.jpeg";
import hangman5 from "./images/Hangman5.jpeg";
import hangman6 from "./images/Hangman6.jpeg";
import hangman7 from "./images/Hangman7.jpeg";
import hangman8 from "./images/Hangman8.jpeg";
import hangman9 from "./images/Hangman9.jpeg";
import hangman10 from "./images/Hangman10.jpeg";
import "./App.css"; // Custom CSS for styling

// Create a HangmanGame class component
class HangmanGame extends Component {
  constructor(props) {
    super(props);

    // Define an array of words for the game
    const words = [
      "REACT",
      "ADJUSTABLE",
      "BEREAVED",
      "CALLIGRAPHIC",
      "LEADER",
      "PALLBEARER",
      "BOOTSTRAP",
      "WEAPON",
      "WINGMAN",
      "HANGMAN",
      "REDUX",
      "NATIONALITY",
      "COMPONENT",
      "GITHUB",
    ];

    // Randomly select a word from the array
    const randomWord = words[Math.floor(Math.random() * words.length)];

    // Initialize guessedWord with underscores representing the word to guess
    const guessedWord = Array(randomWord.length).fill("_");

    // Initialize the component's state
    this.state = {
      wordToGuess: randomWord,
      guessedWord: guessedWord,
      attemptsLeft: 9,
      gameStatus: "playing",
      showHelpModal: false,
      score: 0,
      hint: [],
      streak: 0,
      gameResult: null,
    };
  }

  // Function to generate a hint for the player
  generateHint = () => {
    const { wordToGuess, guessedWord } = this.state;
    const remainingLetters = wordToGuess.split("").filter((char, index) =>
      guessedWord[index] === "_"
    );

    if (remainingLetters.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingLetters.length);
      const randomLetter = remainingLetters[randomIndex];
      const hintWord = guessedWord.map((char, index) =>
        char === "_" && wordToGuess[index] === randomLetter ? randomLetter : char
      );

      this.setState({ hint: hintWord });
    }
  };

  // Function to increment the player's streak
  incrementStreak = () => {
    this.setState((prevState) => ({
      streak: prevState.streak + 1,
    }));
  };

  // Function to handle the player's guess
  handleGuess = (letter) => {
    const { wordToGuess, guessedWord, attemptsLeft } = this.state;

    if (attemptsLeft === 0 || guessedWord.includes(letter)) {
      // If the game is already won or lost, or the letter has already been guessed, do nothing.
      return;
    }

    // Check if the guessed letter is in the word
    if (wordToGuess.includes(letter)) {
      // Update the guessed word with the correctly guessed letter(s)
      const newGuessedWord = wordToGuess.split("").map((char, index) =>
        guessedWord[index] === "_" && char === letter ? letter : guessedWord[index]
      );

    this.setState({ guessedWord: newGuessedWord });

      // Check if the player has guessed the entire word
      if (newGuessedWord.join("") === wordToGuess) {
        this.setState({ gameStatus: "won", gameResult: "won" }); // Set game result to "won"
        this.incrementStreak();
      }
    } else {
      // Decrement attempts left if the guessed letter is not in the word
      this.setState({ attemptsLeft: attemptsLeft - 1 });

      // Check if the player has run out of attempts
      if (attemptsLeft - 1 === 0) {
        this.setState({ gameStatus: "lost", streak: 0, gameResult: "lost" }); // Set game result to "lost"
      }
    }
  };

  // Function to restart the game
  // Function to restart the game with a new random word
restartGame = () => {
  // Define your array of words
  const words = [
    "REACT",
    "ADJUSTABLE",
    "BEREAVED",
    "CALLIGRAPHIC",
    "LEADER",
    "PALLBEARER",
    "BOOTSTRAP",
    "WEAPON",
    "WINGMAN",
    "HANGMAN",
    "REDUX",
    "NATIONALITY",
    "COMPONENT",
    "GITHUB",
  ];

  // Randomly select a new word from the array
  const randomWord = words[Math.floor(Math.random() * words.length)];

  // Reset the guessedWord and attemptsLeft when restarting the game
  const guessedWord = Array(randomWord.length).fill("_");

  this.setState({
    wordToGuess: randomWord,
    guessedWord: guessedWord,
    attemptsLeft: 9,
    gameStatus: "playing",
  });
};


  render() {
    const { wordToGuess, guessedWord, attemptsLeft, gameStatus, score, hint, gameResult } = this.state;

    // Determine which Hangman image to display based on attempts left
    const hangmanImages = [
      hangman1,
      hangman2,
      hangman3,
      hangman4,
      hangman5,
      hangman6,
      hangman7,
      hangman8,
      hangman9,
      hangman10,
    ];

    return (
      <Container className="text-center mt-5">
        <Row>
          <Col xs={12} md={6} className="order-md-2">
            <img
              src={hangmanImages[9 - attemptsLeft]}
              alt={`Hangman ${9 - attemptsLeft}`}
              className="hangman-image"
            />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <header className="header">
              <img src={KirbyHangman} alt="Kirby Logo" className="kirby-logo" />
            </header>
            <WordToGuess wordToGuess={wordToGuess} guessedWord={guessedWord} />
            <AttemptsLeft attemptsLeft={attemptsLeft} />
            <div className="game-status">
              {gameStatus === "playing" && (
                <Row className="justify-content-between align-items-center">
                  <Col md={6}>
                    <ProgressBar now={this.state.streak} label={`Score: ${score}%`} />
                  </Col>
                  {/* Hint Section */}
                  <Col md={6}>
                    <span className="streak">Streak: {this.state.streak}</span>
                    {hint && (
                      <div className="hint">
                        {hint.join(" ")}
                      </div>
                    )}
                    <Row className="mt-4 justify-content-center">
                      <Col xs={12} md={6}>
                      <div className="mb-3"> {/* Add margin-bottom to create space */}
                      <Button variant="danger" onClick={this.generateHint} className="hint-button">
                        Hint
                      </Button>
                      </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )}
              <Keyboard handleGuess={this.handleGuess} />
              {gameStatus === "won" ? "You won!" : gameStatus === "lost" ? "You lost!" : ""}
              {/* Display happy or sad animation based on game result */}
            <div className={`result-animation ${gameResult === "won" ? "happy-animation" : gameResult === "lost" ? "sad-animation" : ""}`}>
              {gameResult === "won" ? "😄" : gameResult === "lost" ? "😢" : ""}
            </div>
            </div>
            <Button variant="primary" onClick={this.restartGame} className="mt-3">
              Restart
            </Button>
            <Button
              variant="info"
              onClick={() => this.setState({ showHelpModal: true })}
              className="mt-3"
            >
              Help
            </Button>
          </Col>
        </Row>
        {/* HelpModal component */}
        <HelpModal
          show={this.state.showHelpModal}
          handleClose={() => this.setState({ showHelpModal: false })}
        />
      </Container>
    );
  }
}
// App.js

// Import necessary modules and components
import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, ProgressBar } from "react-bootstrap";
import WordToGuess from "./components/WordToGuess";
import AttemptsLeft from "./components/AttemptsLeft";
import Keyboard from "./components/Keyboard";
import KirbyHangman from './images/KirbyHangman.png'; // Replace with the actual path
import hangman0 from "./images/Hangman0.jpeg";
import hangman1 from "./images/Hangman1.jpeg";
import hangman2 from "./images/Hangman2.jpeg";
import hangman3 from "./images/Hangman3.jpeg";
import hangman4 from "./images/Hangman4.jpeg";
import hangman5 from "./images/Hangman5.jpeg";
import hangman6 from "./images/Hangman6.jpeg";
import hangman7 from "./images/Hangman7.jpeg";
import hangman8 from "./images/Hangman8.jpeg";
import hangman9 from "./images/Hangman9.jpeg";
import hangman10 from "./images/Hangman10.jpeg";
import "./App.css"; // Custom CSS for styling

// Create a HangmanGame class component
class HangmanGame extends Component {
  constructor(props) {
    super(props);

    // Define an array of words for the game
    const words = [
      "REACT",
      "ADJUSTABLE",
      "BEREAVED",
      "CALLIGRAPHIC",
      "LEADER",
      "PALLBEARER",
      "BOOTSTRAP",
      "WEAPON",
      "WINGMAN",
      "HANGMAN",
      "REDUX",
      "NATIONALITY",
      "COMPONENT",
      "GITHUB",
    ];

    // Randomly select a word from the array
    const randomWord = words[Math.floor(Math.random() * words.length)];

    // Initialize guessedWord with underscores representing the word to guess
    const guessedWord = Array(randomWord.length).fill("_");

    // Initialize the component's state
    this.state = {
      wordToGuess: randomWord,
      guessedWord: guessedWord,
      attemptsLeft: 9,
      gameStatus: "playing",
      showHelpModal: false,
      score: 0,
      hint: [],
      streak: 0,
    };
  }

  // Function to generate a hint for the player
  generateHint = () => {
    const { wordToGuess, guessedWord } = this.state;
    const remainingLetters = wordToGuess.split("").filter((char, index) =>
      guessedWord[index] === "_"
    );

    if (remainingLetters.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingLetters.length);
      const randomLetter = remainingLetters[randomIndex];
      const hintWord = guessedWord.map((char, index) =>
        char === "_" && wordToGuess[index] === randomLetter ? randomLetter : char
      );

      this.setState({ hint: hintWord });
    }
  };

  // Function to increment the player's streak
  incrementStreak = () => {
    this.setState((prevState) => ({
      streak: prevState.streak + 1,
    }));
  };

  // Function to handle the player's guess
  handleGuess = (letter) => {
    const { wordToGuess, guessedWord, attemptsLeft } = this.state;

    if (attemptsLeft === 0 || guessedWord.includes(letter)) {
      // If the game is already won or lost, or the letter has already been guessed, do nothing.
      return;
    }

    // Check if the guessed letter is in the word
    if (wordToGuess.includes(letter)) {
      // Update the guessed word with the correctly guessed letter(s)
      const newGuessedWord = wordToGuess.split("").map((char, index) =>
        guessedWord[index] === "_" && char === letter ? letter : guessedWord[index]
      );

      this.setState({ guessedWord: newGuessedWord });

      // Check if the player has guessed the entire word
      if (newGuessedWord.join("") === wordToGuess) {
        this.setState({ gameStatus: "won" });
        this.incrementStreak(); // Increment the streak
      }
    } else {
      // Decrement attempts left if the guessed letter is not in the word
      this.setState({ attemptsLeft: attemptsLeft - 1 });

      // Check if the player has run out of attempts
      if (attemptsLeft - 1 === 0) {
        this.setState({ gameStatus: "lost", streak: 0 }); // Reset the streak when the player loses
      }
    }
  };

  // Function to restart the game
  restartGame = () => {
    const { wordToGuess } = this.state;
    // Reset the guessedWord and attemptsLeft when restarting the game
    const guessedWord = Array(wordToGuess.length).fill("_");

    this.setState({
      guessedWord: guessedWord,
      attemptsLeft: 9,
      gameStatus: "playing",
    });
  };

  render() {
    const { wordToGuess, guessedWord, attemptsLeft, gameStatus, score, hint } = this.state;

    // Determine which Hangman image to display based on attempts left
    const hangmanImages = [
      hangman0,
      hangman1,
      hangman2,
      hangman3,
      hangman4,
      hangman5,
      hangman6,
      hangman7,
      hangman8,
      hangman9,
      hangman10,
    ];

    return (
      <Container className="text-center mt-5">
        <Row>
          <Col xs={12} md={6} className="order-md-2">
            <img
              src={hangmanImages[9 - attemptsLeft]}
              alt={`Hangman ${9 - attemptsLeft}`}
              className="hangman-image"
            />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <header className="header">
              <img src={KirbyHangman} alt="Kirby Logo" className="kirby-logo" />
            </header>
            <WordToGuess wordToGuess={wordToGuess} guessedWord={guessedWord} />
            <AttemptsLeft attemptsLeft={attemptsLeft} />
            <div className="game-status">
              {gameStatus === "playing" && (
                <Row className="justify-content-between align-items-center">
                  <Col md={6}>
                    <ProgressBar now={this.state.streak} label={`Score: ${score}%`} />
                  </Col>
                  {/* Hint Section */}
                  <Col md={6}>
                    <span className="streak">Streak: {this.state.streak}</span>
                    {hint && (
                      <div className="hint">
                        {hint.join(" ")}
                      </div>
                    )}
                    <Row className="mt-4 justify-content-center">
                      <Col xs={12} md={6}>
                        <Button variant="danger" onClick={this.generateHint} className="hint-button">
                          Hint
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )}
              <Keyboard handleGuess={this.handleGuess} />
              {gameStatus === "won" ? "You won!" : gameStatus === "lost" ? "You lost!" : ""}
            </div>
            <Button variant="primary" onClick={this.restartGame} className="mt-3">
              Restart
            </Button>
            <Button
              variant="info"
              onClick={() => this.setState({ showHelpModal: true })}
              className="mt-3"
            >
              Help
            </Button>
          </Col>
        </Row>
        {/* HelpModal component */}
        <HelpModal
          show={this.state.showHelpModal}
          handleClose={() => this.setState({ showHelpModal: false })}
        />
      </Container>
    );
  }
}

// HelpModal component to display game rules
const HelpModal = ({ show, handleClose }) => {
// HelpModal component to display game rules
const HelpModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Game Rules</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Game Rules</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          One player thinks of a word and the other tries to guess it by guessing letters.
          Each incorrect guess brings you closer to being "hanged."
          One player thinks of a word and the other tries to guess it by guessing letters.
          Each incorrect guess brings you closer to being "hanged."
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
 };
}

export default HangmanGame;