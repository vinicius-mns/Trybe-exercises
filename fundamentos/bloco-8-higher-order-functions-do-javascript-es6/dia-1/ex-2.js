// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

//--------------------------------------------------------------------------------

                              // sem HOF

const sorteio = (numeroApostado) => {
  const sorteado = Math.floor((Math.random() * 5) + 1);
  if(numeroApostado === sorteado){
    return `o seu numero é ${numeroApostado} e o numero sorteado foi ${sorteado} vc Ganhou`
  } else {
    return `o seu numero é ${numeroApostado} e o numero sorteado foi ${sorteado} vc Perdeu`
  }
}

//console.log(sorteio(4))

// -------------------------------------------------------------------------------

const jodoDoBicho = (escolhido, funcao) => {
  const sorteado = Math.floor((Math.random() * 5) + 1);

  return funcao(escolhido, sorteado) ? `o seu numero é ${escolhido} e o numero sorteado foi ${sorteado} vc Ganhou` : `o seu numero é ${escolhido} e o numero sorteado foi ${sorteado} vc Perdeu`;
}

const comparador = (escolhido, sorteado) => escolhido === sorteado

  console.log(jodoDoBicho(4,comparador))