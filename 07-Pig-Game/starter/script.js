'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

btnRoll.addEventListener('click', () => {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  let activePlayerElement = document.querySelector(`#current--${activePlayer}`);

  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceValue}.png`;

  if (diceValue !== 1) {
    currentScore += diceValue;
    activePlayerElement.textContent = currentScore;
  } else {
    activePlayerElement.textContent = 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
