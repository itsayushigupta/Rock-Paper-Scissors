let playGame=confirm("Shall we play rock, paper, scissors?");

if(playGame) {
    // play the game 
    let playerChoice=prompt("Please enter rock, paper or scissors");

    if(playerChoice) {
        let playerOne=playerChoice.trim().toLowerCase();

        if(playerOne==="rock" || playerOne==="paper" || playerOne==="scissors") {
            // time for computer to make choice: generate a random number between 1 to 3
            let computerChoice=Math.floor(Math.random()*3+1);
            let computer=computerChoice===1 ? "rock"
            : computerChoice===2 ? "paper"
            : "scissors";

            // result 
            let result=
            playerOne===computer
                ? "Tie Game!"
                : playerOne==="rock" && computer==="paper"
                ? `playerOne: ${playerOne}\nComputer:${computer}\nComputer Wins!`
                : playerOne==="paper" && computer==="scissors"
                ? `playerOne: ${playerOne}\nComputer:${computer}\nComputer Wins!`
                : playerOne==="scissors" && computer==="rock"
                ? `playerOne: ${playerOne}\nComputer:${computer}\nComputer Wins!`
                : `playerOne: ${playerOne}\nComputer:${computer}\nPlayerOne Wins!`;
            alert(result);
            
            let playAgain=confirm("Play again?");
            playAgain ? location.reload() : alert("Thanks for playing"); 
            }

        else {
            alert("You did not enter rock, paper or scissors");
        }
    }

    else {
        alert("You changed your mind not to play");
    }
}

else {
    alert("Maybe, next time!");
}