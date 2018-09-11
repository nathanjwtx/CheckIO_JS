var a = [['Logan', 'Mike'], ['Logan', 'Jack'], ['Mike', 'Alex'], ['John', 'Fred'], ['Jack', 'Logan']]
var x = 0

function isFamily (data) {
  data.forEach(function(element) {
    x += 1
    data.forEach(function(element1) {
      if (element[0] === element1[1] && element[1] !== element1[0])
        console.log(x)
    })
  })
}


isFamily(a)
