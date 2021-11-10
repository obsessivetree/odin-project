const numBtns       = document.querySelectorAll(".number");
const screen        = document.getElementById("screen");
const clearBtn      = document.getElementById("clear");
const backspaceBtn  = document.getElementById("backspace");
const posNegBtn     = document.getElementById("pos-neg");
const operatorBtns  = document.querySelectorAll(".operator");
const equalsBtn     = document.getElementById("equals");
const decimal       = document.getElementById("decimal");

let firstNum        = '';
let secondNum       = '';
let activeOperator  = '';

function add        (a, b=0)   {return (a + b)};
function subtract   (a, b=0)   {return (a - b)};
function multiply   (a, b=1)   {return (a * b)};
function divide     (a, b=1)   {return (b !== 0 ? a / b : "don't divide by zero pal")};

function clear(){
    firstNum = secondNum = activeOperator = screen.textContent  = '';
    operatorBtns.forEach(btn => btn.className = 'button operator');

};

function operate(){
    let operator;
    switch (activeOperator) {
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
            console.log('ERROR: unknown operator')
    }
    let answer = operator(parseFloat(firstNum), parseFloat(secondNum));
    if (String(answer).length > 8) {
        let decimals = String(answer).split('.')[1];
        let round    = decimals.slice(0, 8-String(answer).split('.')[0].length);
        
        round = Math.round(parseInt(round) / 10 );
       
        answer = parseFloat(String(answer).split('.')[0] + '.' + String(round));

    }

    screen.textContent = answer;
    firstNum           = answer;
    secondNum          = '';
    activeOperator     = '';
    operatorBtns.forEach(btn => btn.className = 'button operator');
    return (answer)
};

function equalsListenFunc() {   
    if (firstNum && activeOperator && secondNum){
        screen.textContent = operate();
    } else {
        screen.textContent = 'ERROR';
    }
}
    
function operatorListenFunc(e, b=false) {
    const operators = {
        '/' : [document.getElementById('divide'),'divide'],
        '*' : [document.getElementById('multiply'), 'multiply'],
        '+' : [document.getElementById('add'), 'add'],
        '-' : [document.getElementById('subtract'), 'subtract'],
    }
    if (!b) {
        if (!secondNum){
            activeOperator = e.target.id;
            operatorBtns.forEach(btn => btn.className = 'button operator')
            e.target.classList = 'button active-operator';
        } else {
            operate();
            activeOperator = e.target.id;
            operatorBtns.forEach(btn => btn.className = 'button operator')
            e.target.classList = 'button active-operator';
        }
    } else {
        if (!secondNum){
            activeOperator = operators[e.key][1];
            operatorBtns.forEach(btn => btn.className = 'button operator')
            operators[e.key][0].classList = 'button active-operator';
        } else {
            operate();
            operatorBtns.forEach(btn => btn.className = 'button operator');
            activeOperator = operators[e.key][1];
            operators[e.key][0].classList = 'button active-operator';
        }
    }
};

function numListenFunc(e, b=false) {
    let eventOutput;
    if (b) {
        eventOutput = e.key
    } else {
        eventOutput = e.target.textContent;
    }    
    if (!activeOperator){
        firstNum += eventOutput;
        screen.textContent = firstNum;
    } else {
        secondNum += eventOutput;
        screen.textContent = secondNum;
    }
};

function decimalFunc() {
    let numString  = false;
    let hasDecimal = false;

    if (activeOperator){
        numString = secondNum;
    } else {
        numString = firstNum;
    }

    for (let i = 0; i < numString.length; i++){
        if (numString[i] === '.'){
            hasDecimal = true;
        }
    }
    if (!hasDecimal && !activeOperator){
        firstNum += '.';
        screen.textContent = firstNum;
    } else if (!hasDecimal && activeOperator){
        secondNum += '.';
        screen.textContent = secondNum;
    }
}

function backspaceFunc() {
    if (!activeOperator){
        firstNum = String(firstNum).slice(0, firstNum.length-1);
        screen.textContent = firstNum;
    } else {
        secondNum = secondNum.slice(0, secondNum.length-1);
        screen.textContent = secondNum;
    }
}

function posNegFunc() {
    if (!activeOperator){
        if (firstNum[0] === '-'){
            firstNum = firstNum.slice(1);
        } else {
            firstNum = '-' + firstNum;
        }
        screen.textContent = firstNum;
    } else {
        if (secondNum[0] === '-'){
            secondNum = secondNum.slice(1);
        } else {
            secondNum = '-' + secondNum;
        }
        screen.textContent = secondNum;
    }
}

document.addEventListener('keydown', e => {
    const acceptedKeydowns = {
        'numbers': ['0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9'],
        'operators' : ['+', '-', '/', '*',],
        'equals' : ['=', 'Enter',],
        'clear' : ['Escape',],
        'delete' : ['Backspace',],
        'decimal' : ['.'],
    };


        if (acceptedKeydowns['numbers'].includes(e.key)){
            numListenFunc(e, true)
        } 
        else if (acceptedKeydowns['operators'].includes(e.key)){
            operatorListenFunc(e, true)
        }
        else if (acceptedKeydowns['equals'].includes(e.key)){
            equalsListenFunc()
        }
        else if (acceptedKeydowns['clear'].includes(e.key)){
            clear();
        }
        else if (acceptedKeydowns['delete'].includes(e.key)){
            backspaceFunc()
        }
        else if (acceptedKeydowns['decimal'].includes(e.key)){
            decimalFunc()
        }
    

});

equalsBtn.addEventListener('click', equalsListenFunc);
operatorBtns.forEach(operatorButton => {operatorButton.addEventListener('click', operatorListenFunc)});
numBtns.forEach(numButton => {numButton.addEventListener('click', numListenFunc)});
decimal.addEventListener('click', decimalFunc);
clearBtn.addEventListener('click', clear);
backspaceBtn.addEventListener('click', backspaceFunc);
posNegBtn.addEventListener('click', posNegFunc);
