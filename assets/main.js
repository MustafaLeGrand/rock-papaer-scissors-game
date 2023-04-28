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
let round = '';
roundDisplay.textContent = round;
//Add round
let addRound = () => round ++;

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
    let endScreen = document.getElementById('endScreen'); 

    if (playerScore === 5)
    {   
        resultDisplay.textContent = 'You win, human.';
    }
    else if (computerScore === 5)
    {
       
        resultDisplay.textContent = 'Computer wins!!';
    }
    else if (playerScore === 5 && computerScore === 0)
    {
        
        resultDisplay.textContent = 'Flawless victory!';
    }
    else if (computerScore === 5 && playerScore === 0)
    {
        
        resultDisplay.textContent = 'Computer whipped your ass, poor poor human'
    }

}

// Finish the game
let endgame = () => 
{
    if (playerScore == 5 || computerScore == 5) {
        round = 0;
        playerScore = 0;
        computerScore = 0;
    }
}

// Add round, sum points to round winner
function playRound () {
    // set playerSelection to 
    let playerSelection = this.id;
    console.log(`player selected: ${playerSelection}, p:${playerScore}`);

    // set computerSelection to
    let computerSelection = computerPlay();
    console.log(`computer selected: ${computerSelection}, c:${computerScore}`);

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
            resultDisplay.textContent = `${playerSelection} beats ${computerSelection}, you get the round!`;
        break;
        // Computer score    
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            computerScore ++;
            resultDisplay.textContent = `${computerSelection} beats ${playerSelection}, round for computer :(`;
        break;
    }
    defineWinner();
    endgame();
    addRound();
    updateRound();
    updateScore();
}

buttons.forEach(button => button.addEventListener('click', playRound, {
    
}));
