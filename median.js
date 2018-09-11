// find the median of an array of numbers

function findMedian (aList) {
  var a = aList.sort(function (a, b) { return a - b })
  var l = a.length
  console.log(l)
  if (l % 2 !== 0) {
    return a[Math.ceil(l / 2) - 1]
  } else {
    console.log(a)
    return (a[l / 2] + a[(l / 2) - 1]) / 2
  }
}

var test = [3, 6, 20, 99, 10, 15]
var result = findMedian(test)
console.log(result)
