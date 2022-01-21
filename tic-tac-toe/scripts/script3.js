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

  const setSymbol = (newSymbol) => {
    symbol = newSymbol;
    return symbol
  }
  
  const getScore = () => {
    return score;
  };

	this.isAI = isAI;

  return { getName, getSymbol, getScore, addWin, isAI, setSymbol };
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

  // const player1 = Player("Player 1", "🍌", false); 
  // const player2 = Player("Player 2", "🍑", false); 
  const p1Name = document.getElementById("p1-name").textContent;
  const p2Name = document.getElementById("p2-name").textContent;

  const p1Symbol = document.getElementById("p1-symbol").textContent.trim();
  const p2Symbol = document.getElementById("p2-symbol").textContent.trim();

  const isP1Ai = () => {
    if (document.getElementById("ai-select-btn-p1").textContent === "Playing as Computer") {
      return true
    }
    return false
  }
  const isP2Ai = () => {
    if (document.getElementById("ai-select-btn-p2").textContent === "Playing as Computer") {
      return true
    }
    return false
  }


  const player1 = Player(p1Name, p1Symbol, isP1Ai()); 
  const player2 = Player(p2Name, p2Symbol, isP2Ai());   
  console.log(player1.isAI)
  console.log(player2.isAI)
  document.getElementById("p1-symbol").textContent = player1.getSymbol();
  document.getElementById("p2-symbol").textContent = player2.getSymbol();

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
  const p1Wins = document.getElementById("p1-wins");
  const p2Wins = document.getElementById("p2-wins");

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
      if (player1.getScore() !== 0 || player2.getScore() !== 0) {
        p1Wins.innerHTML = `<td>Wins:</td> <td>${player1.getScore()}</td>`;
        p2Wins.innerHTML = `<td>Wins:</td> <td>${player2.getScore()}</td>`;
      }
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
			const p1ScoreBox = document.getElementById("p1-score");
			const p2ScoreBox = document.getElementById("p2-score");
      if (p1Count > p2Count) {
        console.log("getCurrentPlayer: P2");
				p1ScoreBox.classList.remove("active-player");
        p2ScoreBox.classList.add("active-player");
				return player2
      } else {
        console.log("getCurrentPlayer: P1");
				p1ScoreBox.classList.add("active-player");
        p2ScoreBox.classList.remove("active-player");
				return player1
      }
    };
    const changeSymbol = (player, symbol) => {
      const oldSymbol = player.getSymbol();
      const newSymbol = player.setSymbol(symbol);

      plays = plays.map(sym => sym === oldSymbol ? sym = newSymbol : sym = sym)
    }
    const computerPlay = (difficulty="none") => {
      const randomPlay = (player) => {
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
        setPlay(options[randomNumber(options.length)], player.getSymbol())
      }
      if (difficulty === "none"){
        if (player1.isAI && Board.getCurrentPlayer() === player1) {
          randomPlay(player1)
        }
        if (player2.isAI && Board.getCurrentPlayer() === player2) {
          randomPlay(player2)
        }
      }
      currentPlayer = Board.getCurrentPlayer();
    }
		

    return { reset, setPlay, checkForWin, getPlays, getCurrentPlayer, updateScores, computerPlay, changeSymbol };
  })();
  
 
	
  let currentPlayer = Board.getCurrentPlayer();
	
	Board.computerPlay()

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
				// console.log(`\n______________click_${gen.next().value}_____________\n`);
				console.log(`\n______________click______________\n`);
				e.target.style.color = "rgba(0,0,0,1)";
				Board.setPlay(e.target.id, currentPlayer.getSymbol());
        winner = Board.checkForWin(currentPlayer);
				Board.computerPlay()
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

(() => {

  const aiBtnP1 = document.getElementById("ai-select-btn-p1");
  const aiBtnP2 = document.getElementById("ai-select-btn-p2");
  const aiBtns = document.querySelectorAll(".ai-selects");
  const editBtns = document.querySelectorAll(".edit-icon");
  const playBtn = document.getElementById("play-btn");
  playBtn.addEventListener('click', Game);
  
  
  editBtns.forEach(button => button.addEventListener("click", e => {
      let text = prompt("");
      e.target.parentElement.parentElement.parentElement.firstElementChild.textContent = text
  }))

  aiBtns.forEach(button => button.addEventListener("click", e => {
    if (e.target.textContent === "Playing as Human"){
      e.target.textContent = "Playing as Computer"
      e.target.id === aiBtnP1.id 
      ? aiBtnP2.textContent = "Playing as Human" 
      : aiBtnP1.textContent = "Playing as Human"
    } else {
      e.target.textContent = "Playing as Human"
    }
  }))
})()
