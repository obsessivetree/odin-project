function game() {
// show total wins and losses for player
    let userWins = 0;
    let computerWins = 0;
    let roundEnd = false;
    let userPlay = "";
    let computerPlay = "";
    // check for which input

    function userPlayFunc() {
        userPlay = "";
        while (userPlay !== "rock" && userPlay !== "scissors" && userPlay !== "paper"){
            userPlay = prompt("Rock, Paper, or Scissors?: ").toLowerCase();
        }
    }

    // generate random play from computer
    function computerPlayFunc() {
        const index = Math.floor(Math.random()*3);
        const playOptions = ['rock','paper','scissors'];
        computerPlay = playOptions[index];
    }

    
    function playRound() {
        while (roundEnd === false){
    // take INPUT of rock paper or scissors from user

            userPlayFunc();
            computerPlayFunc();
            
    // const userPlay = userPlayFunc();
    // compare answers
            if (userPlay !== computerPlay) {
                if (userPlay === 'rock' && computerPlay === 'scissors' || userPlay === 'paper' && computerPlay === 'rock' || userPlay === 'scissors' && computerPlay === 'paper') {
                    userWins++;
                    roundEnd = true;
                    alert(`${userPlay.toUpperCase()} beats ${computerPlay.toUpperCase()}! The HUMAN wins! The score is: \nHUMAN ${userWins} - MACHINES ${computerWins}`);
                } else {
                    computerWins++;
                    roundEnd = true;
                    alert(`${computerPlay.toUpperCase()} beats ${userPlay.toUpperCase()}! The MACHINES win! The score is: \HUMAN ${userWins} - MACHINES ${computerWins}`);
                }
            } else {
                roundEnd = true;
                alert("DRAW!")
            } 
        }
            if (roundEnd === true) {
                    let answer = "";
                    while (answer !== 'yes' && answer !== 'no'){
                        answer = prompt("Play Again? (yes/no): ");
                    }
                    if (answer === 'yes'){
                        roundEnd = false;
                        playRound();
                    } else {
                        alert(`Thanks for playing! The final score is: \nHUMAN ${userWins} - MACHINES ${computerWins}`)
                    }
                }
        
    }
    playRound();
    // if (roundEnd === true) {
    //     let answer = "";
    //     while (answer !== 'yes' || answer !== 'no'){
    //         answer = prompt("Play Again? (yes/no): ");
    //     }
    //     if (answer === 'yes'){
    //         roundEnd = false;
    //     } else {
    //         return ("Thanks for playing!")
    //     }
    // }
    
}


console.log(game());