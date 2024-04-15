/* Constants, DOM elements and buttons */

const playerText = document.querySelector("#playerText");
const opponentText = document.querySelector("#opponentText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerScoreText = document.querySelector("#playerScore");
const opponentScoreText = document.querySelector("#opponentScore");
const drawScoreText = document.querySelector("#drawScore");
let player;
let opponent;
let playerScore = 0;
let opponentScore = 0;
let drawScore = 0;

/* Main game area */

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    opponentTurn();
    playerText.textContent = `Player: ${player}`;
    opponentText.textContent = `Opponent: ${opponent}`;
    result = checkWinner();
    resultText.textContent = result;
    updateScore(result);
}));

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
    if (player == opponent) {
        return "DRAW";
    }
    else if (opponent == "ROCK") {
        return (player == "SCISSOR" || player == "LIZARD") ? "YOU LOSE!" : "YOU WIN!";
    }
    else if (opponent == "PAPER") {
        return (player == "ROCK" || player == "SPOCK") ? "YOU LOSE!" : "YOU WIN!";
    }
    else if (opponent == "SCISSOR") {
        return (player == "PAPER" || player == "LIZARD") ? "YOU LOSE!" : "YOU WIN!";
    }
    else if (opponent == "LIZARD") {
        return (player == "SPOCK" || player == "PAPER") ? "YOU LOSE!" : "YOU WIN!";
    }
    else if (opponent == "SPOCK") {
        return (player == "SCISSOR" || player == "ROCK") ? "YOU LOSE!" : "YOU WIN!";
    }
}

/* Update score function */

function updateScore(result) {
    if (result === "YOU WIN!") {
        playerScore++;
    } else if (result === "YOU LOSE!") {
        opponentScore++;
    } else if (result === "DRAW") {
        drawScore++;
    }
    playerScoreText.textContent = `Player: ${playerScore}`;
    opponentScoreText.textContent = `Opponent: ${opponentScore}`;
    drawScoreText.textContent = `Draw: ${drawScore}`;
}