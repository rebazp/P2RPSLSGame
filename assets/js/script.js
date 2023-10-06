/**
 * Constants, DOM elements and buttons 
 */

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const scoreText = document.querySelector("#scoreText");
const choiceButton = document.querySelectorAll("choiceButton");
let player;
let computer;
let score;

choiceButton.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    scoreText.textContent = checkWinner();
}));

function computerTurn() {

    const randNum = Math.floor(Math.random() * 5) + 1;

    switch (randNum) {
        case 1:
            comnputer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSOR";
            break;
        case 4:
            computer = "LIZARD";
            break;
        case 5:
            computer = "SPOCK";
            break;

    }
}

function checkWinner() {
    if (player == computer) {
        return "DRAW";
    }
    else if (computer == "ROCK") {
        return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if (computer == "PAPER") {
        return (player == "SCISSOR") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if (computer == "SCISSOR") {
        return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if (computer == "LIZARD") {
        return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if (computer == "LIZARD") {
        return (player == "SCISSOR") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if (computer == "SPOCK") {
        return (player == "LIZARD") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if (computer == "SPOCK") {
        return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!";
    }
}