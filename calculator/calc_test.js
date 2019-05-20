// Take in a string with multiply signalled on the middle char. Return the result of the multiplication.
function testSimpleMultiply() {
    var input = ['2','multiply','3'];
    var expected = 6; 
    var actual = calculate(input);

    if (actual !== expected) {
        console.log(' testSimpleMultiply ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('testSimpleMultiply Test passed ✔︎');
    }
}

function testSimpleDivide() {
    var input = ['9','divide','3'];
    var expected = 3; 
    var actual = calculate(input);

    if (actual !== expected) {
        console.log('testSimpleDivide  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testSimpleDivide Test passed ✔︎');
    }
}

function testSimpleSubtract() {
    var input = ['9','subtract','4'];
    var expected = 5; 
    var actual = calculate(input);

    if (actual !== expected) {
        console.log('testSimpleSubtract ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testSimpleSubtract Test passed ✔︎');
    }
}

function testSimpleAdd() {
    var input = ['2','add','5'];
    var expected = 7; 
    var actual = calculate(input);

    if (actual !== expected) {

        console.log('testSimpleAdd  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testSimpleAdd Test passed ✔︎');
      }
}

function testOperands() {
    testSimpleAdd();
    testSimpleDivide();
    testSimpleMultiply();
    testSimpleSubtract();
}

function testTwoDigits() {
    var input = ['2','add','5','7'];
    var expected = [2,'add',57];
    var actual = simplifyString(input);

    console.log(actual);

    for (i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log(' testTwoDigits ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testTwoDigits Test passed ✔︎');
}

function testConvertInts() {
    var input = ['5','add','43'];
    var expected = [5,'add', 43];
    var actual = simplifyString(input);

    for (i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testConvertInts  ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testConvertInts Test passed ✔︎');
}



function testConvertDecimals() {
    var input = ['.','1','add','0','.','5','4'];
    var expected = [0.1,'add',0.54];
    var actual = simplifyString(input);

    for (i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testConvertDecimals  ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testConvertDecimals Test passed ✔︎');

}
function testConvertMinus() {
    var input = ['-','1','add','-','5'];
    var expected = [-1,'add',-5];
    var actual = simplifyString(input);

    for (i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testConvertMinus  ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testConvertMinus Test passed ✔︎');
}

function testRemoveLastOp() {
    var input = ['2','add','5','multiply','add','subtract'];
    var expected = [2,'add',5];
    var actual = simplifyString(input);

    for (i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testRemoveLastOp  ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testRemoveLastOp Test passed ✔︎');
}

function testStringConversion(input) {
    testConvertDecimals();
    testConvertInts();
    testTwoDigits();
    testConvertMinus();
    testRemoveLastOp();
}

function testFullEvaluation(input) {
    var input = [11,'add',5,'multiply',6, 'divide',2,'subtract',7,'add',3, 'multiply',3,'multiply'];
    var expected = 28;
    var actual = simplifyString(input);

    if (actual !== expected) {
        console.log('testFullEvaluation(  ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('testFullEvaluation Test passed ✔︎');
    }
}

// Check 1 is being added properly
function testOne() {
    input = [];
    var expected = ['1'];
    one();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testOne  ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return -1;
        }
    }
    console.log('testOne passed ✔︎');
    return true;
}
// Check 2 is being added properly
function testTwo() {
    input = ['1','multiply'];
    var expected = ['1', 'multiply','2'];
    two();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testTwo ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testTwo passed ✔︎');
}

// Check 3 is being added properly
function testThree() {
    input = ['4','divide'];
    var expected = ['4', 'divide','3'];
    three();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testThree ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testThree passed ✔︎');
}

// Check 4 is being added properly
function testFour() {
    input = ['8','add'];
    var expected = ['8', 'add','4'];
    four();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testFour ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testFour passed ✔︎');
}

// Check 5 is being added properly
function testFive() {
    input = ['7','subtract'];
    var expected = ['7', 'subtract','5'];
    five();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testFive ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testFive passed ✔︎');
}

// Check 6 is being added properly
function testSix() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','6'];
    six();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testSix ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testSix passed ✔︎');
}

// Check 7 is being added properly
function testSeven() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','7'];
    seven();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testSeven ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testSeven passed ✔︎');
}

// Check 8 is being added properly
function testEight() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','8'];
    eight();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testEight ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testEight passed ✔︎');
}

// Check 9 is being added properly
function testNine() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','9'];
    nine();
    var actual = input;
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testNine ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testNine passed ✔︎');
}

// Check 0 is being added properly
function testZero() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','0'];
    zero();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('tesZero ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testZero passed ✔︎');

    input = ['0'];
    var expected = ['0'];
    zero();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('tesZero double zero ╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testZero double zero passed ✔︎');
}

