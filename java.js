const game = () => {
    const options = document.querySelectorAll(".options");
    let playerScore = 0;
    let computerScore =0;
    let moves =0;

    
    const playRound = () => {
    
    
        options.forEach((option) => {
            option.addEventListener("click", function () {
              const playerSelection = this.textContent;
      
              const cOptions = ["Rock", "Paper", "Scissors"];
              const computerSelection = cOptions[Math.floor(Math.random() * 3)];
      
              compare(playerSelection, computerSelection);
              updateScore();
              if (checkWinner()){
                playerScore = computerScore = 0;
                updateScore();
              }
              
            });
          });
        

  
        function checkWinner(){
            if (playerScore === 2 || computerScore === 2 ) {
                const winner = 
                playerScore === 2 
                ? "You win"
                : "Computer wins"
                alert(winner);
                return true;
            }
            return false;
        }
    
    
    
    
        function updateScore() {
        document.getElementById("p-score").textContent = playerScore;
        document.getElementById("c-score").textContent = computerScore;
    }
     
    
    function compare(playerSelection, computerSelection) {

        const currentMatch = `${playerSelection} vs ${computerSelection}`;

        if (playerSelection === computerSelection) {
            moves++;
            
            alert(`${currentMatch} - The result is a tie. `) ;
            return;
        }
        else if(playerSelection === "Rock") { if (computerSelection === "Scissors") {
            computerScore++;
            moves++;
            alert(`${currentMatch} - Rock wins, you lose `) ;
            return;
        }
        else {
            playerScore++;
            moves++;
            alert(`${currentMatch} - Paper wins, you win`)
            return ;
        }
        } 
        else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                computerScore++;
                moves++;
                alert(`${currentMatch} - Paper wins, you lose.`);
                return ;
        
            }
            else {
                playerScore++;
                moves++;
                alert(`${currentMatch} - Scissors wins, you win`);
                return;
            }
        }
        else if (playerSelection === "Scissors") {
            if (computerSelection === "Paper") {
                computerScore++;
                moves++;
                alert(`${currentMatch} - Scissors wins, you lose`);
                return;
            }
            else {
                playerScore++;
                moves++;
                alert(`${currentMatch} - Rock wins, you win.`);
                return;
            }
        }
        
    }


}

playRound()


}

game();










