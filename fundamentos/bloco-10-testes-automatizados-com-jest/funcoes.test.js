const {
  calculator,
  ehCirculo,
} = require('./funcoes')

describe('A calculadora', () => {
  it('soma', () => {
    expect(calculator(2,2,'+')).toBe(4)
  });
//it ou test é literalmente a mesma coisa.  pode se usar it ou pode se usar test
  test('subtrai', ()=> {
    expect(calculator(41,2,'-')).toBe(39)
  });

  it('multiplica', () => {
    expect(calculator(297,244,'x')).toBe(72468)
  });

  test('divide',() =>{
    expect(calculator(12,6,'/')).toBe(2)
  });
});

describe('É circulo ?', () => {
  it('a letra "O" é um circiculo', () => {
    expect(ehCirculo('O')).toBe(true)
  });

  it('a letra "X" nao é um circulo', () => {
    expect(ehCirculo('x')).toBe(false)
  })
  
  it('o numero 0 é um circulo', () => {
    expect(ehCirculo(0)).toBe(true)
  })
});