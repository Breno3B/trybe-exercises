// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindromo(string) {
        let stringInvertida = "";

    for (let index = (string.length - 1); index >= 0; index -= 1 ) {
        stringInvertida = stringInvertida + string[index];
        }

    if ( string === stringInvertida ) {
        return true;
        } else {
            return false;
            }
}