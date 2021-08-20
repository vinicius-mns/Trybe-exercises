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

describe('A funcao sun(a, b) retorna', () => {
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


// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
//  2.1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
//  2.2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//  2.3 - Verifique se o array passado por parâmetro não sofreu alterações
//  2.4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

describe('A funcao myRemove(arr, item) retorna', () => {
  const array = [1,2,3,4]

  it('o array esperado', () => {
    expect(myRemove(array, 3)).toEqual([1,2,4])
  })

  it('o array inalterado', () => {
    expect(array).toEqual([1,2,3,4])
  })
}) 