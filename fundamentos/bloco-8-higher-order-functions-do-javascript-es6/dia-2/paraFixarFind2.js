const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((primeiroNome) => primeiroNome.length === 5)
}

console.log(findNameWithFiveLetters());