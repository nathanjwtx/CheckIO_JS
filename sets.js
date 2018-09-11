
Set.prototype.intersection = function (SetB) {
  var intersection = new Set()
  for (var elem of SetB) {
    if (this.has(elem)) {
      intersection.add(elem)
    }
  }
  return intersection
}

var a = 'hello, world'
var b = 'hello, earth'
var SetB = new Set(a.split(','))
var SetA = new Set(b.split(', '))

console.log(SetA.intersection(SetB))


// Set.prototype.intersection = function (mySet) {
//   var intersection = new Set()
//   for (var elem of mySet) {
//     if (this.has(elem)) {
//       intersection.add(elem)
//     }
//   }
//   return intersection
// }

// function commonWords (first, second) {
//   var set1 = new Set(first.split(', '))
//   var set2 = new Set(second.split(', '))
//   return set1.intersection(set2)
// }

// console.log(commonWords('hello, world', 'hello, moon'))
