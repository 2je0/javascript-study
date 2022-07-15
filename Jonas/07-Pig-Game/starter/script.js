'use strict';
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');

const player0TotalScoreBoard = document.querySelector('#score--0');
const player1TotalScoreBoard = document.querySelector('#score--1');
const player0CurrentScoreBoard = document.querySelector('#current--0');
const player1urrentScoreBoard = document.querySelector('#current--1');

const player0Container = document.querySelector('.player--0');
const player1Container = document.querySelector('.player--1');

let currentScore = 0;
let totalScore = [0, 0];
let currentPlayer = 0;
let playing = true;

const getRandomDice = () => {
  return Math.trunc(Math.random() * 6) + 1;
};

const displayDice = diceNumber => {
  diceImg.src = `dice-${diceNumber}.png`;
  diceImg.classList.remove('hidden');
};

//starting condition
const initialization = () => {
  playing = true;
  currentScore = 0;
  totalScore = [0, 0];
  const currentPlayerContainer = document.querySelector(
    `.player--${currentPlayer}`
  );
  currentPlayerContainer.classList.remove('player--winner');
  player0Container.classList.add('player--active');

  player0TotalScoreBoard.textContent = 0;
  player1TotalScoreBoard.textContent = 0;
  player0CurrentScoreBoard.textContent = 0;
  player1urrentScoreBoard.textContent = 0;
  diceImg.classList.add('hidden');
};

const switchPlayer = () => {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0Container.classList.toggle('player--active');
  player1Container.classList.toggle('player--active');
};

const currentScoreInit = () => {
  const currentPlayerCurrentScoreBoard = document.querySelector(
    `#current--${currentPlayer}`
  );
  currentPlayerCurrentScoreBoard.textContent = 0;
  currentScore = 0;
};

const holdScoreandDisplayUpdate = () => {
  const currentPlayerTotalScoreBoard = document.querySelector(
    `#score--${currentPlayer}`
  );

  totalScore[currentPlayer] += currentScore;
  currentPlayerTotalScoreBoard.textContent = totalScore[currentPlayer];
};
const addCurrentScore = diceNumber => {
  const currentPlayerCurrentScoreBoard = document.querySelector(
    `#current--${currentPlayer}`
  );
  currentScore += diceNumber;
  currentPlayerCurrentScoreBoard.textContent = currentScore;
};

const winnerClassChange = () => {
  const currentPlayerContainer = document.querySelector(
    `.player--${currentPlayer}`
  );
  currentPlayerContainer.classList.add('player--winner');
  currentPlayerContainer.classList.remove('player--active');
};

initialization();

btnRoll.addEventListener('click', () => {
  if (!playing) return;
  const newDiceNumber = getRandomDice();
  displayDice(newDiceNumber);
  if (newDiceNumber !== 1) {
    addCurrentScore(newDiceNumber);
  } else {
    currentScoreInit();
    switchPlayer();
  }
});

btnHold.addEventListener('click', () => {
  if (!playing) return;
  holdScoreandDisplayUpdate();
  currentScoreInit();

  if (totalScore[currentPlayer] >= 100) {
    winnerClassChange();
    diceImg.classList.add('hidden');
    playing = false;
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', initialization);
