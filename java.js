const computerChoice = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random()* computerChoice.length)
console.log(computerChoice[random])

function getComputerChoice() {
    return computerChoice[random]
}

const computerSelection = getComputerChoice();

let playerSelection = prompt("Rock" + " "+ "paper" + " " + "scissors" + "?").toLowerCase();


let compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie."
    }
    else if(choice1 === "rock") { if (choice2 === "scissors") {
        return "rock wins"
    }
    else {
        return "paper wins"
    }
    } 
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins, you lose."
        }
        else {
            return "scissors wins, you win."
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "scissors wins, you lose"
        }
        else {
            return "rock wins, you win."
        }
    }
}

alert (compare(computerSelection, playerSelection))
