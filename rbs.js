function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) return 'rock';
  else if (choice === 2) return 'paper';
  else if (choice === 3) return 'scissors';
}

function getHumanChoice() {
  let choice = prompt("Chose from rock paper scissor");
  choice = choice.toLocaleLowerCase();
  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') return choice;
  else return 'invalid';
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'invalid') {
    console.log("Error: invalid Choice");
  }
  else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  }
  else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  }
  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  }
  else if (humanChoice === computerChoice) console.log('Tie!');
  else {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
  }
}

let humanScore = 0;
let computerScore = 0;

playGame();