"use strict";

function evenLast(data) {
    let result
    if (data.length === 0) {
        result = 0
    } else {
        let sum = 0
        for (var i = 0; i < data.length; i += 2) {
            sum += data[i]
        }
        result = sum * data[data.length - 1]
    }
    return result
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
    assert.equal(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
    assert.equal(evenLast([6]), 36, "(6)*6=36");
    assert.equal(evenLast([]), 0, "An empty array = 0");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

// // evenLast([1, 2, 3, 4, 5, 6])
// console.log(evenLast([]))