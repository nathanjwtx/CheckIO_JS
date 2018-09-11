"use strict";

function correctSentence(text) {
    // returns a corrected sentence which starts with capital letter
    // and ends with dot.

    // your code here
    var result
    // if (text.endsWith('.')) {
    //     result = text.replace(text.slice(0, 1), text.slice(0, 1).toUpperCase())   
    // } else {
    //     result = text.replace(text.slice(0, 1), text.slice(0, 1).toUpperCase()) + '.'
    // }
    text.endsWith('.') ? result = text.replace(text.slice(0, 1), text.slice(0, 1).toUpperCase()) : 
    result = text.replace(text.slice(0, 1), text.slice(0, 1).toUpperCase()) + '.'
    return result;
}

console.log(correctSentence('hello world'))

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    assert.equal(correctSentence("welcome to New York"), "Welcome to New York.")
    
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}