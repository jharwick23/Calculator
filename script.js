let firstNum = '';
let secondNum = '';
let operator = '';
let displayEquation = document.getElementById("equations");
let displayAnswer = document.getElementById("answer");

function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function division(a, b) {return a / b;}
function remainder(a, b) {return a % b;}

function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return b === 0 ? "Error" : division(a,b);
        case '%': return b === 0 ? "Error" : remainder(a,b);
    }
}