function testPoint() {
    input = ['6'];
    var expected = ['6','.'];
    point();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testPoint basic╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testPoint basic passed ✔︎');

    input = ['6','.'];
    var expected = ['6','.'];
    point();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testPoint doublepoint╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testPoint doublepoint passed ✔︎');

    input = [];
    var expected = ['0','.'];
    point();
    var actual = input;
    for (var i = 0; i < expected.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log('testPoint zero point╳   ' + actual + ' should equal ' + expected + '  ╳');
            return
        }
    }
    console.log('testPoint zero point passed ✔︎');
}

// Test all digits

function testAllDigits() {
    testOne()
    testTwo()
    testThree()
    testFour()
    testFive()
    testSix()
    testSeven()
    testEight()
    testNine()
    testZero();
    testPoint();
}


// Check the multiply button is working properly
function testCheckMultiplyButton() {
    input = [];
    var expected_simple = ['multiply'];
    multiply();
    var actual_simple = input;
    if (actual_simple !== expected_simple) {
        console.log('simple testCheckMultiplyButton  ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('simple testCheckMultiplyButton Test passed ✔︎');
    }
    //check double multiply
    input = ['6','multiply'];
    var expected_simple = ['6', 'multiply'];
    multiply();
    var actual_simple = input;
    if (actual !== expected) {
        console.log('double testCheckMultiplyButton  ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('double testCheckMultiplyButton Test passed ✔︎');
    }
}

// Check the divide button is working properly
function testCheckDivideButton() {
    input = [];
    var expected_simple = ['divide'];
    divide();
    var actual_simple = input;
    if (actual_simple !== expected_simple) {
        console.log('simple testCheckDivideButton  ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('simple testCheckDivideButton Test passed ✔︎');
    }
    //check double divide
    input = ['6','divide'];
    var expected_simple = ['6', 'divide'];
    divide();
    var actual_simple = input;
    if (actual !== expected) {
        console.log('double testCheckDivideButton   ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('double testCheckDivideButton  Test passed ✔︎');
    }
}

// Check the add button is working properly
function testCheckAddButton() {
    input = [];
    var expected_simple = ['add'];
    add();
    var actual_simple = input;
    if (actual_simple !== expected_simple) {
        console.log('simple testCheckAddButton  ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('simple testCheckAddButton Test passed ✔︎');
    }
    //check double add
    input = ['6','add'];
    var expected_simple = ['6', 'add'];
    add();
    var actual_simple = input;
    if (actual !== expected) {
        console.log('double testCheckAddButton   ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('double testCheckAddButton  Test passed ✔︎');
    }
}

// Check the subtract button is working properly
function testCheckSubtractButton() {
    input = [];
    var expected_simple = ['subtract'];
    subtract();
    var actual_simple = input;
    if (actual_simple !== expected_simple) {
        console.log('simple testCheckSubtractButton  ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('simple testCheckSubtractButton Test passed ✔︎');
    }
    //check double subtract
    input = ['6','subtract'];
    var expected_simple = ['6', 'subtract'];
    subtract();
    var actual_simple = input;
    if (actual !== expected) {
        console.log('double testCheckSubtractButton   ╳   ' + actual + ' should equal ' + expected + '  ╳');
    } 
    else {
        console.log('double testCheckSubtractButton  Test passed ✔︎');
    }
}

// Check point button added properly
function checkPointButton() {

}

//check and current value are being cleared
function checkClearButton() {

}

//check the equals button is returning a value. 
// Also that it's not working multiple times
function checkEqualsButton() {

}


// check that the history is being saved correctly
function testHistorySaved() {
    
}
// check the history is being cleared
function testHistoryCleared() {

}

// Check the dislpay is always correct
function testDisplayCorrect() {} 

// Does it work when there was a number evaluated and then just '/ 10' for instance?

function testSavedValueOperand() {

}