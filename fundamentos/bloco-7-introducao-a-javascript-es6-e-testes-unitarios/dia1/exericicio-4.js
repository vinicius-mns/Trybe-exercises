//Crie uma função que receba uma frase e retorne qual a maior palavra.

const frase = (a) => {;
  const resposta = a.split(' ');
  let contador = 0;

  
  let palavra = null;
  let  posicao = null;
  let  letras = null;


  for (let index = 0; index < resposta.length; index += 1) {  

    if(contador < resposta[index].length) {
      contador = resposta[index].length

      palavra = resposta[index]
      posicao = index + 1
      letras = resposta[index].length
    }
    
  }

  console.log(`A mior palavra é " ${palavra.toUpperCase()} ", tem ${letras} lestras e está na posicao ${posicao}`)



}
frase('apenas uma frase para fazermos um teste')