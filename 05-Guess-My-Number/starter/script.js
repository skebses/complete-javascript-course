'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = 20;
const highScore = 0;
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const bodyElement = document.querySelector('body');
const messageElement = document.querySelector('.message');
const highscoreElement = document.querySelector('.highscore');
const guessELement = document.querySelector('.guess');
const againButton = document.querySelector('.again');

const displayMessage = function (message) {
  messageElement.textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessELement.value);

  if (!guess) {
    displayMessage('No secret number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    numberElement.textContent = secretNumber;
    numberElement.style.width = '30rem';
    scoreElement.textContent = score;
    bodyElement.style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      highscoreElement.textContent = highScore;
    }
  } else {
    if (score > 1) {
      if (guess > secretNumber) {
        displayMessage(score > 1 ? 'Too high' : 'Too low');
        score--;
        scoreElement.textContent = score;
      }
    } else {
      scoreElement.textContent = 0;
      displayMessage('You lost the game!');
    }
  }
});

againButton.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageElement.textContent = 'Start guessing...';
  scoreElement.textContent = score;
  numberElement.style.width = '15rem';
  numberElement.textContent = '?';
  guessELement.value = '';
  bodyElement.style.backgroundColor = '#222';
});
