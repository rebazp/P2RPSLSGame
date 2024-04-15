/* Constants, DOM elements and buttons */

const userText = document.querySelector("#userText");
const opponentText = document.querySelector("#opponentText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const userScoreText = document.querySelector("#userScore");
const opponentScoreText = document.querySelector("#opponentScore");
const drawScoreText = document.querySelector("#drawScore");
let user;
let opponent;
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

    const randNum = Math.floor(Math.random() * 5) + 1;

    switch (randNum) {
        case 1:
            opponent = "ROCK";
            break;
        case 2:
            opponent = "PAPER";
            break;
        case 3:
            opponent = "SCISSOR";
            break;
        case 4:
            opponent = "LIZARD";
            break;
        case 5:
            opponent = "SPOCK";
            break;

    }
}

/* Winner function */

function checkWinner() {
    if (user == opponent) {
        return "DRAW";
    }
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

function updateScore(result) {
    if (result === "YOU WIN!") {
        userScore++;
    } else if (result === "YOU LOSE!") {
        opponentScore++;
    } else if (result === "DRAW") {
        drawScore++;
    }
    userScoreText.textContent = `User: ${userScore}`;
    opponentScoreText.textContent = `Opponent: ${opponentScore}`;
    drawScoreText.textContent = `Draw: ${drawScore}`;
}

/* DOM */

document.addEventListener("DOMContentLoaded", (event) => {  // Event listener triggers when DOM is loaded
    choiceBtns.forEach(button => button.addEventListener("click", initializeSelection));    // Event listener attached to choice buttons to initialize selection
  });