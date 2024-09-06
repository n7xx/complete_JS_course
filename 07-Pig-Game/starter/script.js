'use strict';

// Constants
const WINNING_SCORE = 1000;

// Button elements
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');

// Player elements
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const currentPlayer0 = document.getElementById('current--0');
const currentPlayer1 = document.getElementById('current--1');
const player1Score = document.getElementById('score--0');
const player2Score = document.getElementById('score--1');
const currentDiv = document.querySelector('.current');
const dice = document.querySelector('.dice');

// Game variables
let scores, playing, currentScore, activePlayer;

// save game to localStorage
const saveGameState = function () {
  const gameState = {
    scores,
    currentScore,
    activePlayer,
    playing,
  };
  localStorage.setItem('gameState', JSON.stringify(gameState));
};

// load Game State from localStorage

const loadGameState = function () {
  const savedState = localStorage.getItem('gameState');
  if (savedState) {
    const {
      scores: savedScores,
      currentScore: savedCurrentScore,
      activePlayer: savedActivePlayer,
      playing: savedPlaying,
    } = JSON.parse(savedState);
    scores = savedScores;
    currentScore = savedCurrentScore;
    activePlayer = savedActivePlayer;
    playing = savedPlaying;

    updateUI();
  }
};

// Update the UI based on the current game state
const updateUI = function () {
  currentPlayer0.textContent = scores[0];
  currentPlayer1.textContent = scores[1];
  player1Score.textContent = scores[0];
  player2Score.textContent = scores[1];
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  // Hide dice initially
  hideElement(dice);

  // Highlight active player
  player1.classList.toggle('player--active', activePlayer === 0);
  player2.classList.toggle('player--active', activePlayer === 1);

  // If game over, remove UI elements for losing player
  if (!playing) {
    endGame();
  }
};

// Initialize game function
const init = function () {
  const savedState = localStorage.getItem('gameState');
  if (savedState) {
    loadGameState(); // Load the saved state if available
  } else {
    scores = [0, 0];
    playing = true;
    currentScore = 0;
    activePlayer = 0;

    currentPlayer0.textContent = 0;
    currentPlayer1.textContent = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;

    hideElement(dice);
    showElement(rollBtn);
    showElement(holdBtn);
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    showElement(player1);
    showElement(player2);
    showElement(currentDiv);
  }
};
init();

// Utility functions for showing/hiding elements
function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

// Switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');

  saveGameState(); // Save game state when switching players
};

// Remove elements function when game is over
const endGame = function () {
  hideElement(dice);
  hideElement(rollBtn);
  hideElement(holdBtn);
  hideElement(currentDiv);
  const losingPlayer = activePlayer === 0 ? player2 : player1;
  hideElement(losingPlayer);

  localStorage.removeItem('gameState'); // Clear game state when game ends
};

// Roll dice event
const handleRollDice = function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    showElement(dice);
    dice.src = `dice-${randomDice}.png`;

    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
    saveGameState(); // Save game state after rolling dice
  }
};

// Hold score event
const handleHoldScore = function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    currentScore = 0;

    if (scores[activePlayer] >= WINNING_SCORE) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      endGame();
    } else {
      switchPlayer();
    }
    saveGameState(); // Save game state after holding score
  }
};

// New game event
const handleNewGame = function () {
  localStorage.removeItem('gameState'); // Clear localStorage when starting a new game
  init();
};

// Event listeners
rollBtn.addEventListener('click', handleRollDice);
holdBtn.addEventListener('click', handleHoldScore);
newBtn.addEventListener('click', handleNewGame);
