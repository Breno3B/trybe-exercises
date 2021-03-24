let fatorial = (number) => {
  let resultado = number;
  for (let index = 1; index < number; index += 1) {
    resultado *= index;
  }
  return resultado;
}

console.log(fatorial(3));
