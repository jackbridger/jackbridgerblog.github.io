var input = [];
var history = '';
var display = '';

function calculate(input) {
    if (input[1] === 'multiply') {
        return multiply(input);
    }
    else if (input[1] === 'divide') {
        return divide(input);
    }
    else if (input[1] === 'add') {
        return add(input);
    }
    else if (input[1] === 'subtract') {
        return subtract(input);
    }
}

function divide(input) {
    return input[0] / input[2];
}

function multiply(input) {
    return input[0] * input[2];
}

function subtract(input) {
    return input[0] - input[2]
}

function add(input) {
    return parseInt(input[0]) + parseInt(input[2]);
}

function simplifyString(input) {

}


function one() {

}
function two() {
    
}
function three() {
    
}
function four() {
    
}
function five() {
    
}
function six() {
    
}
function seven() {
    
}
function eight() {
    
}
function nine() {
    
}

function zero() {

}

function point() {

}

function equals() {

}

function clear() {

}