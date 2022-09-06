/// creating variables with values of 0, to later counting the score
let playerWin = 0;
let computerWin = 0;
let draw = 0;

const gameTools = ['rock', 'paper', 'scissor'];
function computerChoice() {
    return gameTools[Math.floor(Math.random() * gameTools.length)];
}

let gameResults = document.querySelector('.results');
let scorePlayer = document.querySelector('.resultplayer');
gameResults.appendChild(scorePlayer);

let scoreComputer = document.querySelector('.resultcomputer');
gameResults.appendChild(scoreComputer);

const roundTie = document.createElement('div');
roundTie.classList.add('roundTie');

/// creating function to compare playerSelection and computerSelection
function playGround(playerSelection, computerSelection) {
    /// If...else statements for every case, both of the computer and player can select rock, paper, scissor
    /// If it is a draw, none of them got a points, it goes to the draw variable 
    if (playerSelection == computerSelection) {
        draw += 1;
        roundTie.textContent = (`Tie! ${playerSelection} equals ${computerSelection}. Number of draws: ${draw}`);
        gameResults.appendChild(roundTie);
    /// If the player wins, variable playerWin is increased with 1
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        playerWin += 1;
        scorePlayer.textContent = "Your score : " + playerWin;
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        playerWin += 1;
        scorePlayer.textContent = "Your score : " + playerWin;
        gameResults.appendChild(scorePlayer);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerWin += 1;
        scorePlayer.textContent = "Your score : " + playerWin;
        gameResults.appendChild(scorePlayer);
    /// If the computer wins, the variable computerWin is increased with 1
    } else {
        computerWin += 1;
        scoreComputer.textContent = "Computer score: " + computerWin;
        
    }
    // console.log(`You have: ${playerWin} point(s).`);
    // console.log(`The Computer has: ${computerWin} point(s).`);
    // console.log(`Number of draws: ${draw}.`);
    /// Used if...else statements to determine who won the entire game
    // if (computerWin == 5) {
    // console.log('The Computer won the game!');
    // } else if (playerWin == 5) {
    // console.log('Congratulation, you won!');
    // }
}

let buttons = document.querySelectorAll('.buttons');

for (i of buttons) {
    i.addEventListener('click', function(e) {
        let playerSelection = e.target.value;
        let computerSelection = computerChoice();
        console.log(computerSelection);
        playGround(playerSelection, computerSelection);
    })
};



