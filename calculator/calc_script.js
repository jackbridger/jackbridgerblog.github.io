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
    return parseFloat(input[0]) + parseFloat(input[2]);
}

function simplifyString(input) {
    var firstDigit = true;
    const operands = ['add','multiply','subtract','divide'];
    const digits = ['1','2','3','4','5','6','7','8','9','0','.','-'];

    // combine the ints together e.g. ['1','2','add','3'] becomes ['12','add','3']
    for (i = 0; i < input.length; i++) {
        if ( (digits.includes(input[i])) && firstDigit === true ) {
            firstDigit = false;
        }
        else if ((digits.includes(input[i])) && firstDigit === false){
            input[i-1] += input[i];
            input.splice(i,1)
            i--; 
        }
        else 
            firstDigit = true;
    }
    // convert to ints
    for (var j = 0; j < input.length ; j++) {
        if (!(operands.includes(input[j]))) {
            input[j] = parseFloat(input[j]);
        } 
    }
    // remove the last op
    for (var k = 0; k < input.length; k++) {
        if (operands.includes(input[input.length-1])){
            input.pop();
        }
    }


    return evaluateString(input);
}

function evaluateString(input) {

    console.log(input);
    for (var i = 0; i < input.length; i++) {
        if (input[i] === 'divide') {
            input[i] = (input[i-1] / input[i+1])
            input.splice(i+1,1);
            input.splice(i-1,1);
            i = 0; }
        else if (input[i] === 'multiply') {
            input[i] = (input[i-1] * input[i+1])
            input.splice(i+1,1);
            input.splice(i-1,1);
            i = 0; }
    }
    for (var i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            input[i] = (input[i-1] + input[i+1])
            input.splice(i+1,1);
            input.splice(i-1,1);
            i = 0;
        }
        else if (input[i] === 'subtract') {
            input[i] = (input[i-1] - input[i+1])
            input.splice(i+1,1);
            input.splice(i-1,1);
            i = 0;
        }
    }
    return input[0];
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