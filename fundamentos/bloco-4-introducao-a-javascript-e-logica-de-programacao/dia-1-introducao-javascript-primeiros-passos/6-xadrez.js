/*let piao
let rei
let rainha
let bispo
let torre
let cavalo*/

let peca = 'CaValO'

switch(peca.toLowerCase()){

    case 'rei':
    console.log('anda apenas uma casa para qualquer direcao')
    break;

    case 'rainha':
    console.log('anda quantas casas quiser para qualquer direcao')
    break;

    case 'bispo':
    console.log('anda apenas nas diagonais para qualquer direcao')
    break;

    case 'torre':
    console.log('anda quantas casa quiser, apenas orizontalmente ou verticalmente')
    break;

    case 'cavalo':
    console.log('anda em (L) pulando 3 casas')
    break;

    case 'piao':
    console.log('anda apenas uma casa para frente, so pode comer na diagonal, no seu primeio movimento pode pular 2 casa')
    break;
}

