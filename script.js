let firstNum = '';
let secondNum = '';
let operator = '';
let answer = '';
const displayEquation = document.getElementById("equations");
const displayAnswer = document.getElementById("answer");

// Function to update the display
function updateDisplay() {
    displayEquation.innerText = `${firstNum} ${operator} ${secondNum}`;
    displayAnswer.innerText = answer;
}

// Handle all the button clicks on the calculator
function handleButtonClick(value){
    if (firstNum === "Error" || answer === "Error" || answer === 0){
        firstNum = '';
        secondNum = '';
        operator = '';
        answer = '';
    }
    if(!isNaN(value) || value === '.'){ // Check if it is a number or decimal
        if(operator){ // If there is an operator add to second number
            if(!(secondNum.includes('.') && value === '.')){
                secondNum += value; 
            }
        }
        else{
            if(!(firstNum.includes('.') && value === '.')){
                firstNum += value; 
            }
        }
    }
    else if(value === '±'){ // Makes number negative or positive
        if (firstNum && secondNum === '' && operator === ''){
            firstNum = (-Number(firstNum)).toString();
        }
        else if(firstNum && secondNum && operator){
            secondNum = (-Number(secondNum)).toString();
        }
    }
    else if(value === 'Clear'){ // Clears calculator
        firstNum = '';
        secondNum = '';
        operator = '';
        answer = '';
    }
    else if(value === 'Backspace'){
        if (secondNum){
            secondNum = secondNum.slice(0, -1); // Delete last number entered
        } 
        else if (operator){
            operator = '';
        }
        else if (firstNum){
            firstNum = firstNum.slice(0, -1);
        }
    }
    else if (value === '='){
        if (firstNum && operator && secondNum){ // If = is entered calculate result
            answer = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
            firstNum = answer.toString();
            secondNum = '';
            operator = '';
        }
    }
    else { // New operator entered
        if(firstNum && secondNum && operator) {
            answer = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
            firstNum = answer.toString();
            secondNum = '';
        }
        operator = value; 
    }
    updateDisplay();
}

// Attach event listeners to buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button.innerText));
});

// Basic math functions
function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function division(a, b) {return a / b;}
function remainder(a, b) {return a % b;}

// Operate function to find which math function to use
function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case 'x': return multiply(a,b);
        case '÷': return b === 0 ? "Error" : division(a,b);
        case '%': return b === 0 ? "Error" : remainder(a,b);
    }
}