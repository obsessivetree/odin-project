// PLAYER
const Player = (name, symbol) => {

    let playCount = 0;

    const getName = () => {
        return (name)
    } 

    const getSymbol = () => {
        return (symbol)
    }
    
    const playCountAdd1 = () => {
        playCount+=1;
    }
    const getPlayCount = () => {
        return (playCount)
    }

    return { getName, getSymbol, playCountAdd1, getPlayCount }
}


// AI
const AI = () => {

    const getName = () => {
        return ("Steve")
    }

    const getSymbol = () => {
        return ("Ω")
    }
    
    const setPlay = () => {

    }
    
    return { getName, getSymbol, setPlay }
}


// BOARD
const Board = () => {
    let plays = new Array(9).fill("");

    const getPlays = () => {
        return (plays)
    }

    const setPlay = (boardIndex) => {
        if (Board.getPlays()[boardIndex] === "") {
            Board.setPlay(boardIndex, symbol)
        }
    }

    const displayPlays = () => {
        //
    }

    const reset = () => {
        plays = new Array(9).fill("");
        displayPlays();
    }

    return { getPlays, setPlay, displayPlays, reset, }
}


// GAME LOGIC
const Game = () => {
    // 1 or 2 players

    // if 1: create player and ai

        // player turn

            // win check

        // ai turn

            // win check

    // if 2: create players

        // p1 turn

            // win check
            
        // p2 turn

            // win check
            
}