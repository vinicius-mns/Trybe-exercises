/*
let angulo1 = 60
let angulo2 = 60
let angulo3 = 68

let triangulo = angulo1 + angulo2 + angulo3

switch(triangulo){
    case 180:
    console.log('true')
    break;

    default:
    console.log('false')
} 
*/

function triangulo(a,b,c){
    let resposta 
    if (a + b + c == 180) {
        return true
    }else if(a + b + c != 180){
        return false
    }else{
        return 'erro'
}
}