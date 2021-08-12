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
            document.getElementById("human-play").textContent = userPlay;
            document.getElementById("machine-play").textContent = computerPlay;

    // compare answers
            if (userPlay !== computerPlay) {
                if (userPlay === 'rock' && computerPlay === 'scissors' || userPlay === 'paper' && computerPlay === 'rock' || userPlay === 'scissors' && computerPlay === 'paper') {
                    userScore(++userWins);
                    document.getElementById("message").textContent = (`${userPlay.toUpperCase()} beats ${computerPlay.toUpperCase()}! The HUMAN wins!`);
                    roundEnd = true;
                } else {
                    // computerWins++;
                    computerScore(++computerWins);
                    document.getElementById("message").textContent = `${computerPlay.toUpperCase()} beats ${userPlay.toUpperCase()}! The MACHINE wins!`;
                    roundEnd = true;
                }
            } else {
                document.getElementById("message").textContent = "DRAW!";
                roundEnd = true;
            }  
        }
        if (userWins >= 2){
            document.getElementById("message").textContent = 'GAME OVER!';
        } else if (computerWins >= 2) {
            document.getElementById("message").textContent = 'GAME OVER!';

        }
    }


const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', 
        (e) => playRound(e.target.textContent.toLowerCase())
    )
)

