function ehUmPolindromo(polindromo){
    
    let contador = 0

    let xuxu = polindromo.replaceAll(' ','').toLowerCase()
    for(index = 0 , index2 = xuxu.length -1; index < xuxu.length; index += 1, index2 -= 1){
    
        if(xuxu[index] === xuxu[index2]){
            contador += 1
        }
    }   
    if(xuxu.length == contador){
        return true
    }else{
        return false
    }
    console.log(xuxu)
}