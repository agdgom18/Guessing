'use strict';

let secretNumber = Math.round(Math.random() * 20) + 1;
console.log(secretNumber);
// let guessingNumber = Number(document.querySelector('.number-input').value);
let highscore = 0;
let score = 20;
let message = document.querySelector('.guess-message');

document.querySelector('.check').addEventListener('click', function () {
  let guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    message.textContent = 'Enter a number';

    // Player won
  } else if (guessingNumber === secretNumber) {
    message.textContent = 'It is right';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').style.backgroundColor = '#B5A886';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Player was wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
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
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.question').textContent = '???';
  message.textContent = 'Begin';

  document.querySelector('.number-input').value = '';
  secretNumber = Math.round(Math.random() * 20) + 1;
  document.querySelector('.highscore').textContent = highscore;
});
