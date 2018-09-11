var a = [['Logan', 'Mike'], ['Logan', 'Alex'], ['Mike', 'Ben']]

function isFamily (data) {
  var fam = new Set()
  data.array.forEach(function (element) {
    if (fam.has(element[0]))
  }, this);
}

console.log(isFamily(a))
