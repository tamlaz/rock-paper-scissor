/// creating variables with values of 0, to later counting the score
let playerWin = 0;
let computerWin = 0;
let draw = 0;

const gameTools = ['rock', 'paper', 'scissor'];
function computerChoice() {
    return gameTools[Math.floor(Math.random() * gameTools.length)];
}
let computerSelection = computerChoice();
console.log(computerSelection);

/// creating function to compare playerSelection and computerSelection
function playGround(playerSelection, computerSelection) {
    /// If...else statements for every case, both of the computer and player can select rock, paper, scissor
    /// If it is a draw, none of them got a points, it goes to the draw variable 
    if (playerSelection == computerSelection) {
        draw += 1;
        console.log(`Draw! Both of you chose the same: ${playerSelection} equals ${computerSelection}.`);
    /// If the player wins, variable playerWin is increased with 1
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
            playerWin += 1;
            console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
            playerWin += 1;
            console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerWin += 1;
            console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    /// If the computer wins, the variable computerWin is increased with 1
    } else {
        computerWin += 1;
        console.log(`The Computer won! ${computerSelection} beats ${playerSelection}`);
    }
}

let buttons = document.querySelectorAll('.buttons');

for (i of buttons) {
    i.addEventListener('click', function(e) {
        let playerSelection = e.target.value;
        playGround(playerSelection, computerSelection)
    })
}

// let currentScore = 

console.log(`You have: ${playerWin} point(s).`);
console.log(`The Computer has: ${computerWin} point(s).`);
console.log(`Number of draws: ${draw}.`);
/// Used if...else statements to determine who won the entire game
if (computerWin == 5) {
    console.log('The Computer won the game!');
} else if (playerWin == 5) {
    console.log('Congratulation, you won!');
}

