const gameBoard = document.getElementById("game-board");
const footer = document.querySelector('footer');
const playableAreas = document.querySelectorAll("section");
let playsRecord = '         '.split('');

const numbers = {
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9,
};

// Function to put array into gameboard

function updateBoard() {
    for (let i=0; i < 9; i++) {
        playableAreas.item(i).textContent = playsRecord[i];
    }
};
updateBoard()

// Function to allow player to click and place play

playableAreas.forEach(area => {
    area.addEventListener('click', e => {
        const xCount = playsRecord.filter(x => x=='X').length;
        const oCount = playsRecord.filter(x => x=='O').length;

        if (e.target.textContent === ' ') {
            xCount === oCount ? playsRecord[numbers[e.target.id]-1] = 'X' : playsRecord[numbers[e.target.id]-1] = 'O';
        }
        updateBoard();
        gameOverCheck()
        console.log(playsRecord)
    })
});


// game over?

function gameOverCheck(){
    const winningCombos = [
        '123',
        '456',
        '789',
        '147',
        '258',
        '369',
        '159',
        '357'
    ];
    
    if (!playsRecord.filter(x => x==' ').length){
        footer.textContent = "CAT'S GAME!"
    }
}



// Reset





// AI Player


