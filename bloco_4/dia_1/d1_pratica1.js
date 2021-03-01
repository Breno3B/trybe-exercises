/*
1 - Faça cinco programas, um para cada operação aritmética básica.
Seu programa deve ter duas variáveis, a e b , definidas no começo
com os valores que serão operados. Faça programas para:
*/

let fatorA = 48;
let fatorB = 7;

// ADIÇÃO
let additionResult = ( fatorA + fatorB);
console.log( "Resultado de ADIÇÃO: " + additionResult );

// SUBTRAÇÃO
let subtractionResult = ( fatorA - fatorB);
console.log( "Resultado de SUBTRAÇÃO: " + subtractionResult );

// MULTIPLICAÇÃO
let multiplicationResult = ( fatorA * fatorB);
console.log( "Resultado de MULTIPLICAÇÃO: " + multiplicationResult );

// DIVISÃO
if ((fatorA != 0) && (fatorB != 0)) {
  let divisionResult = ( fatorA / fatorB);
  console.log( "Resultado de DIVISÃO: " + divisionResult );
  } else {
    console.log( "Resultado de DIVISÃO: Não é possível realizar divisão por ZERO: " + "Fator A =" + fatorA + " Fator B =" + fatorB );  
}

// MÓDULO
let moduloResult = ( fatorA % fatorB);
console.log( "Resultado de MÓDULO: " + moduloResult );




