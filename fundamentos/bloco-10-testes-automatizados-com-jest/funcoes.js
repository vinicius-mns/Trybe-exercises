const calculator = (num1, num2, operator) => {
  if(operator === '+') { return num1 + num2 }
  if(operator === '-') { return num1 - num2 }
  if(operator === 'x') { return num1 * num2 }
  if(operator === '/') { return num1 / num2 }
}

const ehCirculo = (circulo) => {
  if (circulo === 0 || circulo.toUpperCase() === 'O') {
    return true
  } else {
    return false
  }
}

module.exports = {
  calculator,
  ehCirculo,
}