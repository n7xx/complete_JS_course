'use strict';

const again = document.querySelector('.again');
const sNum = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const scoreNum = document.querySelector('.score');
const right = document.querySelector('.right');
const left = document.querySelector('.left');

let score = 20;
let highScore = 0;
let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
const Message = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const guessElement = document.querySelector('.guess');
checkBtn.addEventListener('click', function () {
  // this variable should be inside event listener ensure it's always the latest value.
  let guess = Number(guessElement.value);
  if (!guess) {
    Message('⛔️ No number!');
  } else if (guess === secretNum) {
    Message('🎉 Correct Number!');
    sNum.textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    sNum.style.width = '50rem';
    document.querySelector('.guess').style.width = '40rem';
    left.style.cssText = 'display: none;';
    right.style.cssText = 'font-size: 3rem;';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      Message(guess > secretNum ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreNum.textContent = score;
    } else {
      Message('💥 You lost the game!');
      document.querySelector('body').style.backgroundColor = '#b60000';
      sNum.style.width = '15rem';
      left.style.cssText = 'display: none;';
      right.style.cssText = 'font-size: 3rem;';
      scoreNum.textContent = 0;
      document.querySelector('.label-highscore').style.display = 'none';
      document.querySelector('.label-score').style.display = 'none';
    }
  }
    guessElement.value = '';
});

again.addEventListener('click', function () {
  Message('Start guessing...');
  score = 20;
  document.querySelector('.number').textContent = '?';
  checkBtn.style.display = 'block';
  document.querySelector('.guess').style.width = '25rem';
  sNum.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  left.style.cssText = '  width: 52rem; display: flex; flex-direction: column; align-items: center;';
  right.style.cssText = 'font-size: 2rem;';

  document.querySelector('.label-highscore').style.display = 'block';
    document.querySelector('.label-score').style.display = 'block';
    guessElement.value = '';
});
