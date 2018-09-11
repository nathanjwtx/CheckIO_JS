/* shows inversions in a sequence
setting j = i starts the second loop stops the second loop starting from the beginning
*/

function countInv (data) {
  var count = 0
  for (var i = 0; i < data.length; i++) {
    for (var j = i; j < data.length; j++) {
      if (data[i] > data[j]) {
        count++
      }
    }
  }
  return count
}

var a = [0, 1, 2, 3]
console.log(countInv(a))
