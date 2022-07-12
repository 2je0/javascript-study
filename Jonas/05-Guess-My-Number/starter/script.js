'use strict';
const getRandomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
let randomNumber = getRandomNumber();
let score = 20;
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', () => {
  const userInput = document.querySelector('.message');
  const scoreBox = document.querySelector('.score');
  const guessValue = +document.querySelector('.guess').value;
  if (!guessValue) {
    userInput.textContent = 'no input';
  } else if (randomNumber === guessValue) {
    userInput.textContent = 'correct';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (randomNumber < guessValue) {
    if (score > 1) {
      score--;
      userInput.textContent = 'too high';
    } else {
      userInput.textContent = 'you lose';
      score = 0;
      document.querySelector('body').style.backgroundColor = 'orange';
    }
  } else if (randomNumber > guessValue) {
    if (score > 1) {
      score--;
      userInput.textContent = 'too low';
    } else {
      userInput.textContent = 'you lose';
      score = 0;
      document.querySelector('body').style.backgroundColor = 'orange';
    }
  }
  scoreBox.textContent = score;
});

document.querySelector('.again').addEventListener('click', () => {
  randomNumber = getRandomNumber();
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
