'use strict';

let secretNumber = Math.round(Math.random() * 10) + 1;

let guessingNumber;
console.log(guessingNumber);

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber);
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Enter any number';
  }
});
