

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

function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            return "No one wins!"
        }
    
        //paper and rock
    
        if(humanChoice == "paper" && computerChoice == "rock"){
            humanScore++;
            console.log(humanScore)
            console.log(computerScore)
            return "You win! Rock beats Paper";
        }
    
        if(humanChoice == "rock" && computerChoice == "paper"){
            computerScore++;
            console.log(humanScore)
            console.log(computerScore)
            return"You lose! Rock beats Paper"
        }
    
        //paper and scissors
    
        if(humanChoice == "paper" && computerChoice == "scissors"){
            computerChoice++;
            console.log(humanScore)
            console.log(computerScore)
            return"You lose! scissors beats Paper"
        }
    
        if(humanChoice == "scissors" && computerChoice == "paper"){
            humanChoice++;
            console.log(humanScore)
            console.log(computerScore)
            return"You win! scissors beats Paper"
        }
        
        //rock and scissors
    
        if(humanChoice == "scissors" && computerChoice == "rock"){
            computerChoice++;
            console.log(humanScore)
            console.log(computerScore)
            return "You lose! rock beats scissors"
        }
    
        if(humanChoice == "rock" && computerChoice == "scissors"){
            humanChoice++;
            console.log(humanScore)
            console.log(computerScore)
            return"You win! rock beats scissors"
        }
    }
    for(let i = 0; i < 5; i ++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection))
    }
    
}


playGame();