"use strict"

function betweenMarkers(text, begin, end) {
    // returns substring between two given markers

    // your code here
    var reFirst = begin[0].match('[a-zA-Z]') === null ? new RegExp('\\' + begin) : new RegExp(begin)
    var reSecond = end[0].match('[a-zA-Z]') === null ? new RegExp('\\' + end) : new RegExp(end)
    const first = text.search(reFirst) === -1 ? 0 : text.search(reFirst) + begin.length
    const second = text.search(reSecond) === -1 ? text.length : text.search(reSecond)
    if (first > -1 && second > -1 && second < first) {
        return ''
    } else {
        return text.substring(first, second)
    }
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    console.log(betweenMarkers("<head><title>My new site</title></head>",
    "<title>", "</title>"), 'My new site')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers("<head><title>My new site</title></head>",
                                "<title>", "</title>"), 'My new site')
    assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    assert.equal(betweenMarkers("Never send a human to do a machine's job.","Never","do"), " send a human to ")
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}