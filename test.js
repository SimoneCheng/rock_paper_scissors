const gameList = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return gameList[Math.floor(Math.random() * gameList.length)];
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection == "Rock" && computerSelection == "Rock") ||
   (playerSelection == "Paper" && computerSelection == "Paper") ||
   (playerSelection == "Scissors" && computerSelection == "Scissors")) {
    return "It's a tie";
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You LOSE! Paper beats Rock!";
  }
  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "You WIN! Rock beats Scissors!";
  } 
  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "You WIN! Paper beats Rock!";
  } 
  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You LOSE! Paper beats Scissors!";
  } 
  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "You LOSE! Scissors beats Rock!";
  } 
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "You WIN! Scissors beats Paper!";
  } 
}

const playerSelection = prompt("Enter 'Rock', ' Paper', or 'Scissors'",);
const computerSelection = computerPlay();
alert(playRound(playerSelection, computerSelection));

function game() {
  
}