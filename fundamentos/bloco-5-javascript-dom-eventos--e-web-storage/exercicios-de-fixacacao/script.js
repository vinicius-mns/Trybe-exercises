// 1 Acesse o elemento elementoOndeVoceEsta .
// 2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// 3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// 4 Acesse o primeiroFilho a partir de pai .
// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// 6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// 7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// 8 Agora acesse o terceiroFilho a partir de pai .

// part 2 --------------------------------------------------------

// 1 Crie um irmão para elementoOndeVoceEsta .
// 2 Crie um filho para elementoOndeVoceEsta .
// 3 Crie um filho para primeiroFilhoDoFilho .
// 4 A partir desse filho criado, acesse terceiroFilho .


let pai = elementoOndeVoceEsta.parentElement 
//1.1

pai.style.color = 'red' 
//1.2

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
    primeiroFilhoDoFilho.innerText = 'Texto'
//1.3

let primeiroFilho = pai.firstElementChild
//1.4

let primeiroFilhoB = elementoOndeVoceEsta.previousSibling
//1.5

let texto = elementoOndeVoceEsta.nextSibling
//1.6

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling
//1.7

// let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
//1.8

let irmao = document.createElement('div')
    irmao.id = 'IrmaoDoElementoOndeVoceEsta'
    irmao.innerText = 'irmaoDoElementoOndeVoceEsta'
    pai.appendChild(irmao)
// 2.1

let filho = document.createElement('div')
    filho.id = 'filhoDoElementoOndeVoceEsta'
    filho.innerText = 'Filho do elemento Onde vc está'
    elementoOndeVoceEsta.appendChild(filho)
//2.2

let filho2 = document.createElement('div')
    filho2.id = 'filhoDoPrimeiroFilho'
    filho2.innerText = 'Filho do Primeiro filho' 
    primeiroFilho.appendChild(filho2)
//2.3

let terceiro = primeiroFilhoDoFilho.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling
//2.4

