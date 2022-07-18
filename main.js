// Computer random selection 
function computerPlay() {
    //Game options to play with 
    let options = ['Rock', 'Paper', 'Scissors'];
    //Random number generator
    let randomNumber = Math.floor(Math.random() * 3);
    //Select random option from array
    let computerSelection = options[randomNumber];
    // return value so the game can be played
    return computerSelection;
}

let computerSelection = computerPlay();

let playerSelection = computerPlay();

//Round
let round = 1;

//Add round
function addRound () {
    round++;
}

//Scores
let playerScore = 0;
let computerScore = 0;

// Start round, define winner, loser or tie game 
function playRound (playerSelection, computerSelection) {
    
    //concatenate strings to match cases 
    switch (playerSelection + computerSelection) {
        // Tie case
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            return 'Tie Game!'; 
        // Player score
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            return `${playerSelection} beats ${computerSelection}, You Won!`, playerScore += 1;
        // Computer score    
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            return `${computerSelection} beats ${playerSelection}, Computer Won :(`, computerScore += 1;
    }
}

console.log(playRound(playerSelection, computerSelection));


