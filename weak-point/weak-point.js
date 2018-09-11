"use strict";

// var matrix = [[5,4,1], [2,1,0], [7,8,9]];

function weakPoint(matrix){
  var minColumn = 0;
  var minRow = 0;
  var tempR = 0;
  var tempC = 0;
  var x = 0;
  var posY = [];
  var output = [];
  for (var row = 0; row<matrix.length; row++) {
    for (var col=0; col<matrix[row].length; col++) {
      tempR += matrix[row][col];
      tempC += matrix[col][row];
    }
    if (row === 0) {
      minRow = tempR;
      minColumn = tempC;
    }
    if (tempR < minRow) {
      minRow = tempR;
      x = row
    }
    posY.push(tempC);
    if (tempC < minColumn) {
      minColumn = tempC;
    }
    tempR = 0;
    tempC = 0;
  }
  output.push(x);
  output.push(posY.indexOf(minColumn));
  console.log(output);
}

// weakPoint(matrix);
var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                                [2, 9, 4, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [3, 3], "Example");
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                                [2, 8, 1, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]]
                                ), [0, 0], "Top left");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
