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

// function multiply() {
//     return;
// }

function subtract(input) {
    return input[0] - input[2]
}

function add(input) {
    return parseFloat(input[0]) + parseFloat(input[2]);
}

function simplifyString() {
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

    document.getElementById('display').innerHTML = input;
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

function one_button() {
    alert('hello world');
    input.push('1');
    simplifyString();
}
function two() {
    input.push('2');
    simplifyString();
}
function three() {
    input.push('3');
    simplifyString();
}
function four() {
    input.push('4');
    simplifyString();
}
function five() {
    input.push('5');
    simplifyString();
}
function six() {
    input.push('6');
    simplifyString();
}
function seven() {
    input.push('7');
    simplifyString();
}
function eight() {
    input.push('8');
    simplifyString();
}
function nine() {
    input.push('9');
    simplifyString();
}

function zero() {
    input.push('0');
    simplifyString();
}

function point() {
    const pure_digits = ['1','2','3','4','5','6','7','8','9','0'];
    const recent_value = input[input.length-1];
    if (pure_digits.includes(recent_value)) 
        input.push('.');
    else if (input.length === 0) {
        input.push('0');
        input.push('.');
    }
}

function equals() {
    evaluateString();
}

function clear() {
    input = [];
    simplifyString();
}
