'use strict';

let secretNumber = Math.round(Math.random() * 10) + 1;
console.log(secretNumber);
// let guessingNumber = Number(document.querySelector('.number-input').value);
let highNumber = 0;
let score = 20;
let message = document.querySelector('.guess-message');

document.querySelector('.check').addEventListener('click', function () {
  let guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber);
  let scoreMessage = (document.querySelector('.score').textContent = score);

  if (!guessingNumber) {
    message.textContent = 'Enter a number';

    // Player won
  } else if (guessingNumber === secretNumber) {
    message.textContent = 'It is right';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.question').style.width = '50rem';

    // Player was wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 0) {
      guessingNumber > secretNumber
        ? (message.textContent = 'Too much')
        : (message.textContent = 'Too less');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'Game Over';
    }
  }
});
