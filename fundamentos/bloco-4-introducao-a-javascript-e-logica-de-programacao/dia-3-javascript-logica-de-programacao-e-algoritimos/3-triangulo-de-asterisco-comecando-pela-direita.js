let n = 5
let asterisco = ''
resposta = '' 

for(let i = 0; i < n; i += 1){  

    asterisco += '*'
    let vazio = ''   

    for(let contador = n-i - 1; contador <= n;contador -= 1){        
        if(contador <= 0){
        break
        }
        vazio += ' '                
    } 

    resposta = vazio + asterisco
    console.log(resposta)
    
}
