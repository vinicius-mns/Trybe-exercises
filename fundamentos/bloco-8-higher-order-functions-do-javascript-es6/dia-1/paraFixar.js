// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const acordar = () => 'Acordando !!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const tomarCafe = () => 'Bora tomar café';

// 3 -  Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const dormir = () => 'Pratiu dormir';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.
const vida = (action) => action()

console.log (vida(acordar))
console.log (vida(tomarCafe))
console.log (vida(dormir))
