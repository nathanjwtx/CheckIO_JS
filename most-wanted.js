// find the most frequently used letter in a string

function cleanString (s) {
  var s2 = s.toLowerCase()
  var reg = /[A-Za-z0-9]/
  var s3 = ''
  for (var x in s2) {
    if (reg.exec(s2[x]) != null) {
      s3 += reg.exec(s2[x])[0]
    }
  }
  return countChar(s3)
}

function countChar (s) {
  var char = ''
  var c2 = 0
  for (var x in s) {
    var count = 0
    var pos = s.indexOf(s[x])
    while (pos !== -1) {
      count++
      pos = s.indexOf(s[x], pos + 1)
    }
    // console.log(count)
    if (count > c2) {
      char = s[x]
      c2 = count
    } else if (count === c2) {
      var letters = 'abcdefghijklmnopqrstuvwxyz'
      if (letters.indexOf(s[x]) < letters.indexOf(char)) {
        char = s[x]
      }
    }
  }
  return char
}

var s1 = 'heLlo world!'
console.log(cleanString(s1))
