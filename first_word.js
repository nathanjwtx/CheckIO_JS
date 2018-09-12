"use strict";

function firstWord(a, b) {
    // returns the first word in a given text.
    const pattern = /[a-zA-Z']/g
    // console.log(a)
    var start = 0
    var t1 = pattern.exec(a)['index']
    // console.log(t1)
    var word =''
    for (let i = t1; i < a.length; i++) {
        if (a[i].match(pattern)) {
            word += a[i]
        } else {
            break
        }
    }
    return word
    // return a.match(/[a-zA-Z']+/)[0]
}

// simple one line solution
// return a.match(/[a-zA-Z']+/)[0]

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("..Hell'o world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello world"), "Hello")
    assert.equal(firstWord(" a word "), "a")
    // assert.equal(firstWord("don't touch it"), "don't")
    // assert.equal(firstWord("greetings, friends"), "greetings")
    // assert.equal(firstWord("... and so on ..."), "and")
    // assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}