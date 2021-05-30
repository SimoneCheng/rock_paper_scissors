// 設定讓電腦隨機出拳的函數
const gameList = ["Rock", "Paper", "Scissors"];
function computerPlay() {
  return gameList[Math.floor(Math.random() * gameList.length)];
}

// 設定猜拳遊戲（達到5分獲勝）的函數
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Rock") ||
     (playerSelection == "Paper" && computerSelection == "Paper") ||
     (playerSelection == "Scissors" && computerSelection == "Scissors")) {
      container1.textContent = "It's a tie";
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper")||
    (playerSelection == "Paper" && computerSelection == "Scissors")||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
      container1.textContent = "You LOSE! " + computerSelection + " beats " + playerSelection + "!";
      computerScore++;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors")||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
      container1.textContent = "You WIN! " + playerSelection + " beats " + computerSelection+ "!";
      playerScore++;
    }
    container2.textContent = "Player Score: " + playerScore; 
    container3.textContent = "Computer Score: " + computerScore; 
    if (computerScore == 5) {
        alert("You LOSE the game! Please try AGAIN!");
        computerScore = 0;
        playerScore = 0;
    }
    else if (playerScore == 5) {
        alert("You WIN the game! You can play AGAIN!");
        computerScore = 0;
        playerScore = 0;
    }
} 

let playerScore = 0;
let computerScore = 0;

const btn1 = document.querySelector("#rock");
const btn2 = document.querySelector("#paper");
const btn3 = document.querySelector("#scissors");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");

btn1.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });

  btn2.addEventListener("click", () => {
    playerSelection = "Paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });

  btn3.addEventListener("click", () => {
    playerSelection = "Scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });