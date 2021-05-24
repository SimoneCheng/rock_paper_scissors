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
    return "You LOSE! Rock beats Scissors!";
  } 
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "You WIN! Scissors beats Paper!";
  } 
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore <= 5 || computerScore <= 5) {
    const playerSelection = prompt("Enter 'Rock', ' Paper', or 'Scissors'",);
    const computerSelection = computerPlay();
    if (playerSelection == "Rock" && computerSelection == "Paper") {
      ++computerScore;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      ++playerScore;
    } 
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
      ++playerScore;
    } 
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      ++computerScore;
    } 
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      ++computerScore;
    } 
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      ++playerScore;
    } 
    alert(playRound(playerSelection, computerSelection));
    alert("Your score: " + playerScore + ", Computer Score: " + computerScore);
    if (playerScore == 5) {
      alert("You WIN!");
      break;
    }
    else if (computerScore == 5) {
      alert("You LOSE!");
      break;
    }
  }
}

console.log(game())