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


    const playAgainButton = document.querySelector("#play-again");

    playAgainButton.addEventListener('click', () => {
        userWins = 0;
        computerWins = 0; 
        computerScore(0); 
        userScore(0);
        playAgainButton.classList.add('hidden');
        document.getElementById("message").textContent = '';

    })
    


    function playRound(userPlay) {
        if (userWins >= 2){
            document.getElementById("message").textContent = 'GAME OVER! Human wins! \nPlay Again?';
            playAgainButton.classList.remove('hidden');
        } else if (computerWins >= 2) {
            document.getElementById("message").textContent = 'GAME OVER! Machine wins! \nPlay Again?';
            playAgainButton.classList.remove('hidden');

        } else {
            playAgainButton.classList.add('hidden');

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
            if (userWins >= 2){
                document.getElementById("message").textContent = 'GAME OVER! Human wins! \nPlay Again?';
                playAgainButton.classList.remove('hidden');
            } else if (computerWins >= 2) {
                document.getElementById("message").textContent = 'GAME OVER! Machine wins! \nPlay Again?';
                playAgainButton.classList.remove('hidden');                
            }
            }
        }
    }


const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', 
        (e) => playRound(e.target.textContent.toLowerCase())
    )
)

