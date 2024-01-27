// sample test case

const assert = require('assert');
// we are going to call assert module to do unit testing

const calculator = require('../app/calculator');
// we are going to test calculator.js functions


describe("Calculator tests using ASSERT module: ", () => {
// describe is a function that takes two parameters: a string and a callback function.
// The string is the title of the test and the callback

    //============= addition =============
    it('should add two numbers correctly', function () {
        assert.equal(calculator.add(3, 4), 7); // pass 
    });

    it('should add two numbers correctly', function () {
        assert.equal(calculator.add(3, 4), 8); // pass 
    });

    //============= subtraction =============
    it('should subtract two numbers correctly', function () {
        assert.equal(calculator.sub(12, 4), 8); // pass
    });

    it('should subtract two numbers correctly', function () {
        assert.equal(calculator.sub(12, 4), 9); // fail
    });

    //============= multiplication =============
    it('should multiply two numbers correctly', function () {
        assert.equal(calculator.mul(3, 4), 12); // pass
    });

    it('should multiply two numbers correctly', function () {
        assert.equal(calculator.mul(3, 4), 11); // fail
    });
    
    //============= division =============
    it('should divide two numbers correctly', function () {
        assert.equal(calculator.div(12, 4), 3); // pass
    });

    it('should divide two numbers correctly', function () {
        assert.equal(calculator.div(12, 4), 4); // fail
    });
});