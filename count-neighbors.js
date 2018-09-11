// find out how many neighboring cells have a 1

function countNeighbors (grid, row, col) {
  var x = 0
  // row above
  if (row - 1 >= 0) {
    if (col === 0) {
      x += grid[row - 1][col] + grid[row - 1][col + 1]
    } else if (col === grid[0].length - 1) {
      x += grid[row - 1][col - 1] + grid[row - 1][col]
    } else {
      x += grid[row - 1][col - 1] + grid[row - 1][col] + grid[row - 1][col + 1]
    }
  }
  // same row
  if (col === 0) {
    x += grid[row][col + 1]
  } else if (col === grid[0].length - 1) {
    x += grid[row][col - 1]
  } else {
    x += grid[row][col - 1] + grid[row][col + 1]
  }
  // bottom row - won't return anything if row is last row in grid
  if (row + 1 <= grid.length - 1) {
    if (col === 0) {
      x += grid[row + 1][col] + grid[row + 1][col + 1]
    } else if (col === grid[0].length - 1) {
      x += grid[row + 1][col - 1] + grid[row + 1][col]
    } else {
      x += grid[row + 1][col - 1] + grid[row + 1][col] + grid[row + 1][col + 1]
    }
  }
  return x
}

var myGrid = [[1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0]]
var myRow = 4
var myCol = 2

var result = countNeighbors(myGrid, myRow, myCol)
console.log(result)
