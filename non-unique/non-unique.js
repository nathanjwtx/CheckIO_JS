// returns unique numbers from array

var a = [1, 2, 3, 1, 4, 5, 3]
var b = []

function loopA (a) {
  b.push(a[0])
  for (var i = 0; i < a.length; i++) {
    var x = 0
    for (var j = 0; j < b.length; j++) {
      // console.log(b)
      if (a[i] === b[j]) {
        x += 1
      }
      // console.log('x: ' + x)
      // console.log('a:' + a[i])
    }
    if (x === 0) {
    //   console.log(a[i])
      b.push(a[i])
    }
  }
  return b
}

console.log(loopA(a))
