let num1;
let num2;

//Create the basic math operators
function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    num1 = Number(num1); //converts num1 and num2 into number type
    num2 = Number(num2);
    switch (operator) {
        case '+':
            return sum(num1, num2)
        case '-':
            return subtract(num1, num2)  //creates the operating function
        case 'x':S
            return multiply(num1, num2)
        case '/':
            if (b === 0) return null
            else return divide(num1, num2)
        default:
            return null
    }
}


sum();
subtract();
multiply();
divide();
operate();