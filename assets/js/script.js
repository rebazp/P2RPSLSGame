const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const scoreText = document.querySelector("#scoreText");
const choiceButton = document.querySelectorAll("choiceButton");
let player;
let computer;
let score;

choiceButtons.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
}))

function computerTurn(){

    const randNum = Math.floor(Math.random() * 5) + 1;
    
    switch (randNum){
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