
const powerSupply = function (network, power) {
  let key = Object.keys(power)[0]
  let range = power[key]
  let powerConnections = 0
  let powered = []
  for (let i = 0; i < power[key]; i++) {
    network.forEach(element => {
      const p = element.includes(key)
      if (p) {
        powered.push(...element)
        powerConnections += 1
      }
    })
  }
  console.log(powerConnections)
}

powerSupply([['p1', 'c1'], ['c1', 'c2']], {'p1': 1})
