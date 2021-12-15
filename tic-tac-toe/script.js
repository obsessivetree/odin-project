const gameBoard = document.getElementById("game-board");
const playableAreas = document.querySelectorAll("section");
let plays = '         '.split('');

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
}

// Function to put array into gameboard

function updateBoard() {
    for (let i=0; i < 9; i++) {
        playableAreas.item(i).textContent = plays[i];
    }
};

// Function to allow player to click and place play

playableAreas.forEach(area => {
    area.addEventListener('click', e => {
        const xCount = plays.filter(x => x=='X').length;
        const oCount = plays.filter(x => x=='O').length;

        console.log(numbers[e.target.id])

        xCount === oCount ? plays[numbers[e.target.id-1]] = 'X' : plays[numbers[e.target.id-1]] = 'O';
        updateBoard();
    
})})


// 3 in a row?




// Reset





// AI Player