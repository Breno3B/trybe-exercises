let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtdOddNumbers = 0;

for (let index = 0; index < numbers.length; index++) {
    if ( ( numbers[index] % 2 ) != 0) {
        qtdOddNumbers++;
    }
}

if ( qtdOddNumbers == 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log("Quantidade de números ímpares: " + qtdOddNumbers);
}
