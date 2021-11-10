const add = function (a, b=0){return (a+b)};
function subtract(a, b=0){return (a-b)};
function multiply(a, b=1){return (a*b)};
function divide(a, b=1){
    return (b !== 0 ? a/b : "don't divide by zero pal")
};
function equals(firstNum, operator, secondNum){
    console.log(firstNum, secondNum)
    if (firstNum && operator && secondNum){
        // console.log(operator(firstNum, secondNum))
        const ret = operator(firstNum, secondNum)
        justAnswered = true;
        ret === Number ? ret = Math.round(ret*1000)/1000 : ret
        previousNumber = ret;
        operator = '';
        return (ret)
    } else {
        return ('ERROR')
    }
}
const clear = function(){
    removeActiveOperator();
    screen.textContent = '';
    previousNumber = '';
    operator = '';
    currentNumber = '';
    answer = '';
    // console.log(previousNumber, operator, currentNumber, answer)
    activeOperator = false;
    justAnswered = false;
}


const numBtns = document.querySelectorAll(".number");
const screen = document.getElementById("screen");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const posNegBtn = document.getElementById("pos-neg");
const operatorBtns = document.querySelectorAll(".operator");
const removeActiveOperator = () => operatorBtns.forEach(btn => btn.classList.remove('active-operator'));
const equalsBtn = document.getElementById("equals");
const decimal = document.getElementById("decimal");


let previousNumber;
let operator;
let currentNumber;
let prevCurrentNumber;
let answer;
let activeOperator = false;
let justAnswered = false;


numBtns.forEach((numButton) => {numButton.addEventListener("click", e => {
    if (justAnswered){
        removeActiveOperator();
        screen.textContent = '';
        previousNumber = '';
        operator = '';
        currentNumber = '';
        answer = '';
        // console.log(previousNumber, operator, currentNumber, answer)
        activeOperator = false;
        justAnswered = false;
    }
    if (activeOperator){
        screen.textContent = '';
        removeActiveOperator();
        activeOperator = false;
    }
    screen.textContent += e.target.textContent;
})});
clearBtn.addEventListener("click", e => {
    clear()
});
function backspace(){
    removeActiveOperator();
    screen.textContent = screen.textContent.slice(0, screen.textContent.length-1);
}
backspaceBtn.addEventListener("click", backspace);
posNegBtn.addEventListener("click", e => {
    removeActiveOperator();
    screen.textContent[0] === '-' ? screen.textContent = screen.textContent.slice(1) : screen.textContent = '-' + screen.textContent
});
// store number
operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener("click", e => {
    // console.log(e.target.id)
    if (!previousNumber){
        previousNumber = parseFloat(screen.textContent);
    } 
    // if (operator) {
    //     console.log("yep");
    //     currentNumber = screen.textContent;
    //     console.log(currentNumber)
    //     previousNumber = equals(previousNumber, currentNumber);
    //     operator = ''
    // }

    if (justAnswered){
        
        // screen.textContent = '';
        // previousNumber = 
        operator = '';
        currentNumber = '';
        // answer = '';
        // console.log(previousNumber, operator, currentNumber, answer)
        // activeOperator = false;
        justAnswered = false;
    }
    
    switch (e.target.id) {
        case 'add':
            operator = add;
            break
        case 'subtract':
            operator = subtract;
            break
        case 'multiply':
            operator = multiply;
            break
        case 'divide':
            operator = divide;
            break
        default:
            console.log('unknown operator')
    }
    removeActiveOperator();
    e.target.classList.add("active-operator");
    activeOperator = true;
}));
function addDecimal() {
    if (screen.textContent.includes('.') !== true){
        screen.textContent += '.';
    } else if (activeOperator) {
        screen.textContent = '.';
        removeActiveOperator();
        activeOperator = false;
    }
}
decimal.addEventListener("click", addDecimal)
equalsBtn.addEventListener('click', () => {
    currentNumber = parseFloat(screen.textContent);
    answer = equals(previousNumber, operator, currentNumber);
    previousNumber = answer;
    currentNumber = '';
    screen.textContent = answer;
    prevCurrentNumber = currentNumber;

})
    

// document.addEventListener("keydown", e => {
//     console.log(e.key,previousNumber, operator, currentNumber)
//     if (e.key in allowedKeypresses['numbers']){
//         screen.textContent += Number(e.key);
//     }
//     else if (e.key in allowedKeypresses['operators']){
//         operator = allowedKeypresses[e.key.toString()]
//     }
//     else if (e.key in allowedKeypresses){
//         allowedKeypresses[e.key.toString()]()
//     }
// })





// const allowedKeypresses = {
//     'numbers':['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',],
//     'operators':{'+':add, '-':subtract, '*':multiply, '/':divide,},
//     'Backspace':backspace, 'Delete':backspace,
//     'Enter':equals,
//     'Clear':clear,
//     '.':addDecimal,
// }