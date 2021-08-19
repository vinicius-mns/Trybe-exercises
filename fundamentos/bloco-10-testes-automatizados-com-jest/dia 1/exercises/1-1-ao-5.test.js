const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
} = require('./1-1');

// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
//  1.1 - Teste se o retorno de sum(4, 5) é 9
//  1.2 - Teste se o retorno de sum(0, 0) é 0
//  1.3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//  1.4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('a funcao sun(a, b) retorna', () => {
  it('9 se chamar sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9)
  })

  it('0 se chamar sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0)
  })

  it('testa erro', () => {
    expect(() => {sum(4, '5')}).toThrow()
  })

  it('testa erro com a msg de erro', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
  })
})