function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) return 'rock';
  else if (choice === 2) return 'paper';
  else if (choice === 3) return 'scissors';
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === 'invalid') {
    console.log("Error: invalid Choice");
  }
  else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    pScore++;
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
    pScore++;
  }
  else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    pScore++;
  }
  else if (playerChoice === computerChoice) console.log('Tie!');
  else {
    cScore++;
  }
}

const choices = document.querySelector(".choice");
const message = document.querySelector(".gameOver");

let pScore = 0;
let cScore = 0;

const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", e => {
    const img = document.createElement("img");
    img.setAttribute("src", `./img/${card.id}.svg`);

    if (player.childElementCount !== 0) {
      player.removeChild(player.lastElementChild);
      player.appendChild(img);
    }
    else {
      player.appendChild(img);
    }

    let playerChoice = card.id;
    let computerChoice = getComputerChoice();

    const img2 = document.createElement("img");
    img2.setAttribute("src", `./img/${computerChoice}.svg`);

    if (computer.childElementCount !== 0) {
      computer.removeChild(computer.lastElementChild);
      computer.appendChild(img2);
    }
    else {
      computer.appendChild(img2);
    }

    playRound(playerChoice, computerChoice);
    playerScore.textContent = `${pScore}`;
    computerScore.textContent = `${cScore}`;

    if (cScore === 5) {
      choices.setAttribute("style", "display: none;");
      message.setAttribute("style", "display: flex;");
      const text = document.querySelector(".message");
      text.textContent = "You Lost!";
    }
    else if (pScore === 5) {
      choices.setAttribute("style", "display: none;");
      message.setAttribute("style", "display: flex;");
      const text = document.querySelector(".message");
      text.textContent = "You Won!";
    }
  });
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  location.reload();
})

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.toggle("hover");
  });
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseleave", () => {
    card.classList.toggle("hover");
  });
});






