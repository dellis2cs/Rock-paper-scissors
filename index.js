let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    randomChoice = Math.floor(Math.random() * 3) + 1;
    
    if (randomChoice === 1){
        return "rock";
    }
    else if (randomChoice === 2){
        return "paper"
    }

    else{
        return "scissors"
    }
}


function getHumanChoice(){
    let humanChoice = prompt("please choice rock, paper, or scissors").toLowerCase()
    if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        return "please enter either rock, paper, or scissors"
    } else{
        return humanChoice
    } 
}




// console.log(playRound(humanSelection, computerSelection));


function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            return "No one wins!"
        }

        //paper and rock

        if(humanChoice == "paper" && computerChoice == "rock"){
            ++humanScore;
            return "You win! Paper beats Rock";
        }

        if(humanChoice == "rock" && computerChoice == "paper"){
            ++computerScore;
            return"You lose! Paper beats Rock"
        }

        //paper and scissors

        if(humanChoice == "paper" && computerChoice == "scissors"){
            ++computerScore;
            return"You lose! scissors beats Paper"
        }

        if(humanChoice == "scissors" && computerChoice == "paper"){
            ++humanScore;
            return"You win! scissors beats Paper"
        }
        
        //rock and scissors

        if(humanChoice == "scissors" && computerChoice == "rock"){
            ++computerScore;
            return"You lose! rock beats scissors"
        }

        if(humanChoice == "rock" && computerChoice == "scissors"){
            ++humanScore;
            return"You win! rock beats scissors"
        }
    }
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection))
        // console.log("Player: " + humanScore + " " + "Computer: " + computerScore) 
    }
    if(humanScore > computerScore){
        console.log("You win! " + "Player: " + humanScore + " " + "Computer: " + computerScore)
    } else{
        console.log("You lose! " + "Player: " + humanScore + " " + "Computer: " + computerScore)
    }
}

playGame();