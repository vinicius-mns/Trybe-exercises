const calculator = (num1, num2, operator) => {
  if(operator === '+') { return num1 + num2 }
  if(operator === '-') { return num1 - num2 }
  if(operator === 'x') { return num1 * num2 }
  if(operator === '/') { return num1 / num2 }
}

describe('A calculadora', () => {
  test('soma', () => {
    expect(calculator(2,2,'+')).toBe(4)
  });

  test('subtrai', ()=> {
    expect(calculator(41,2,'-')).toBe(39)
  });

  test('multiplica', () => {
    expect(calculator(297,244,'x')).toBe(72468)
  });

  test('divide',() =>{
    expect(calculator(12,6,'/')).toBe(2)
  });
});