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

