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
    if(b === 0){
        return "ERROR";
    }
    return Number(a) / Number(b);
}
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