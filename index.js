let humanScore = 0;
let computerScore = 0;

function reloadPage() {
  window.location.reload();
}

function getComputerChoice() {
  randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    return "rock";
  } else if (randomChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let buttons = document.querySelector(".buttons");
  buttons.addEventListener("click", (event) => {
    let humanChoice = event.target.id;
  });

  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissors"
  ) {
    return "please enter either rock, paper, or scissors";
  } else {
    return humanChoice;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "No one wins!";
  }

  //paper and rock
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win!";
  }

  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose!";
  }

  //paper and scissors
  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose!";
  }

  if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win!";
  }

  //rock and scissors
  if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose!";
  }

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win!";
  }
}

function playGame() {
  let buttons = document.querySelector(".buttons");
  let compS = document.querySelector(".computerScore");
  let humanS = document.querySelector(".humanScore");
  let narrator = document.querySelector(".Narrator");
  buttons.addEventListener("click", (event) => {
    let humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    if (result === "You win!") {
      narrator.textContent = "You win!";
      humanS.textContent = humanScore;
      compS.textContent = computerScore;
    } else if (result === "You lose!") {
      narrator.textContent = "You lose!";
      humanS.textContent = humanScore;
      compS.textContent = computerScore;
    } else {
      narrator.textContent = "No one wins!";
    }
    if (computerScore === 5) {
      buttons.style.visibility = "hidden";
      narrator.textContent = "You Lost! Computer Wins!";
      return;
    }
    if (humanScore === 5) {
      buttons.style.visibility = "hidden";
      narrator.textContent = "You Win! Humans Win!";
      return;
    }
  });
}

playGame();

let reset = document.querySelector(".reset");
reset.addEventListener("click", reloadPage);

// for(let i = 0; i < 5; i++){
//     const humanSelection = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     console.log(playRound(humanSelection, computerChoice))
//     // console.log("Player: " + humanScore + " " + "Computer: " + computerScore)
// }
