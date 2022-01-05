//Basic Rock Paper Scissors game against the computer

let gameOver = false; //initialize game

const buttons = document.querySelectorAll('input');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonChoice = button.id.toLowerCase();
        const playerSelection = buttonChoice.charAt(0).toUpperCase() + buttonChoice.slice(1);
        const computerSelection = computerPlay();

        //checks to see if the game is over, if so, prevent the player from clicking the choice buttons
        if(gameOver){
            console.log("Game is over, cannot press buttons")
        } else{
            playRound(playerSelection,computerSelection);
        }
        
    })
})

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
    
    const playerText = document.querySelector('#playerSelection');
    playerText.textContent = `You picked ${playerSelection}.`;

    const compText = document.querySelector('#computerSelection');
    compText.textContent = `CPU picked ${computerSelection}.`;

    const resultsText = document.querySelector('#result');

    if(playerSelection == computerSelection){
        resultsText.textContent = `Both players chose ${playerSelection}! It's a draw!`;
        updateScore(0,0);
    } else if (playerSelection == "Rock"){
        if (computerSelection == "Scissors"){
            resultsText.textContent = "Rock beats Scissors! You win!";
            updateScore(1,0);
        } else {
            resultsText.textContent = "Paper beats Rock! You lose!";
            updateScore(0,1);
        }
    } else if (playerSelection == "Paper"){
        if(computerSelection == "Rock"){
            resultsText.textContent = "Paper beats Rock! You win!";
            updateScore(1,0);
        } else {
            resultsText.textContent = "Scissors beat Paper! You Lose!";
            updateScore(0,1);
        }
    } else if (playerSelection == "Scissors"){
        if(computerSelection == "Paper"){
            resultsText.textContent = "Scissors beat paper! You win!";
            updateScore(1,0);
        } else {
            resultsText.textContent = "Rock beats Scissors! You lose!";
            updateScore(0,1);
        }
    }
    
}

//initialize player and CPU scores
let playerScore = 0;
let compScore = 0;


//updates the score text as each round is played
function updateScore(player, comp){
    playerScore += player;
    compScore += comp;
    const scoreText = document.querySelector('#currentScore');
    scoreText.textContent = `Current Score: Player - ${playerScore} || CPU - ${compScore}`;
    
    let winOrLose = document.querySelector('#winorlose');

    if(playerScore == 5){
        //player wins, display win text
        winOrLose.textContent = "You beat the CPU! Great Job!";

        //Create a restart button and add it to the #restartBtn div
        let restartDiv = document.getElementById("restartBtn");
        let btn = document.createElement("button");
        btn.className = "results";
        btn.innerHTML = "Play Again";
        restartDiv.appendChild(btn);

        //prevents the game from continuing
        gameOver = true;
    } else if(compScore == 5){
        //cpu wins, display lose text
        winOrLose.textContent = "Oh no! The CPU beat you! Try harder next time!";
        let restartDiv = document.getElementById("restartBtn");
        let btn = document.createElement("button");
        btn.className = "results";
        btn.innerHTML = "Play Again";
        restartDiv.appendChild(btn);
        gameOver = true;
    } else {
        winOrLose.textContent = "";
    }
}


//when the Restart Button is pressed, reload the page
const restartButton = document.querySelector("#restartBtn");
restartButton.addEventListener('click', () =>{
    //reloads the page
    window.location.reload();
})





