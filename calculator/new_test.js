var test = require('tape').test;

var add = require('./new_calc.js');

test('add: add two numbers corectly',function (t) {
    var actual = add(1,2);
    var expected = 3;
    t.equal(actual, expected);
    t.end;
});

