'use strict';

let secretNumber = Math.round(Math.random() * 10) + 1;
console.log(secretNumber);
let guessingNumber;
let highNumber = 0;
let guessMessage = document.querySelector('.guess-message');

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber);
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Enter any number';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#fad0c4';
    document.querySelector('body').style.width = '#50rem';
    guessMessage.textContent = 'Congratulations';
    if (score > highNumber) {
      highNumber = score;
      document.querySelector('.highscore').textContent = highNumber;
    }
  }
});
