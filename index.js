
function getComputerChoice () {
    elements = ["Rock", "Paper", "Scissor"]
    var randomNumber = Math.floor(Math.random()*elements.length);
    return elements[randomNumber]
}
let computerSelection = getComputerChoice()
function playerSelections() {
    selections = window.prompt("Enter your choice");
    selections = selections.toLowerCase();
    return selections;
}
function game() {
    let computer = 0;
    let human = 0;
    let times = 0;
    while (times < 5) {
        let humanSelection = playerSelections();
        if (humanSelection === "rock" && computerSelection === "scissor") {
            computer++;
            console.log(computer)
        }else if (computerSelection === "rock" && humanSelection === "scissor") {
            human++;
            console.log(human);
        }else if (humanSelection === "paper" && computerSelection === "scissor") {
            computer++;
            console.log(computer);
        }else if (computerSelection === "paper" && humanSelection === "scissor") {
            human++;
            console.log(human);
        }else if (humanSelection === "rock" && computerSelection === "paper") {
            computer++;
            console.log(computer);
        }else if (computerSelection === "rock" && humanSelection === "paper") {
            human++;
            console.log(human);
        }else {
            console.log("tie");
        }
        times++;
    }
    return [human, computer];   
}
game()
function results() {
    if (human < computer) {
        console.log(`you lose computer score ${computer} and you score ${human}`)
    }else if (computer < human) {
        console.log(`you win computer score ${computer} and you score ${human}`)
    }else {
        console.log("tie")
    }
    console.log()
}