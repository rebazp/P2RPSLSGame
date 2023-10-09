/**
 * Constants, DOM elements and buttons 
 */

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

/**
 * Main game function
 */

function computerTurn() {

    const randNum = Math.floor(Math.random() * 5) + 1;

    switch (randNum) {
        case 1:
            computer = "ROCK";
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

/**
 * Winner function
 */

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
        return (player == "SPOCK") ? "YOU WIN!" : "YOU LOSE!";
    }
    else if (computer == "SPOCK") {
        return (player == "SCISSOR") ? "YOU WIN!" : "YOU LOSE!";
    }
}
