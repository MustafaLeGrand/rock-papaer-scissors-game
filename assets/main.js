// Computer random selection
let computerPlay = () => 
{
    //Comp options
    let options = ['rock', 'paper', 'scissors'];
    //Random number generator
    let randomNumber = Math.floor(Math.random() * options.length);
    //Select random option from array
    let computerSelection = options[randomNumber];
    // return value so the game can be played
    return computerSelection;
}

// Displays
// Round display
let roundDisplay = document.getElementById('round');
// Score displays
let pScoreDisplay = document.getElementById('playerScore');
let cScoreDisplay = document.getElementById('computerScore');
// Results display
let resultDisplay = document.getElementById('results');

// Buttons
// player buttons
let buttons = document.querySelectorAll('button');

// Round
let round = 1;
roundDisplay.textContent = round;
//Add round
let addRound = () => round += 1;

// Scores
let playerScore = 0;
let computerScore = 0;
pScoreDisplay.textContent = playerScore;
cScoreDisplay.textContent = computerScore;

// updateRound helper
let updateRound = () => 
{
        roundDisplay.textContent = round
}

// updateScore helper 
let updateScore = () => 
{
    pScoreDisplay.textContent = playerScore;
    cScoreDisplay.textContent = computerScore;
}

// Define tie game, winner or loser
let defineWinner = () => 
{
    if (playerScore > computerScore && round >= 5) {
        textDisplay.innerHTML = 'Cheers, You won!';
    } else if (playerScore == computerScore && round >= 5) {
        textDisplay.innerHTML = 'Game!';
    } else if (computerScore > playerScore && round >= 5) {
        textDisplay.innerHTML = 'Computer won 0_0, try again!';
    } else if (playerScore == 5) {
        textDisplay.innerHTML = 'Flawless Victory!'
    }
}

// Finish the game
let endgame = () => 
{
    if (round == 5) {
        round = 1;
        pScoreDisplay.innerHTML = 0;
        cScoreDisplay.innerHTML = 0;
    }
}

// Add round, sum points to round winner
function playRound (e) {
    e.stopPropagation();

    // set playerSelection to 
    let playerSelection = this.id;
    console.log(`player selected: ${playerSelection}`);
    // set computerSelection to
    let computerSelection = computerPlay();
    console.log(`computer selected: ${computerSelection}`);

    switch (playerSelection + computerSelection) 
    {
        // Tie case
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            resultDisplay.textContent = 'Tie!';
            break;
        // Player score
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            playerScore ++;
            resultDisplay.textContent = `${playerSelection} beats ${computerSelection}, You get the round!`;
            break;
        // Computer score    
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            computerScore ++;
            resultDisplay.textContent = `${computerSelection} beats ${playerSelection}, round for computer :(`;
            break;
    }
    addRound();
    updateRound();
    updateScore();
}

buttons.forEach(button => button.addEventListener('click', playRound, {
    // once: true,
}));