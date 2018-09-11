function digitsMultiply (num) {
  var prod = 1
  var strNum = String(num)
  for (var x = 0; x < strNum.length; x++) {
    if (parseInt(strNum[x]) !== 0) {
      prod = prod * parseInt(strNum[x])
    }
  }
  return prod
}


var a = 123405
console.log(digitsMultiply(a))
