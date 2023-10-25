let playerScore = 0;
let compScore = 0;
let playerSelection;
let compSelection;

// GLOBAL VARIABLES
const choices = document.querySelector(".btn-choices");
const startBtn = document.querySelector(".btn-start");
const gamePage = document.querySelector(".main");
// images
const allImgs = document.querySelectorAll(".img");
const youRock = document.querySelector(".img-you-rock");
const youPaper = document.querySelector(".img-you-paper");
const youScissor = document.querySelector(".img-you-scissor");
const compRock = document.querySelector(".img-comp-rock");
const compPaper = document.querySelector(".img-comp-paper");
const compScissor = document.querySelector(".img-comp-scissor");
// selecting scores
const you = document.querySelector(".score-you");
const computer = document.querySelector(".score-comp");
// score div
const score = document.querySelector(".game-score");
const btnPlayAgain = document.querySelector(".btn-playagain");

// start game(hide page)
startBtn.addEventListener("click", () => {
  document.querySelector(".game-new").classList.add("hidden");
  gamePage.classList.remove("hidden");
});

// func to get computers choice
function getComputerChoice() {
  const arr = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

// play 1 round
function playRound(playerSelection, compSelection) {
  if (
    (playerSelection === "rock" && compSelection === "scissor") ||
    (playerSelection === "paper" && compSelection === "rock") ||
    (playerSelection === "scissor" && compSelection === "paper")
  ) {
    playerScore++;
    you.textContent = playerScore;
    return `You win! ${playerSelection} beats ${compSelection}`;
  } else if (
    (compSelection === "rock" && playerSelection === "scissor") ||
    (compSelection === "paper" && playerSelection === "rock") ||
    (compSelection === "scissor" && playerSelection === "paper")
  ) {
    compScore++;
    computer.textContent = compScore;
    return `You lose! ${compSelection} beats ${playerSelection}`;
  } else {
    return "Its a tie!";
  }
}

// getting the players choice and playing 1 round
choices.addEventListener("click", function (e) {
  if (!e.target) return;
  // hiding all imgs
  allImgs.forEach((img) => img.classList.add("hidden"));

  // checking which button the player clicked
  if (e.target.classList.contains("rock")) {
    playerSelection = "rock";
    youRock.classList.remove("hidden");
  } else if (e.target.classList.contains("paper")) {
    playerSelection = "paper";
    youPaper.classList.remove("hidden");
  } else if (e.target.classList.contains("scissor")) {
    playerSelection = "scissor";
    youScissor.classList.remove("hidden");
  }
  compSelection = getComputerChoice();
  // displaying img for computer
  if (compSelection === "rock") compRock.classList.remove("hidden");
  if (compSelection === "paper") compPaper.classList.remove("hidden");
  if (compSelection === "scissor") compScissor.classList.remove("hidden");
  console.log(playRound(playerSelection, compSelection));

  // checking who is the winner
  checkWinner();
});

// function to check who is the winner
const checkWinner = function () {
  if (+you.textContent === 5) {
    const html = `<h2 class="score win">YOU WIN!</h2>`;
    score.insertAdjacentHTML("afterbegin", html);
    btnPlayAgain.classList.remove("hidden");
  }
  if (+computer.textContent == 5) {
    const html = `<h2 class="score lose">YOU LOSE!</h2> `;
    score.insertAdjacentHTML("afterbegin", html);
    btnPlayAgain.classList.remove("hidden");
  }
  if (+you.textContent === +computer.textContent && +you.textContent === 5) {
    const html = `<h2 class="score tie">IT'S A TIE!</h2>`;
    score.insertAdjacentHTML("afterbegin", html);
    btnPlayAgain.classList.remove("hidden");
  }
};

// play again
btnPlayAgain.addEventListener("click", () => {
  location.reload();
});
