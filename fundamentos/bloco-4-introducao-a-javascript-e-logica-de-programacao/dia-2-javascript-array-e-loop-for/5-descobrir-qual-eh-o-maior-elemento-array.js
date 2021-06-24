let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[0]

    for(index = 0; index < numbers.length; index++){

        numbers[index] < menor ? menor = numbers[index]: menor += 0
    }
        console.log(menor)