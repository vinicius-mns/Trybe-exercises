const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((param) => param === name)
}

console.log(hasName(names, 'Ana'))