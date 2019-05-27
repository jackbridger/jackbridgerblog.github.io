var test = require('tape').test;

import {calculator} from 'new_calc.js'

// As a user, I want to see a zero before I type and every time I press the clear button so that I know calc is on and cache clear


test('check clear is zero',function (t) {
    calculator.clear();
    var actual = calculator.displayMain;
    var expected = '0';
    t.equal(actual, expected);
    t.end;
});



test('add: add two numbers corectly',function (t) {
    var actual = calculator.calculate(add,'1','2');
    var expected = '3';
    t.equal(actual, expected);
    t.end;
});