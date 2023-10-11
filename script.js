let playerScore = 0;
let compScore = 0;

// get players choice
const playerSelection = prompt(`Welcome to Rock Paper Scissors!
Please enter either rock, paper or scissors.`).toLowerCase();

function getComputerChoice() {
  const arr = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

function playRound(playerSelection, compSelection) {
  if (
    (playerSelection === "rock" && compSelection === "scissor") ||
    (playerSelection === "paper" && compSelection === "rock") ||
    (playerSelection === "scissor" && compSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${compSelection}`;
  } else if (
    (compSelection === "rock" && playerSelection === "scissor") ||
    (compSelection === "paper" && playerSelection === "rock") ||
    (compSelection === "scissor" && playerSelection === "paper")
  ) {
    compScore++;
    return `You lose! ${compSelection} beats ${playerSelection}`;
  } else {
    return "Its a tie!";
  }
}

console.log(playRound(playerSelection, getComputerChoice()));
