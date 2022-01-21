function LOG(something){
    console.log(something)
}

(function () {
    let xCount = 0;
    let oCount = 0;
    // let symbol = 'X'
    const gameBoard = document.getElementById("game-board");
    const numberConvert = {
        'one'   : 1,
        'two'   : 2,
        'three' : 3,
        'four'  : 4,
        'five'  : 5,
        'six'   : 6,
        'seven' : 7,
        'eight' : 8,
        'nine'  : 9
    };
    let playsList = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    gameBoard.addEventListener('click', e => {
        if (e.target.id !== 'game-board') {
            let symbol = 'G'
            xCount !== oCount ? symbol = 'O' : symbol = 'X';
            symbol === 'X' ? xCount++ : oCount++;
            if (playsList[numberConvert[e.target.id] - 1] === ' '){
                playsList[numberConvert[e.target.id] - 1] = symbol;
                
            }
            display()
        } 
    });
    function display(){
        for (key in numberConvert) {
            document.getElementById(key).textContent = playsList[numberConvert[key] - 1]
        }
    }
})();



