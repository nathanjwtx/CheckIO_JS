/* Break Rings checkio puzzle
*/

function breakRings (data) {
  var a = []
  for (var i = 0; i < data.length; i++) {
    a.push(data[i].join(''))
  }
  findMax(a)
}



function findMax (data) {
  var num = ''
  for (var i = 0; i < String(data).length; i++) {
    var count = 0
    var pos = String(data).indexOf(String(data)[i])
    while (pos !== -1) {
      count++
      pos = String(data).indexOf(String(data)[i], pos + 1)
    }
    console.log(String(data)[i] + ' ' + count)
  }
}

var rings = [[1, 2], [2, 3], [3, 4], [4, 5], [4, 6], [6, 5]]
console.log(breakRings(rings))

// var s = 12344345
// console.log(findMax(s))
