"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// show .message text
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // no input
  if (!guess) {
    displayMessage("No number!");

    // right guess, win
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // was it highest score?
    if (score > highscore) {
      highscore = score; // new highScore and update UI
      document.querySelector(".highscore").textContent = highscore;
    }

    // deactivate check-button and guess-input until new game
    document.querySelector(".check").disabled = true;
    document.querySelector(".guess").disabled = true;

    // too high guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;

      // deactivate check-button and guess-input until new game
      document.querySelector(".check").disabled = true;
      document.querySelector(".guess").disabled = true;
    }
  }
});

// again-button resets the game
// restore UI to starting state
document.querySelector(".again").addEventListener("click", function () {
  // new secret number and set ? to UI
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // score to 20, update UI
  score = 20;
  document.querySelector(".score").textContent = score;

  // message to original
  displayMessage("Start guessing...");

  // activate guess-input and check-button again
  // if they were disabled previously
  document.querySelector(".check").disabled = false;
  document.querySelector(".guess").disabled = false;

  // clear guess input
  document.querySelector(".guess").value = "";

  // backgroundColor to black, number box to 15rem
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
