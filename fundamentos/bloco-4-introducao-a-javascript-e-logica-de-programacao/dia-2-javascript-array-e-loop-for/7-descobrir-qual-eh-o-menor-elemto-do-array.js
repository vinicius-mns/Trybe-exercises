let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = numbers[0]

    for(index = 0; index < numbers.length; index++){

        numbers[index] > maior ? maior = numbers[index]: maior += 0
    }
        console.log(maior)