function getComputerChoice () {
    choices = ["rock", "paper", "scissors"];
    randInt = Math.floor(Math.random() * 2);
    return choices.at(randInt);
};

function getHumanChoice () {
    choices = ["rock", "paper", "scissors"];

    choice = window.prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase();

    while (!(choices.includes(choice))) {
        choice = window.prompt("No silly, rock, paper, or scissors?");
        choice = choice.toLowerCase();
    }

    return choice;
};

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        stringOutput = "You tied! You both chose " + humanChoice + ".";
        console.log(stringOutput);
    } else if (((humanChoice == "rock") && (computerChoice == "paper")) ||
                ((humanChoice == "paper") && (computerChoice == "scissors")) ||
                ((humanChoice == "scissors") && (computerChoice == "rock"))) {
        stringOutput = "You lose! You chose " + humanChoice + " but the computer chose " + computerChoice + ".";
        computerScore +=1;
        console.log(stringOutput);
    } else {
        stringOutput = "You win! You chose " + humanChoice + " but the computer chose " + computerChoice + ".";
        humanScore +=1;
        console.log(stringOutput);
    }
    
};

let humanScore = 0;
let computerScore = 0;

function playGame () {
    humanScore = 0;
    computerScore = 0;

    while ((humanScore < 5) && (computerScore < 5)) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore == 5) {
        console.log("YOU WIN!")
    } else {
        console.log("YOU LOSE!")
    }

};

playGame();