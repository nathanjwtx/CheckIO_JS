
function flatten (data) {
  var a = []
  data.forEach(function (element) {
    a.push(String(element.join('')))
  })
  return unflatten(a)
}



function unflatten (data) {
  var b = []
  data.forEach(function (element) {
    var c = []
    for (var i = 0; i < element.length; i++) {
      c.push(Number(element[i]))
    }
    b.push(c)
  })
  return b
}


var test = [[1, 2], [2, 3], [3, 4], [4, 5], [4, 6], [6, 5]]
console.log(flatten(test))


