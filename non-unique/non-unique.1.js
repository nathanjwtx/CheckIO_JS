var a = [1, 2, 3, 1, 3]
// var b = []

function loopA (a) {
  var b = []
  for (var i = 0; i < a.length; i++) {
    var x = 0
    for (var j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        x += 1
      }
    }
    if (x > 1) {
      b.push(a[i])
    }
  }
  return b
}

var ans = loopA(a)
console.log(ans)
