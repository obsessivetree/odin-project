// Player:
const Player = (name, symbol, isAI) => {
  let score = 0;

  const addWin = (reset=false) => {
    reset ? score = 0 : score += 1;
  };

  const getName = () => {
    return name;
  };

  const getSymbol = () => {
    return symbol;
  };

  const setSymbol = (newSymbol) => {
    symbol = newSymbol;
    return symbol;
  };

  const getScore = () => {
    return score;
  };

  this.isAI = isAI;

  return { getName, getSymbol, getScore, addWin, isAI, setSymbol };
};

// Game:
const Game = () => {
  console.log("game start");
  
  let   winner                 = false;
  const p1Name                 = document.getElementById("p1-name").textContent;
  const p2Name                 = document.getElementById("p2-name").textContent;
  const p1Symbol               = document.getElementById("p1-symbol").textContent.trim();
  const p2Symbol               = document.getElementById("p2-symbol").textContent.trim();
  const playableAreas          = document.querySelectorAll("section");
  const p1Wins                 = document.getElementById("p1-wins");
  const p2Wins                 = document.getElementById("p2-wins");
  const switchPlayersBtn       = document.getElementById("switch-players-btn");
        switchPlayersBtn.style = "visibility: hidden; display: none;";
  
  const isP1Ai = () => {
    if (
      document.getElementById("ai-select-btn-p1").textContent ===
      "Playing as Computer"
    ) {
      return true;
    }
    return false;
  };

  const isP2Ai = () => {
    if (
      document.getElementById("ai-select-btn-p2").textContent ===
      "Playing as Computer"
    ) {
      return true;
    }
    return false;
  };

  const player1 = Player(p1Name, p1Symbol, isP1Ai());
  const player2 = Player(p2Name, p2Symbol, isP2Ai());

  document.getElementById("p1-symbol").textContent = player1.getSymbol();
  document.getElementById("p2-symbol").textContent = player2.getSymbol();

  const Board = (() => {
    let plays = new Array(9).fill("");
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
      // currentPlayer = getCurrentPlayer()
    };

    const updateScores = (reset=false) => {
      if (player1.getScore() !== 0 || player2.getScore() !== 0) {
        p1Wins.innerHTML = `<td>Wins:</td> <td>${player1.getScore()}</td>`;
        p2Wins.innerHTML = `<td>Wins:</td> <td>${player2.getScore()}</td>`;
      } else {
        p1Wins.innerHTML = "";
        p2Wins.innerHTML = "";
      }
    };

    const checkForWin = (player) => {
      
      const p1ScoreBox   = document.getElementById("p1-score");
      const p2ScoreBox   = document.getElementById("p2-score");


      winningCombos.forEach((winningCombo) => {
        if (
          plays[winningCombo[0]] === player.getSymbol() &&
          plays[winningCombo[1]] === player.getSymbol() &&
          plays[winningCombo[2]] === player.getSymbol()
        ) {
          console.log("checkForWin: true");
          alert(`${player.getName()} wins!`);
          // console.log("\n\n___________WINNER___________\n\n");
          player.addWin();
          updateScores();
          Board.reset();
          // playAgainBtn.style.visibility = "visible";
          // playAgainBtn.style.display = "initial";
          currentPlayer = getCurrentPlayer(initial=true)
          // p1ScoreBox.classList.remove("active-player")                                  
          // p2ScoreBox.classList.remove("active-player")                                  
          return true;
        }
      });

      if (!plays.includes("")) {
        alert(`Cat's Game!`);
        // console.log("\n\n___________Cats' Game___________\n\n");
        updateScores();
        Board.reset();
        // playAgainBtn.style.visibility = "visible";
        // playAgainBtn.style.display = "initial";
        currentPlayer = getCurrentPlayer(initial=true)
        // p1ScoreBox.classList.remove("active-player")
        // p2ScoreBox.classList.remove("active-player")                                  
        return true;
      }
      
      currentPlayer = getCurrentPlayer();
      Board.computerPlay();
      console.log("checkForWin: false");

      return false;
    };

    const getPlays = () => {
      console.log(`getPlays: ${plays}`);
      return plays;
    };

    const getCurrentPlayer = (initial=false) => {

      //if xcount and ocount are even, player 1 turn, else player 2
      let   p1Count    = plays.filter((sym) => sym === player1.getSymbol()).length;
      let   p2Count    = plays.filter((sym) => sym === player2.getSymbol()).length;
      const p1ScoreBox = document.getElementById("p1-score");
      const p2ScoreBox = document.getElementById("p2-score");

      initial === false ? console.log("Not initial") : console.log("initial")

      if (p1Count > p2Count) {
        console.log("getCurrentPlayer: P2");
        if (initial === false){
          p2ScoreBox.classList.add("active-player");
        } 
        p1ScoreBox.classList.remove("active-player");

        return player2;
      } else {
        console.log("getCurrentPlayer: P1");
        if (initial === false){
          p1ScoreBox.classList.add("active-player");
        }
        p2ScoreBox.classList.remove("active-player");

        return player1;
      }
    };

    const changeSymbol = (player, symbol) => {
      const oldSymbol = player.getSymbol();
      const newSymbol = player.setSymbol(symbol);

      plays = plays.map((sym) =>
        sym === oldSymbol ? (sym = newSymbol) : (sym = sym)
      );
    };

    function computerPlay(difficulty="none") {
      if (currentPlayer.isAI) {
          // pause(300)

        let options = [];
        for (let i = 0; i < 9; i++) {
          if (plays[i] === "") {
            options.push(i);
          }
        }
        
        const randomPlay = (player) => {
          const randomNumber = (max) => {return Math.floor(Math.random() * max);}
          setPlay(options[randomNumber(options.length)], player.getSymbol());
        };
        function pause(numberMillis) { 
          var now = new Date(); 
          var exitTime = now.getTime() + numberMillis; 
          while (true) { 
              now = new Date(); 
              if (now.getTime() > exitTime) 
                  return; 
          } 
      } 
        if (difficulty === "none"){
          randomPlay(currentPlayer)
          
        } 
        // else if (difficulty === "easy"){
        //   let otherPlayer         = currentPlayer == = player1 ? player2 : player1;
        //   let currentPlayerSymbol = currentPlayer.getSymbol();
        //   let otherPlayerSymbol   = otherPlayer.getSymbol();
        //   winningCombos.forEach((winningCombo) => {
        //     if (
        //       plays[winningCombo[0]] === currentPlayerSymbol &&
        //       plays[winningCombo[1]] === currentPlayerSymbol &&
        //       plays[winningCombo[2]] === "" 
        //     ) {
        //       setPlay(plays[winningCombo[2]], currentPlayerSymbol)
        //       return
        //     } else if (
        //       plays[winningCombo[0]] === currentPlayerSymbol &&
        //       plays[winningCombo[1]] === "" &&
        //       plays[winningCombo[2]] === currentPlayerSymbol 
        //     ) {
        //       setPlay(plays[winningCombo[1]], currentPlayerSymbol)
        //       return
        //     } else if (
        //       plays[winningCombo[0]] === "" &&
        //       plays[winningCombo[1]] === currentPlayerSymbol &&
        //       plays[winningCombo[2]] === currentPlayerSymbol
        //     ) {
        //       setPlay(plays[winningCombo[0]], currentPlayerSymbol)
        //       return
        //     } else {
        //       if (
        //         plays[winningCombo[0]] === otherPlayerSymbol &&
        //         plays[winningCombo[1]] === otherPlayerSymbol &&
        //         plays[winningCombo[2]] === "" 
        //       ){
        //         setPlay(plays[winningCombo[2]], currentPlayerSymbol)
        //         return
        //       } else if (
        //         plays[winningCombo[0]] === otherPlayerSymbol &&
        //         plays[winningCombo[1]] === ""                      &&
        //         plays[winningCombo[2]] === otherPlayerSymbol 
        //       ) {
        //         setPlay(plays[winningCombo[1]], currentPlayerSymbol)
        //         return
        //       } else if (
        //         plays[winningCombo[0]] === "" &&
        //         plays[winningCombo[1]] === otherPlayerSymbol &&
        //         plays[winningCombo[2]] === otherPlayerSymbol
        //       ) {
        //         setPlay(plays[winningCombo[0]], currentPlayerSymbol)
        //         return
        //       } else {
        //         randomPlay(currentPlayer)
        //         return
        //       }
        //     }
        //   })
        // }
        Board.checkForWin(currentPlayer);
      }
    };

    return {
      reset,
      setPlay,
      checkForWin,
      getPlays,
      getCurrentPlayer,
      updateScores,
      computerPlay,
      changeSymbol,
    };
  })();

  let currentPlayer = Board.getCurrentPlayer();

  Board.computerPlay();

  playableAreas.forEach((area) => {
    area.addEventListener("mouseover", (e) => {
      if (Board.getPlays()[e.target.id] === "") {
        let symbol = currentPlayer.getSymbol();
        e.target.style.color = "rgba(0,0,0,.3)";
        e.target.textContent = symbol;
      }
    });

    if (winner === false) {
      area.addEventListener("mouseup", (e) => {
        console.log(`\n______________click______________\n`);
        e.target.style.color = "rgba(0,0,0,1)";
        Board.setPlay(e.target.id, currentPlayer.getSymbol());
        winner = Board.checkForWin(currentPlayer);
        Board.computerPlay();
        winner = Board.checkForWin(currentPlayer);
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
  const aiBtnP1          = document.getElementById("ai-select-btn-p1");
  const aiBtnP2          = document.getElementById("ai-select-btn-p2");
  const aiBtns           = document.querySelectorAll(".ai-selects");
  const editBtns         = document.querySelectorAll(".edit-icon");
  const newGameBtn       = document.getElementById("play-btn");
  const resetBtn         = document.getElementById("reset-btn");
  const switchPlayersBtn = document.getElementById("switch-players-btn");
  const p1Name           = document.getElementById("p1-name");
  const p2Name           = document.getElementById("p2-name");
  const p1Symbol         = document.getElementById("p1-symbol");
  const p2Symbol         = document.getElementById("p2-symbol");
  const themeBtns        = document.querySelectorAll(".theme");
  const body             = document.querySelector("body");
  const themeObj = {
    "theme-default" : {
      "p1Sym" : "X", 
      "p2Sym" : "O",
      "p1Name": "Player 1",
      "p2Name": "Player 2"
    },
    "theme-valentine" : {
      "p1Sym" : "❤️", 
      "p2Sym" : "😘",
      "p1Name": "Player 1",
      "p2Name": "Player 2"
    },
    "theme-st-pat" : {
      "p1Sym" : "🍀", 
      "p2Sym" : "🍺",
      "p1Name": "Player 1",
      "p2Name": "Player 2"
    },
    "theme-fruit" : {
      "p1Sym" : "🍌", 
      "p2Sym" : "🍑",
      "p1Name": "Player 1",
      "p2Name": "Player 2"
    },
    "theme-halloween" : {
      "p1Sym" : "👻",
      "p2Sym" : "🧛",
      "p1Name": "Player 1",
      "p2Name": "Player 2"
    }
  }

  Object.keys(sessionStorage).forEach(key => {
    let element = document.getElementById(key);
    if (element){
      if (element === body){
        body.classList = sessionStorage.getItem(key);
        themeBtns.forEach(theme => {
          if (theme.id === sessionStorage.getItem(key)){
            theme.classList.add("active"); 
            document.getElementById("theme-dropdown").textContent = theme.textContent;
          }
        })

      } else {
        element.textContent = sessionStorage.getItem(key)
      }
    } 
    
  });

  const sessionStoreSymbols = () => {
    sessionStorage.setItem(p1Symbol.id, p1Symbol.textContent)
    sessionStorage.setItem(p2Symbol.id, p2Symbol.textContent) 
  };

  const sessionStoreNames = () => {
    sessionStorage.setItem(p1Name.id, p1Name.textContent)
    sessionStorage.setItem(p2Name.id, p2Name.textContent) 
  };
  const sessionStoreAi = () => {
    sessionStorage.setItem(aiBtnP1.id, aiBtnP1.textContent)
    sessionStorage.setItem(aiBtnP2.id, aiBtnP2.textContent)
  }

  themeBtns.forEach( (theme) => {
    theme.addEventListener('click', () => {
      // let previous = document.querySelector(".active")
      // console.log(previous.id)
      body.classList = theme.id;
      themeBtns.forEach(theme => theme.classList.remove("active"));
      theme.classList.add("active");
      Object.keys(themeObj).forEach(key => {
        if (key === theme.id){
          p1Symbol.textContent = themeObj[key]["p1Sym"];
          p2Symbol.textContent = themeObj[key]["p2Sym"];
          
        }
      })
     
      document.getElementById("theme-dropdown").textContent = theme.textContent;

      sessionStoreSymbols();
      sessionStoreNames();
      sessionStorage.setItem(body.id, body.classList)
    })
  });
  
  switchPlayersBtn.addEventListener('click', () => {
    const ai1                  = aiBtnP1.textContent;
          aiBtnP1.textContent  = aiBtnP2.textContent;
          aiBtnP2.textContent  = ai1;
          // sessionStoreSymbols();
    const n1                   = p1Name.textContent;
          p1Name.textContent   = p2Name.textContent;
          p2Name.textContent   = n1;
          // sessionStoreSymbols();
    const s1                   = p1Symbol.textContent;
          p1Symbol.textContent = p2Symbol.textContent;
          p2Symbol.textContent = s1;
          sessionStoreSymbols();
          sessionStoreNames();
          sessionStoreAi();
  });

  function editBtnFunc(e) {
    let regEx = new RegExp('p[1|2]-symbol', 'i');
    let targetElement = e.target.parentElement.parentElement.parentElement.firstElementChild;
    
    let text = prompt("");
    targetElement.textContent = text;

    if (regEx.test(targetElement.id)){
      if (targetElement.id[1]==="1") {
        let p2Sym = document.getElementById("p2-symbol");
        while (text === p2Sym.textContent){
          text = prompt("You can't have the same symbol!")
        }
        targetElement.textContent = text;
      } else {
        let p1Sym = document.getElementById("p1-symbol");
        while (text === p1Sym.textContent){
          text = prompt("You can't have the same symbol!")
        }
        targetElement.textContent = text;
      }
    }
    sessionStorage.setItem(`${targetElement.id}`, `${text}`)
  };

  function aiSwitch(e) {
    const playAsComp = "Playing as Computer";
    const playAsHuman = "Playing as Human";

    if (e.target.textContent === playAsHuman) {
      e.target.textContent = playAsComp;
      e.target.parentElement.querySelector(".name").textContent = "Computer"
      // sessionStorage.setItem(e.target.id, playAsComp)
      if (e.target.id === aiBtnP1.id){
        aiBtnP2.textContent = playAsHuman;
        // sessionStorage.setItem(aiBtnP2.id, playAsHuman)
      }else{
        aiBtnP1.textContent = playAsHuman
        // sessionStorage.setItem(aiBtnP1.id, playAsHuman)
      }
    } else {
      e.target.textContent = playAsHuman;
      e.target.parentElement.querySelector(".name").textContent = sessionStorage.getItem(e.target.parentElement.querySelector(".name").id)
      // sessionStorage.setItem(e.target.id, playAsHuman)
    }
    sessionStoreAi()
  };

  newGameBtn.addEventListener("click", ()=>{
    Game();
    newGameBtn.style.visibility = "hidden";
    newGameBtn.style.display = "none";
    resetBtn.style.visibility = "visible";
    resetBtn.style.display = "initial";
    editBtns.forEach(button => {
      button.removeEventListener("click", editBtnFunc)
      button.style.visibility = "hidden";
    })
    aiBtns.forEach(button => {
      button.classList.add("disabled")
      button.removeEventListener('click', aiSwitch)
    })
  });

  editBtns.forEach((button) =>
    button.addEventListener("click", editBtnFunc)
  );

  aiBtns.forEach((button) =>
    button.addEventListener("click", (e)=>{
      aiSwitch(e)
      console.log(e.target.id)
    })
  );

  resetBtn.addEventListener("click", () => window.location.reload(true));
  
  

})();
