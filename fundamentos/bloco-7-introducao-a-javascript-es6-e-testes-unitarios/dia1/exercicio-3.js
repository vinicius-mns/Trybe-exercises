//Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (n) => {
  let contador = 1

  for (let index = n; index > 1; index -= 1) {
    contador *= index    
  }

  resposta = `o fatorial de ${n} é ${contador}`
  
  console.log (resposta)
}
  fatorial(6)