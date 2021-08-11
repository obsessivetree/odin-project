    let userWins = 0;
    let computerWins = 0;


    function userScore(score){
        document.querySelector("#human-score").textContent = score;
    }
    function computerScore(score) {
        document.querySelector("#machine-score").textContent = score;
    }


    function computerPlayFunc() {
        const index = Math.floor(Math.random()*3);
        const playOptions = ['rock','paper','scissors'];
        return (playOptions[index])
    }
    
    
    function playRound(userPlay) {
        let roundEnd = false;
        let computerPlay = "";

        while (roundEnd === false){       
            computerPlay = computerPlayFunc();    
    // compare answers
            if (userPlay !== computerPlay) {
                if (userPlay === 'rock' && computerPlay === 'scissors' || userPlay === 'paper' && computerPlay === 'rock' || userPlay === 'scissors' && computerPlay === 'paper') {
                    userScore(++userWins);
                    console.log(userPlay)
                    console.log(`${userPlay} beats ${computerPlay}! The HUMAN wins! The score is: \nHUMAN ${userWins} - MACHINES ${computerWins}`);
                    roundEnd = true;
                } else {
                    // computerWins++;
                    computerScore(++computerWins);
                    console.log(userPlay)
                    console.log(`${computerPlay} beats ${userPlay}! The MACHINES win! The score is: \HUMAN ${userWins} - MACHINES ${computerWins}`);
                    roundEnd = true;
                }
            } else {
                console.log("DRAW!")
                roundEnd = true;
            }  
        }
    }


const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', 
        (e) => playRound(e.target.textContent.toLowerCase())
    )
)

