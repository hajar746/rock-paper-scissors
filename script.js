let playerScore = 0;
let compScore = 0;
let playerSelection;
let compSelection;

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

// playing the game for 5 rounds
function game() {
  for (let i = 0; i < 5; i++) {
    // get players choice
    playerSelection = prompt(`Welcome to Rock Paper Scissors!
    Please enter either rock, paper or scissors.`).toLowerCase();
    compSelection = getComputerChoice();
    console.log(playRound(playerSelection, compSelection));
  }

  // deciding who is the winner
  if (playerScore > compScore) {
    console.log("You won the game!🥳");
  } else if (compScore > playerScore) {
    console.log("You lost the game!🥺");
  } else {
    ("The game is a tie!");
  }
}
