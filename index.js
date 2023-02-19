let humanSelection = '';
let computerSelection = '';
let computerScore = 0;
let fail = 0;
let humanScore = 0;
let playerName = window.prompt("what is your first name?"); 

// getting the user choice
const humanDisplayEl = document.querySelector('#human_results-el');
const computerDisplayEl = document.querySelector('#computer_results-el');
const resultWordsEl = document.querySelector('#result_words-el')
const paper = document.querySelector("#paper");
const computer = document.getElementById('computer');
const human = document.getElementById('human');
 paper.addEventListener('click', function() {
    if (computerScore === 5 && humanScore == 5){
        resultWordsEl.textContent = "Draw Game!";
    }else if (computerScore === 5 && humanScore < 5) {
        resultWordsEl.textContent = "You lose!";
    }else if (humanScore === 5 && computerScore < 5) {
        resultWordsEl.textContent = "you won";
    }else{
        humanSelection = paper.id;
        computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        human.textContent = humanSelection;
        computer.textContent = computerSelection;
    }
    
})
const rock= document.querySelector("#rock");
 rock.addEventListener('click', function() {
    if (computerScore === 5 && humanScore == 5){
        resultWordsEl.textContent = "Draw Game!";
    }else if (computerScore === 5 && humanScore < 5) {
        resultWordsEl.textContent = "You lose!";
    }else if (humanScore === 5 && computerScore < 5) {
        resultWordsEl.textContent = "you won";
    }else{
        humanSelection = rock.id;
        computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        human.textContent = humanSelection;
        computer.textContent = computerSelection;
    }
    
})
const scissor = document.querySelector("#scissor");
 scissor.addEventListener('click', function() {
    if (computerScore === 5 && humanScore == 5){
        resultWordsEl.textContent = "Draw Game!";
    }else if (computerScore === 5 && humanScore < 5) {
        resultWordsEl.textContent = "You lose!";
    }else if (humanScore === 5 && computerScore < 5) {
        resultWordsEl.textContent = "you won";
    }else{
        humanSelection = scissor.id;
        computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        human.textContent = humanSelection;
        computer.textContent = computerSelection;
    }
     
})

function getComputerChoice() {
     elements = ["rock", "paper", "scissor"];
     var randomNumber = Math.floor(Math.random()*elements.length);
     return elements[randomNumber];
}

 function playRound(computerSelection, humanSelection) {
     if (computerSelection === humanSelection) {
        fail = 0;
        humanDisplayEl.textContent = playerName + ": " + humanScore;
        computerDisplayEl.textContent = "Cyrus" + ":" + computerScore;
         resultWordsEl.textContent = "tie";
     }
     else if (computerSelection === "rock" && humanSelection === "scissor" ||
             computerSelection === 'scissor' && humanSelection === "paper" ||
             computerSelection === "paper" && humanSelection === "rock") {
                 computerScore++;
                 fail++;
                 humanDisplayEl.textContent = playerName + ": " + humanScore;
                 computerDisplayEl.textContent = "Cyrus" + ":" + computerScore;
                 if (fail === 1) {resultWordsEl.textContent = "sorry my friend";}
                 else if (fail === 2) {resultWordsEl.textContent = "Ooooops!!!! sorry";}
                 else if (fail === 5) {resultWordsEl.textContent = "You're not good at this game, you lost with a zero";}
                 else {resultWordsEl.textContent = "Sorry!";}
             }
     else {
        humanScore++;
        fail = 0;
        humanDisplayEl.textContent = playerName + ": " + humanScore;
        computerDisplayEl.textContent = "Cyrus" + ":" + computerScore;
        resultWordsEl.textContent = "great job my friend";
     }
 }
 
