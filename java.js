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
            if (playerScore === 5 || computerScore === 5 ) {
                const winner = 
                playerScore === 5 
                ? "🎉🎉🎉 You win 🎉🎉🎉"
                : "💔 Computer wins 💔"
                document.getElementById("text").innerHTML = (winner)
                return true;
            }
            return false;
        }
    
    
    
    
        function updateScore() {
        document.getElementById("p-score").textContent = playerScore;
        document.getElementById("c-score").textContent = computerScore;
    }
     
    
    function compare(playerSelection, computerSelection) {

        
        if (playerSelection === computerSelection) {
            moves++;
            
            document.getElementById("text").innerHTML = "The result is a Tie 👉👈";
            
            return;
        }
        else if(playerSelection === "Rock") { if (computerSelection === "Scissors") {
            computerScore++;
            moves++;
            document.getElementById("text").innerHTML = "  🎉 Rock vs Scissors --- Rock wins, so you win 🎉";
            return;
        }
        else {
            playerScore++;
            moves++;
            document.getElementById("text").innerHTML = "😢 Rock vs Paper --- Paper wins, so you lose. 😢"
            return ;
        }
        } 
        else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                computerScore++;
                moves++;
                document.getElementById("text").innerHTML =  "🎉 Paper vs Rock --- Paper wins, you win. 🎉";
                return ;
        
            }
            else {
                playerScore++;
                moves++;
                document.getElementById("text").innerHTML = "😢 Paper vs Scissors --- Scissors wins, you lose 😢"
                return;
            }
        }
        else if (playerSelection === "Scissors") {
            if (computerSelection === "Paper") {
                computerScore++;
                moves++;
                document.getElementById("text").innerHTML = "🎉 Scissors vs Paper --- Scissors wins, you win 🎉";
                return;
            }
            else {
                playerScore++;
                moves++;
                document.getElementById("text").innerHTML =  "😢 Scissors vs Rock --- Rock wins, you lose 😢";
                return;
            }
        }
        
    }


}

playRound()


}

game();










