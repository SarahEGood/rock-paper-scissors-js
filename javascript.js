const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

function getComputerChoice () {
    choices = ["rock", "paper", "scissors"];
    randInt = Math.floor(Math.random() * 2);
    return choices.at(randInt);
};

function playRound (humanChoice) {

    computerChoice = getComputerChoice();
    console.log('Button Pressed!');

    if (humanChoice == computerChoice) {
        stringOutput = "You tied! You both chose " + humanChoice + ".";
    } else if (((humanChoice == "rock") && (computerChoice == "paper")) ||
                ((humanChoice == "paper") && (computerChoice == "scissors")) ||
                ((humanChoice == "scissors") && (computerChoice == "rock"))) {
        stringOutput = "You lose! You chose " + humanChoice + " but the computer chose " + computerChoice + ".";
        computerScore +=1;
    } else {
        stringOutput = "You win! You chose " + humanChoice + " but the computer chose " + computerChoice + ".";
        humanScore +=1;
    }

    document.getElementById("results").innerHTML = stringOutput;

    scoreString = "<p>You: " + humanScore + "</p><p>Computer: " + computerScore + "</p>";
    document.getElementById("score").innerHTML = scoreString;
    
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