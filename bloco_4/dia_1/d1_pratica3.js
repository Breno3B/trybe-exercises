/*
3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let fatorA = 10;
let fatorB = 15;
let fatorC = 15;


// COMPRARAÇÃO:
// Lógica cópiada da página: https://sites.google.com/site/inflp2009/2--instrucoes-compostas/if-else/maior-de-tres-numeros
if ( fatorA > fatorB ) {
  if ( fatorA > fatorC ) {
    console.log( "MAIOR número entre os trẽs é: " + fatorA );
  } else {
    console.log( "MAIOR número entre os trẽs é: " + fatorC );
  }
} else {
  if ( fatorB > fatorC ) {
    console.log( "MAIOR número entre os trẽs é: " + fatorB );
  } else {
    console.log( "MAIOR número entre os trẽs é: " + fatorC );
  }  
}