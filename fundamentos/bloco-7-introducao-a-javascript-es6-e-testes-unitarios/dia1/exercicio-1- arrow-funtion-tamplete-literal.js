const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = ifScope + ` ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  
}

testingScope(true);

//Modifique a estrutura da função para que ela seja uma arrow function .
//Modifique as concatenações para template literals .