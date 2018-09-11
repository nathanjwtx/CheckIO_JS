const calcCosts = matrix => matrix.map((row, index) => ({index, cost : row.reduce((a,b) => a + b)})).sort((a,b)=> a.cost - b.cost)[0];
const transoneMatrix = matrix => matrix.map((_, i) =>  matrix.map(e => e[i]));
function weakPoint(matrix){
    return [calcCosts(matrix).index, calcCosts(transoneMatrix(matrix)).index]
}
