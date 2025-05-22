/*
Functions:
add, substract, multiply, divide
DO NOT USE EVAL
Call function 'operation' when pressed = and have that one call one
of the above.

 buttons for each digit and operator (including =).
 Add a “clear” button.
 
 Create the functions that populate the display when you click the digit buttons.
  You should store the content of the display (the number) in a variable for use 

  Your calculator should not evaluate more than a single pair of numbers at a time.
*/

const Operators = ["+", "-", "×","÷"];

const CalcKeys = [
    "1","2","3","4","5","6","7","8","9","0",".","+"
];

const SpecialKeys = ["-","*","/"];

const add = function(a,b){
    return Number(a) + Number(b);
};

const substract = function(a,b){
    return Number(a) - Number(b);
};

const multiply = function(a,b){
    return Number(a) * Number(b);
};

const divide = function(a,b){

    return Number(a) / Number(b);
}

const operate = function(NumA,operator,NumB){
    if (operator === "÷" && Number(NumB) === 0) return "DONT DIVIDE BY 0!";
    if (NumA === "0." || NumB === "0.") return "NO .";
    let result;
    switch(operator){
        case "+":
            result = add(NumA,NumB);
            break;
        case "-":
            result = substract(NumA,NumB);
            break;
        case "×":
            res = multiply(NumA, NumB);
            break;
        case "÷":
            res = divide(NumA, NumB);
            break;
    }
    //round it up to max 2 digits
    return Math.round(result * (10 ** 5)) / (10 ** 5);

};

const whatOperator = function(string){
    for (let chat of string.split("")) {
        if (Operators.includes(char)) return true;
    }
    return false;
};

let display = document.querySelector("#display-text");
let buttons = document.querySelectorAll(".button");

let NumA = 0;
let operator = "";
let NumB = 0;

const displayNmb = function(input){
    let displayText = display.textContent;
    if (displayText.length >= 9) return;
    if (displayText === "DONT DIVIDE BY 0!") {
        display.textContent = "0";
        NumA = 0;
    }

    if (input == "0" && displayText == "0"){
        display.textContent = "0";
    } else if (display.classList.contains("display-result") && !(findOperator(input))) {
        display.textContent = "";
        display.classList.remove("display-result");
    } else if (display.classList.contains("display-result") && findOperator(input)) {
        display.classList.remove("display-result");
    }
    if (findOperator(input)) {
        if (findOperator(displayText)) {
            if (typeof(Number(displayText.at(-1))) === "number" || displayText.at(-1) === ".") {
                display.textContent = operate(NumA, operator, NumB) + input;
                NumA = operate(NumA, operator, NumB);
                NumB = 0;
                equalButton.classList.toggle("ready");
            } else {
                display.textContent = displayText.slice(0,displayText.length - 1) + input;
            }
        } else if (displayText != "") {
        display.textContent += input;
        }
        operator = input;
    } else if (input === ".") {
        if (findOperator(displayText)) {
            if (!(NumB.toString().split("").includes("."))) {
                NumB = NumB + input;
                display.textContent += input;
                equalButton.classList.add("ready");
            }
        } else {
            if (!(NumA.toString().split("").includes("."))) {              
                NumA = NumA + input;
                display.textContent += input;
            }
        }
    } else if (displayText == "0" && input == "0") {
        display.textContent = input;
        display.classList.add("display-result");
    } else {
        display.textContent += input;
        if (findOperator(displayText)) {
            NumB = NumB + input;
            equalButton.classList.add("ready");
        } else {
            NumA = NumA + input;
        }
    }
};

//basic button function
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        displayNmb(button.textContent);
    });
});


//function of what to do when 'clear' is pressed

const clearButton = document.querySelector('#clear');

clearButton.addEventListener("click", () => {
    display.textContent = "0";
    NumA = 0;
    operator = "";
    NumB = 0;
    equalButton.classList.remove("ready");
    display.classList.add("display-result");
})

//function of what to do when = is pressed

const equalButton = document.querySelector("#equals");

equalButton.addEventListener("click", () => {
    let result = operate(NumA, operator, NumB);
    if(equalButton.classList.contains("ready")) {
        display.textContent = result;
        NumA = result;
        operator = "";
        NumB = 0;
        equalButton.classList.toggle("ready");
        display.classList.add("display-result");
    }

});

//function to detect button click

document.addEventListener("keydown", (e) => {
    let result = operate(NumA, Operators, NumB);
    let input = e.key;
    if (CalcKeys.includes(input)) {
        displayNmb(input);
    }else if (Operators.includes(input)) {
        switch (input) {
            case "-":
                displayNmb("-");
                break;
            case "*":
                displayNmb("*");
                break;
            case "/":
                displayNmb("/");
                break;
        }
    }else if (e.key === "Escape"){
        display.textContent = "0";
        NumA = 0;
        operator = "";
        NumbB = 0;
        equalButton.classList.remove("ready");
        display.classList.add("display-result");
    } else if (equalButton.classList.contains("ready") 
                && (e.key === "=" || e.key === "Enter")){
                    display.textContent = result;
                    NumA = result;
                    operator = "";
                    NumB = 0;
                    equalButton.classList.toggle("ready");
                    display.classList.add("display-result");
                };
});