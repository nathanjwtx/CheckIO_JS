// var a = [['Logan', 'Mike'], ['Logan', 'Jack'], ['Mike', 'Alex'], ['John', 'Fred'], ['Jack', 'Logan'], ['Alex', 'Alex']]
// var a = [['Logan', 'Mike'], ['Logan', 'Jack'], ['Mike', 'Jack']]
// var a = [['Logan', 'Jack'], ['Logan', 'Mike']]
var a = [['Logan', 'Jack'], ['Jack', 'Mike'], ['Mike', 'Ben']]

function isFamily (data) {
  var x = 0
  var fam = new Set()
  if (data.length > 1) {
    x += 1
    data.forEach(function (element) {
      data.forEach(function (element1) {
        if (element[0] === element1[1] && element[1] !== element1[0]) {
          fam.add(x)
        // } else if (element[0] === element1[0] && element !== element1) {
        //   fam.add(x)
        } else if (element[0] === element1[0] && element !== element1) {
          fam.add(x)
          var s1 = element[1]
          var s2 = element1[1]
          console.log(s1)
          console.log(s2)
          data.forEach(function (element) {
            if (element !== element1 && element[0] === s1 && element[1] === s2) {
              console.log('1 true')
              fam.add(x + 1)
            }
          })
        }
      })
    })
    console.log(fam)
    if (fam.size === data.length) {
      return true
    } else if (fam.size === data.length - 1) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}
console.log(isFamily(a))
