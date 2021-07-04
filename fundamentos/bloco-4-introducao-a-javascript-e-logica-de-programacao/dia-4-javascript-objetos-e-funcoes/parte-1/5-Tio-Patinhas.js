let infoMargarida = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  
  infoMargarida ['recorrente'] = 'Sim'

let infoTioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

 resposta = ''

for(let key in infoMargarida){
    if(infoMargarida[key] === infoTioPatinhas[key]){
        console.log('Ambos ' + key)
    }else{
        console.log(infoMargarida[key] +' e '+infoTioPatinhas[key])
    }
    
}
    
