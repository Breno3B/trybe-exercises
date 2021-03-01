let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Código copiado/atualizado do exemplo contido na página do exercício

for (let index1 = 1; index1 < numbers.length; index1 += 1) {
    for (let index2 = 0; index2 < index1; index2 += 1) {
        if ( numbers[index1] > numbers[index2] ) {
            let temporaryStorage = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = temporaryStorage  ;          
        }
    }
}

console.log(numbers);