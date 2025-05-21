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