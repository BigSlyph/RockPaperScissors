const game = () => {
    let playerScore = 0;
    let computerScore =0;
    let moves =0;

    
    const playRound = () => {
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
            moves++;
            return "The result is a tie."
        }
        else if(choice1 === "rock") { if (choice2 === "scissors") {
            computerScore++;
            moves++;
            return "rock wins, you lose"
        }
        else {
            playerScore++;
            moves++;
            return "paper wins, you win"
        }
        } 
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
                computerScore++;
                moves++;
                return "paper wins, you lose."
        
            }
            else {
                playerScore++;
                moves++;
                return "scissors wins, you win."
            }
        }
        else if (choice1 === "scissors") {
            if (choice2 === "paper") {
                computerScore++;
                moves++;
                return "scissors wins, you lose"
            }
            else {
                playerScore++;
                moves++;
                return "rock wins, you win."
            }
        }
        
    }
     
    alert (compare(computerSelection, playerSelection)) 
}
const gameOver = () => {
    if (computerScore > playerScore) {
        return "Victory"
    }
    else {
        return "Defeat"
    }
}
playRound();
playRound();
playRound();
playRound();
playRound();
alert (gameOver())

}

game();










