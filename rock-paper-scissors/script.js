function game() {
// show total wins and losses for player
    let userWins = 0;
    let computerWins = 0;
    let roundEnd = false;
    let userPlay;
    let computerPlay = "";
    let userScore = document.querySelector("#human-score").textContent;
    let computerScore = document.querySelector("#machine-score").textContent;
    // check for which input

    // generate random play from computer
    function computerPlayFunc() {
        const index = Math.floor(Math.random()*3);
        const playOptions = ['rock','paper','scissors'];
        computerPlay = playOptions[index];
    }
    // user input

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', (e) => {
        playRound(e.target.id)
        console.log(e.target.id)}))
    
    function playRound(userPlay) {
        while (roundEnd === false){
    // take INPUT of rock paper or scissors from user

            computerPlayFunc();
            
    // compare answers
            if (userPlay !== computerPlay) {
                if (userPlay === 'rock' && computerPlay === 'scissors' || userPlay === 'paper' && computerPlay === 'rock' || userPlay === 'scissors' && computerPlay === 'paper') {
                    userWins++;
                    userScore = userWins;
                    roundEnd = true;
                    alert(`${userPlay.toUpperCase()} beats ${computerPlay.toUpperCase()}! The HUMAN wins! The score is: \nHUMAN ${userWins} - MACHINES ${computerWins}`);
                } else {
                    computerWins++;
                    computerScore = computerWins;
                    roundEnd = true;
                    alert(`${computerPlay.toUpperCase()} beats ${userPlay.toUpperCase()}! The MACHINES win! The score is: \HUMAN ${userWins} - MACHINES ${computerWins}`);
                }
            } else {
                roundEnd = true;
                alert("DRAW!")
            }  
        }
    }
    // NEED TO FIGURE OUT HOW TO KEEP THE GAME GOING AND WAIT FOR CLICKS
    // while (computerWins < 2 || userWins < 2){    }
}
game()


