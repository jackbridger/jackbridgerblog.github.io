function testSimpleMultiply() {
    var input = ['2','multiply','3'];
    var expected = 6; 
    var actual = calculate(input);

    if (actual !== expected) {
        console.log(' testSimpleMultiply ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
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
    var expected = ['2','add','57'];
    var actual = simplifyString(input);

    if (actual !== expected) {

        console.log(' testTwoDigits ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testTwoDigits Test passed ✔︎');
      }
}

function testConvertInts() {
    var input = ['5','add','43'];
    var expected = [5,'add', 43];
    var actual = simplifyString(input);

    if (actual !== expected) {

        console.log('testConvertInts  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testConvertInts Test passed ✔︎');
      }
}

function testConvertDecimals() {
    var input = ['.','1','add','0','.','5'];
    var expected = [0.1,'add',0.5];
    var actual = simplifyString(input);

    if (actual !== expected) {

        console.log('testConvertDecimals  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testConvertDecimals Test passed ✔︎');
      }
}
function testConvertMinus() {
    var input = ['-','1','add','5'];
    var expected = [-1,'add',5];
    var actual = simplifyString(input);

    if (actual !== expected) {

        console.log('testConvertMinus  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testConvertMinus Test passed ✔︎');
      }

}

function testRemoveLastOp() {
    var input = ['2','add','5','multiply'];
    var expected = [2,'add',5];
    var actual = simplifyString(input);

    if (actual !== expected) {

        console.log('testRemoveLastOp  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testRemoveLastOp Test passed ✔︎');
      }
}

function testStringConversion(input) {
    testConvertDecimals();
    testConvertInts();
    testTwoDigits();
    testConvertMinus();
    testRemoveLastOp();
}

function testFullEvaluation(input) {
    var input = [11,'add',5,'multiply',6, 'divide',2,'subtract',7];
    var expected = 14;
    var actual = simplifyString(input);

    if (actual !== expected) {

        console.log('testFullEvaluation(  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testFullEvaluation Test passed ✔︎');
      }
}

// Check 1 is being added properly
function testOne() {
    input = [];
    var expected = ['1'];
    one();
    var actual = input;
    if (actual !== expected) {
        console.log('testOne(  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testOne Test passed ✔︎');
    }
}
// Check 2 is being added properly
function testTwo() {
    input = ['1','multiply'];
    var expected = ['1', 'multiply','2'];
    two();
    var actual = input;
    if (actual !== expected) {
        console.log('testTwo  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testTwo Test passed ✔︎');
    }
}

// Check 3 is being added properly
function testThree() {
    input = ['4','divide'];
    var expected = ['4', 'divide','3'];
    three();
    var actual = input;
    if (actual !== expected) {
        console.log('testThree  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testThree Test passed ✔︎');
    }
}

// Check 4 is being added properly
function testFour() {
    input = ['8','add'];
    var expected = ['8', 'divide','4'];
    four();
    var actual = input;
    if (actual !== expected) {
        console.log('testFour  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testFour Test passed ✔︎');
    }
}

// Check 5 is being added properly
function testFive() {
    input = ['7','subtract'];
    var expected = ['7', 'subtract','5'];
    five();
    var actual = input;
    if (actual !== expected) {
        console.log('testFour  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testFour Test passed ✔︎');
    }
}

// Check 6 is being added properly
function testSix() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','6'];
    six();
    var actual = input;
    if (actual !== expected) {
        console.log('testFour  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testFour Test passed ✔︎');
    }
}

// Check 7 is being added properly
function testSeven() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','7'];
    seven();
    var actual = input;
    if (actual !== expected) {
        console.log('testFour  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testFour Test passed ✔︎');
    }
}

// Check 8 is being added properly
function testEight() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','8'];
    eight();
    var actual = input;
    if (actual !== expected) {
        console.log('testFour  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testFour Test passed ✔︎');
    }
}

// Check 9 is being added properly
function testNine() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','9'];
    nine();
    var actual = input;
    if (actual !== expected) {
        console.log('testFour  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testFour Test passed ✔︎');
    }
}

// Check 0 is being added properly
function testZero() {
    input = ['6','subtract'];
    var expected = ['6', 'subtract','6'];
    six();
    var actual = input;
    if (actual !== expected) {
        console.log('testFour  ╳   ' + actual + ' should equal ' + expected + '  ╳');
      } else {
        console.log('testFour Test passed ✔︎');
    }
}

// Check the multiply button is working properly
function checkMultiplyButton {

}

// Check the divide button is working properly
function checkDivideButton {

}

// Check the add button is working properly
function checkAddButton {

}

// Check the subtract button is working properly
function checkSubtractButton {

}

// Check point button added properly
function checkPointButton {

}

//check and current value are being cleared
function checkClearButton {

}

//check the equals button is returning a value. 
// Also that it's not working multiple times
function checkEqualsButton {

}


// check that the history is being saved correctly
function testHistorySaved() {
    
}
// check the history is being cleared
function testHistoryCleared() {

}

// Check the dislpay is always correct
function testDisplayCorrect() {}