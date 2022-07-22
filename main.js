// Computer random selection 
let computerPlay = () => {
    //Game options to play with 
    let options = ['Rock', 'Paper', 'Scissors'];
    //Random number generator
    let randomNumber = Math.floor(Math.random() * options.length);
    //Select random option from array
    let computerSelection = options[randomNumber];
    // return value so the game can be played
    return computerSelection;
}

//Round
let round = 0;

//Add round
let addRound = () => round += 1;

//Scores
let playerScore = 0;
let computerScore = 0;

// Start round, define winner, loser or tie game 
function playRound () {
// Selection of user & comp
    let computerSelection = computerPlay();
    let playerSelection = computerPlay();
    addRound();

    //concatenate strings to match cases 
    switch (playerSelection + computerSelection) {
        // Tie case
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            computerScore += 0;
            playerScore += 0;
            return ('Tie Game!');
        // Player score
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            playerScore += 1;
            return (`${playerSelection} beats ${computerSelection}, You Won!`);
        // Computer score    
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            computerScore += 1;
            return (`${computerSelection} beats ${playerSelection}, Computer Won :(`);
    }
}

defineWinner = () => {
    if (playerScore > computerScore) {
        return 'Cheers, You won!';
    } else if (playerScore == computerScore) {
        return "It's a tie!";
    } else if (computerScore > playerScore) {
        return 'Computer won, try again!';
    }
}

endGame = () => {
    
}

console.log(playRound());
console.log(playerScore, computerScore, round);

console.log(playRound());
console.log(playerScore, computerScore, round);

console.log(playRound());
console.log(playerScore, computerScore, round);

console.log(playRound());
console.log(playerScore, computerScore, round);

console.log(playRound());
console.log(playerScore, computerScore, round);

console.log(defineWinner())