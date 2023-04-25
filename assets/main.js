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

// Add round, sum points to round winner
function playRound () {
// Selection of user & comp
    let computerSelection = computerPlay();
    let playerSelection = computerPlay();
// Add up the rounds    
    addRound();
    //concatenate strings to match cases 
    switch (playerSelection + computerSelection) {
        // Tie case
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            computerScore += 0;
            playerScore += 0;
            return ('Tie!');
        // Player score
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            playerScore += 1;
            return (`${playerSelection} beats ${computerSelection}, You get the round!`);
        // Computer score    
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            computerScore += 1;
            return (`${computerSelection} beats ${playerSelection}, round for computer :(`);
    }
}

//Define tie game, winner or loser of the match 
defineWinner = () => {
    if (playerScore > computerScore) {
        return 'Cheers, You won!';
    } else if (playerScore == computerScore) {
        return "Game!";
    } else if (computerScore > playerScore) {
        return 'Computer won the match 0_0, try again!';
    } else if (playerScore == 5) {
        return 'Flawless Victory!'
    }
}

endgame = () => {
    if (round == 5) {
        
    }
}

// console.log(playRound());
// console.log(playerScore, computerScore, round);

// console.log(playRound());
// console.log(playerScore, computerScore, round);

// console.log(playRound());
// console.log(playerScore, computerScore, round);

// console.log(playRound());
// console.log(playerScore, computerScore, round);

// console.log(playRound());
// console.log(playerScore, computerScore, round);

// console.log(defineWinner())

let buttons = document.querySelectorAll('button');

console.log(buttons);




