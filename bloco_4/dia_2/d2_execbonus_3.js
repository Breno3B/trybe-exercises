let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultipliedByNext = [];

// RESULTADO esperado: numbersMultipliedForNext = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if ( index1 < numbers.length -1 ) {
        numbersMultipliedByNext.push( (numbers[index1]) * (numbers[index1 + 1])  );
        } else {
            numbersMultipliedByNext.push( numbers[index1] * 2 );
            }
        }

console.log(numbersMultipliedByNext);