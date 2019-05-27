const test = require('tape').test;

class Calculator {
    constructor(){
        this.displayMain = null;
    }

    clear() {
        this.displayMain = '0';
    }

};


// As a user, I want to see a zero before I type and every time I press the clear button so that I know calc is on and cache clear


test('check clear is zero',function (t) {
    calculator = new Calculator();
    calculator.clear();
    var expected = calculator.displayMain;
    var actual = '0';
    t.equal(actual, expected);
    t.end;
});