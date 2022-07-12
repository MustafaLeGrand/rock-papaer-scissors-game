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

//Linking function to computer score variable 
let computerSelection = computerPlay();

//Linking function to user score variable 
let playerSelection = computerPlay();

//Scores
let playerScore = 0;
let computerScore = 0;

//Rounds 
let round = 1;

function addRounds() {
    round ++;
}

// Start round, define winner, loser or tie game 
function playRound (playerSelection, computerSelection) {
    //concatenate strings to match cases 
    round
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
            return `${playerSelection} beats ${computerSelection}, You Won!`, playerScore++;
        // Computer score    
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            return `${computerSelection} beats ${playerSelection}, Computer Won :(`, computerScore++;
    }
    addRounds();
}

function game () {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

console.log(playRound(playerSelection, computerSelection))