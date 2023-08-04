"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const numWidth = (rem) => (document.querySelector(".number").style.width = rem);
const bodyBackground = (color) =>
  (document.querySelector("body").style.backgroundColor = color);
const scoreContent = (score) =>
  (document.querySelector(".score").textContent = score);
const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("📛 No Number! ");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number! ");
    document.querySelector(".number").textContent = secretNumber;
    bodyBackground("#60b347");
    numWidth("30rem");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      scoreContent(score);
    } else {
      displayMessage("💥 You lose The Game");
      scoreContent(0);
    }
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       displayMessage('📈 Too High!');
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       displayMessage('💥 You lose The Game');
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       displayMessage('📉 Too Low!');
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       displayMessage('💥 You lose The Game');
  //       document.querySelector('.score').textContent = 0;
  //     }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  numWidth("15rem");
  bodyBackground("#222");
  displayMessage("Start guessing...");
  scoreContent(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
