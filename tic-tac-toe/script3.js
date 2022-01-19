// Player:
const Player = (name, symbol, isAI) => {
  let score = 0;

  const addWin = () => {
    score += 1;
  };

  const getName = () => {
    return name;
  };

  const getSymbol = () => {
    return symbol;
  };

  const getScore = () => {
    return score;
  };

	this.isAI = isAI;

  return { getName, getSymbol, getScore, addWin, isAI };
};

// Game:
const Game = () => {
  console.log("game start");
  let winner = false;

  // const player1 = Player("P1", "🍀", false); 
  // const player2 = Player("P2", "🍺", false); 
  // const player1 = Player("P1", "❤️", false); 
  // const player2 = Player("P2", "😘", false);   
	// const player1 = Player("P1", "👻", false); 
  // const player2 = Player("P2", "🧛", false); 

  const player1 = Player("P1", "🍌", false); 
  const player2 = Player("P2", "🍑", false); 

	// const player1 = (() => {
	// 	let name, symbol, isAI;
	// 	while (!name){
	// 		name = prompt("Player 1's name: ")
	// 	}
	// 	while (!symbol){
	// 		symbol = prompt("Player 1's symbol: ")
	// 	}
	// 	while (!isAI){
	// 		isAI = confirm("Is this player a computer?")
	// 	}
	// 	return (Player(name, symbol, false))
	// })()

	// const player2 = (() => {
	// 	let name, symbol, isAI;
	// 	while (!name){
	// 		name = prompt("Player 2's name: ")
	// 	}
	// 	while (!symbol){
	// 		symbol = prompt("Player 2's symbol: ")
	// 	}
	// 	while (!isAI){
	// 		isAI = prompt("Is this player a computer?")
	// 	}
	// 	return (Player(name, symbol, false))
	// })()


  const playableAreas = document.querySelectorAll("section");
  const p1Score = document.getElementById("p1-score");
  const p2Score = document.getElementById("p2-score");

  const Board = (() => {
    let plays = new Array(9).fill("");

    const populateBoard = () => {
      const gameBoard = document.querySelectorAll("section");
      for (let i = 0; i < 9; i++) {
        gameBoard[i].textContent = plays[i];
      }
      console.log(`populateBoard: ${plays}`);
    };
		
    const reset = () => {
      plays = ["", "", "", "", "", "", "", "", ""];
      console.log(`RESET: ${plays}`);
      populateBoard();
    };

    const setPlay = (positionValue, symbol) => {
      console.log(`setPlay(${positionValue}, ${symbol})`);
      plays[Number(positionValue)] = symbol;
      // console.log(plays);
      populateBoard();
    };

		const updateScores = () => {
			p1Score.innerHTML = `<h3>${player1.getName()}'s Score:</h3><h4>${player1.getScore()}</h4>`;
			p2Score.innerHTML = `<h3>${player2.getName()}'s Score:</h3><h4>${player2.getScore()}</h4>`;
		}
		updateScores()

    const checkForWin = (player) => {
      const winningCombos = [
        "012",
        "345",
        "678",
        "036",
        "147",
        "258",
        "048",
        "246",
      ];
		
      winningCombos.forEach((winningCombo) => {
        if (
          plays[winningCombo[0]] == player.getSymbol() &&
          plays[winningCombo[1]] == player.getSymbol() &&
          plays[winningCombo[2]] == player.getSymbol()
        ) {
          console.log("checkForWin: true");

          alert(`${player.getName()} wins!`);
          console.log("\n\n___________WINNER___________\n\n");
          currentPlayer.addWin();
          updateScores();
          Board.reset();
          return true;
        } 
      })

			if (!plays.includes("")){
				alert(`Cat's Game!`);
				console.log("\n\n___________Cats' Game___________\n\n");
				updateScores();
				Board.reset();
				return true;
			}

      console.log("checkForWin: false");
			
      return false;
    };

		const getPlays = () => {
      console.log(`getPlays: ${plays}`);
      return plays;
    };

    const getCurrentPlayer = () => {
      //if xcount and ocount are even, player 1 turn, else player 2
      let p1Count = plays.filter((sym) => sym === player1.getSymbol()).length;
      let p2Count = plays.filter((sym) => sym === player2.getSymbol()).length;
      // console.log(p1Count > p2Count ? player2 : player1)
			const p1Text = document.getElementById("p1-score");
			const p2Text = document.getElementById("p2-score");
      if (p1Count > p2Count) {
        console.log("getCurrentPlayer: P2");
				p1Text.style.color = "rgb(0,0,0)";
				p1Text.style.backgroundColor = "inherit";
				p1Text.style.border = "none";
				p2Text.style.color = "rgb(255,255,255)";
				p2Text.style.backgroundColor = "rgb(31,31,31)";
				p2Text.style.border = "1px rgb(255,255,255) solid";
				return player2
      } else {
        console.log("getCurrentPlayer: P1");
				p1Text.style.color = "rgb(255,255,255)";
				p1Text.style.backgroundColor = "rgb(31,31,31)";
				p1Text.style.border = "1px rgb(255,255,255) solid";
				p2Text.style.color = "rgb(0,0,0)";
				p2Text.style.backgroundColor = "inherit";
				p2Text.style.border = "none";
				return player1
      }
    };

		function randomPlay() {
			let options = [];

			function randomNumber(max) {
				return Math.floor(Math.random() * max)
			}
	
			for (let i = 0; i < 9; i++) {
				if (plays[i] === "") {
					options.push(i);
				}
				// console.log(options)
			}
			// console.log(options.length)
			// console.log(randomNumber(options.length))
			setPlay(options[randomNumber(options.length)], "B")
		}

    return { reset, setPlay, checkForWin, getPlays, getCurrentPlayer, updateScores, randomPlay };
  })();

  function* infinite() {
    let index = 0;

    while (true) {
			// console.log(`Generator at: ${index}`)
      yield ++index;
    }
  }


	
	
  let gen = infinite();
	
  let currentPlayer = Board.getCurrentPlayer();
	
	// Board.randomPlay()

  playableAreas.forEach((area) => {

    area.addEventListener("mouseover", (e) => {
      if (Board.getPlays()[e.target.id] === "") {
        let symbol = currentPlayer.getSymbol();
        e.target.style.color = "rgba(0,0,0,.3)";
        e.target.textContent = symbol;
      }
    })

		if (winner === false){
			area.addEventListener("mouseup", (e) => {
				console.log(`\n______________click_${gen.next().value}_____________\n`);
				e.target.style.color = "rgba(0,0,0,1)";
				Board.setPlay(e.target.id, currentPlayer.getSymbol());
				winner = Board.checkForWin(currentPlayer);
				currentPlayer = Board.getCurrentPlayer();
			});
		}

		area.addEventListener("mouseout", (e) => {
			if (Board.getPlays()[e.target.id] === "") {
				e.target.textContent = "";
				e.target.style.color = "rgba(0,0,0,1)";
			}
		});

	});
};

Game();
