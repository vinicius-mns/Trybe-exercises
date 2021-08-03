const collection = [1, 2, 3, 4, 5];

const teste = () => collection.reduce((result, number) => result + number);
console.log(`a soma de ${collection} é ${teste()}`);


const reducer = (acumulador, outro) => 