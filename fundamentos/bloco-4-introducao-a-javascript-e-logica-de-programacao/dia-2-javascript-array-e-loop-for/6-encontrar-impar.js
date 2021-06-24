let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let contadorImpar = null

for(index = 0; index < numbers.length; index++){
    if(numbers[index]%2 == 1){
        contadorImpar += 1
        }else if(contadorImpar == null){
            contadorImpar = 'nenhum valor ímpar encontrado'
        }
}   
    console.log(contadorImpar)