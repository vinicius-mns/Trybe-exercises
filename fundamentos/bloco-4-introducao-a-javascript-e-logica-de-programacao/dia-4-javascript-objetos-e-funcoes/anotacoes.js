let QuemSouEu = {
    name: 'Vincius',
    lastName: 'Silva',
    age:22,
    tall: 165,
    birthday:{
        day: 29,
        month: 9,
        year: 1998,
    }

};
    QuemSouEu ['fullName'] = QuemSouEu.name + ' ' + QuemSouEu.lastName

    //console.table(QuemSouEu)

    //console.log(`Meu nome é ${QuemSouEu.name} ${QuemSouEu.lastName}, tenho ${QuemSouEu.age} anos.`)
    //utilizando QuemSouEu.nome vc acessa o nome do objeto 

    //console.log(`Meu nome é ${QuemSouEu['name']} ${QuemSouEu['lastName']}, tenho ${QuemSouEu.age} anos.`)
    //utilizando QuemSouEu[nome] vc acessa o nome do objeto

    
    console.log(`Olá, meu nome é ${QuemSouEu.fullName}, eu tenho ${QuemSouEu.age}, nasci em ${QuemSouEu.birthday['day']}/${QuemSouEu.birthday['month']}/${QuemSouEu.birthday['year']}`)

    //console.log(QuemSouEu['birthday']['day'])



      