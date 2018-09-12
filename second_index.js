"use strict"

function secondIndex(text, symbol) {
    // returns the second index of a symbol in a given text

    var res = text.match(symbol)
    const first = res !== null ? res['index'] : undefined
    const sub = first !== undefined ? text.substring(res['index']+1).indexOf(symbol) : -1
    return sub !== -1 ? text.substring(res['index']+1).indexOf(symbol) + res['index'] + 1 : undefined
}

// alterantive solution from CheckIO
// function secondIndex(t,s) {
//     let r = t.indexOf(s,t.indexOf(s) + 1);
//     return r < 0 ? undefined : r;
// }

var assert = require('assert')

if (!global.is_checking) {
    console.log('Example')
    console.log(secondIndex("simple", " "))
    // console.log(secondIndex("simple simon is simple", "i"))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(secondIndex("sims", "s"), 3)
    assert.equal(secondIndex("find the river", "e"), 12)
    assert.equal(secondIndex("hi", " "), undefined)
    assert.equal(secondIndex("hi mayor", " "), undefined)
    assert.equal(secondIndex("hi mr Mayor", " "), 5)
    console.log("You are awesome! All tests are done! Go Check it!")
}