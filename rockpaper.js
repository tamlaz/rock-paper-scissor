// creating variables with values of 0, to later counting the score
let playerWin = 0;
let computerWin = 0;

const gameTools = ['rock', 'paper', 'scissor'];
function computerChoice() {
    return gameTools[Math.floor(Math.random() * gameTools.length)];
}

let gameResults = document.querySelector('.results');

let scorePlayer = document.querySelector('.resultplayer');
scorePlayer.textContent = "Player score: " + playerWin;

let scoreComputer = document.querySelector('.resultcomputer');
scoreComputer.textContent = "Computer score: " + computerWin;

let roundScore = document.createElement('div');
roundScore.classList.add('roundScore');

let gameWinner = document.createElement('div');
gameWinner.classList.add('gameWinner');

// creating function to compare playerSelection and computerSelection
const playGround = (playerSelection, computerSelection) => {
    gameResults.appendChild(roundScore);
    /// If...else statements for every case, both of the computer and player can select rock, paper, scissor
    // If it is a draw, none of them got a points, it goes to the draw variable 
    if (playerSelection == computerSelection) {
        roundScore.textContent = `It\'s a tie! ${playerSelection} equals ${computerSelection}.`
    // If the player wins, variable playerWin is increased with 1
    } else if (playerSelection == 'rock' && computerSelection == 'scissor' || playerSelection == 'scissor' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock') {
        playerWin += 1;
        scorePlayer.textContent = "Player score: " + playerWin;
        roundScore.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    // If the computer wins, the variable computerWin is increased with 1
    } else {
        computerWin += 1;
        scoreComputer.textContent = "Computer score: " + computerWin;
        roundScore.textContent = `Computer win! ${computerSelection} beats ${playerSelection}`;
    }
    // function that checks the winner
    checkWin(playerWin, computerWin);
}

let buttons = document.querySelectorAll('.buttons');

for (i of buttons) {
    i.addEventListener('click', function(e) {
        let playerSelection = e.target.value;
        let computerSelection = computerChoice();
        playGround(playerSelection, computerSelection);
    })
};

const checkWin = (playerWin, computerWin) => {
    if (playerWin == 5) {
        gameWinner.textContent = "Awesome! You won the game!";
        gameResults.appendChild(gameWinner);
        gameResults.appendChild(resetBtn);
    } else if (computerWin == 5) {
        gameWinner.textContent = "You lost, the computer won the game";
        gameResults.appendChild(gameWinner);
        gameResults.appendChild(resetBtn);
    }
}

const resetScore = () => {
     playerWin = 0;
     computerWin = 0;
     scorePlayer.textContent = "Player score: " + playerWin;
     scoreComputer.textContent = "Computer score: " + computerWin;
 }

const resetGame = () => {
    gameResults.removeChild(roundScore);
    gameResults.removeChild(resetBtn);
    gameResults.removeChild(gameWinner);
}

let resetBtn = document.createElement('button');
resetBtn.textContent = "RESTART GAME";
resetBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetScore);





