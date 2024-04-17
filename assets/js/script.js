/* Constants, selecting DOM elements and buttons */
const userText = document.querySelector("#userText");   // Select DOM to display user selection
const opponentText = document.querySelector("#opponentText");   // Select DOM to display opponent selection
const resultText = document.querySelector("#resultText");   // Select DOM to display result
const optionBtns = document.querySelectorAll(".optionBtn"); // Select DOM to representing available buttons
const userScoreText = document.querySelector("#userScore"); // Select DOM to display user score
const opponentScoreText = document.querySelector("#opponentScore"); // Select DOM to display opponent score
const drawScoreText = document.querySelector("#drawScore"); // Select DOM to display draw score
// Store user and opponent selections
let user;
let opponent;
// Store user, opponent and draw scores
let userScore = 0;
let opponentScore = 0;
let drawScore = 0;

/* Main game area */
function initializeSelection(event) {   // Activate game after user selection
    user = event.target.textContent;    // Extract user selection
    opponentTurn(); // Trigger opponent turn to make selection
    userText.textContent = `User: ${user}`; // Update text to show user selection
    opponentText.textContent = `Opponent: ${opponent}`; // Update text to show opponent selection
    result = checkWinner(); // Check game result
    resultText.textContent = result;    // Display result from the game
    updateScore(result);    //Update score based on result
 }

/* Main game function */
function opponentTurn() {

    const randNum = Math.floor(Math.random() * 5) + 1;  // Generate random number between 1-5

    // Switch statement to assign opponent's selection based on the random number
    switch (randNum) {
        case 1:
            opponent = "ROCK";      // If random number is 1, opponent chooses ROCK
            break;
        case 2:
            opponent = "PAPER";     // If random number is 2, opponent chooses PAPER
            break;
        case 3:
            opponent = "SCISSOR";   // If random number is 3, opponent chooses SCISSOR
            break;
        case 4:
            opponent = "LIZARD";    // If random number is 4, opponent chooses LIZARD
            break;
        case 5:
            opponent = "SPOCK";     // If random number is 5, opponent chooses SPOCK
            break;
    }
}

/* Winner function */
function checkWinner() {    // Check who's the winner
    if (user == opponent) { // Check for draw
        return "DRAW";
    }
    // Check for win/lose based on opponents choice
    else if (opponent == "ROCK") {
        return (user == "SCISSOR" || user == "LIZARD") ? "YOU LOSE!" : "YOU WIN!";
    }
    else if (opponent == "PAPER") {
        return (user == "ROCK" || user == "SPOCK") ? "YOU LOSE!" : "YOU WIN!";
    }
    else if (opponent == "SCISSOR") {
        return (user == "PAPER" || user == "LIZARD") ? "YOU LOSE!" : "YOU WIN!";
    }
    else if (opponent == "LIZARD") {
        return (user == "SPOCK" || user == "PAPER") ? "YOU LOSE!" : "YOU WIN!";
    }
    else if (opponent == "SPOCK") {
        return (user == "SCISSOR" || user == "ROCK") ? "YOU LOSE!" : "YOU WIN!";
    }
}

/* Update score function */
function updateScore(result) {  // Update score based on result
    if (result === "YOU WIN!") {    // Check result and update score
        userScore++;    // Incriment users score if they won
    } else if (result === "YOU LOSE!") {
        opponentScore++;    // Incriment opponent score if they won
    } else if (result === "DRAW") {
        drawScore++;    // Incriment draw score if they game ended in draw
    }
    userScoreText.textContent = `User: ${userScore}`;   // Update user score text
    opponentScoreText.textContent = `Opponent: ${opponentScore}`;   // Update opponent score text
    drawScoreText.textContent = `Draw: ${drawScore}`;   // Update draw score text
}

/* DOM */
document.addEventListener("DOMContentLoaded", (event) => {  // Event listener triggers when DOM is loaded
    optionBtns.forEach(button => button.addEventListener("click", initializeSelection));    // Event listener attached to option buttons to initialize selection
  });