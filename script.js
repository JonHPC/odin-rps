//Basic Rock Paper Scissors game against the computer


//when this function is called, a random choice will be printed in the console
function computerPlay(){
    switch (getRandomInt(0,2)){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Scissors";
            break;
        case 2:
            return "Paper";
    }
}

//get a random integer between two values , inclusive
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//this function plays a round of RPS, with the player input compared against the value from computerPlay
function playRound(playerSelection, computerSelection){
    console.log(`You picked ${playerSelection}.`);
    console.log(`CPU picked ${computerSelection}.`);

    if(playerSelection == computerSelection){
        updateScore(0,0);
        return `Both players chose ${playerSelection}! It's a draw!`;
    } else if (playerSelection == "Rock"){
        if (computerSelection == "Scissors"){
            updateScore(1,0);
            return "Rock beats Scissors! You win!";
        } else {
            updateScore(0,1);
            return "Paper beats Rock! You lose!";
        }
    } else if (playerSelection == "Paper"){
        if(computerSelection == "Rock"){
            updateScore(1,0);
            return "Paper beats Rock! You win!";
        } else {
            updateScore(0,1);
            return "Scissors beat Paper! You Lose!";
        }
    } else if (playerSelection == "Scissors"){
        if(computerSelection == "Paper"){
            updateScore(1,0);
            return "Scissors beat paper! You win!";
        } else {
            updateScore(0,1);
            return "Rock beats Scissors! You lose!";
        }
    }
    
}



function game(){
    let playerPrompt = prompt("Type 'Rock', 'Paper', or 'Scissors'.");
    playerPrompt = playerPrompt.toLowerCase();
    const playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1);
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection,computerSelection));
}

let playerScore = 0;
let compScore = 0;

function updateScore(player, comp){
    playerScore += player;
    compScore += comp;

    console.log(`Current Score: Player - ${playerScore} || CPU - ${compScore}`);
}


