var a = ['.X..', '.X..', '.X..', '...X']

function recallPassword (grille) {
  var pos = []
  var x = 0
  grille.forEach(function (element) {
    for (var i = 0; i < element.length; i++) {
      if (element[i] === 'X') {
        pos[x] = i
      }
    }
    x += 1
  }, this)
  console.log(pos)
  rotatePos(pos)
}

function rotatePos (pos) {
  var newPos = []
  for (var i = 0; i < pos.length; i++) {
    switch (i) {
      case 0:
        newPos[i] = topRow(pos[i])
    }
  }
  console.log(newPos)
}

function topRow (pos) {
  switch (pos) {
    case 0:
      return 3
      break
    case 1:
      
  }
}
recallPassword(a)
