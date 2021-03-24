const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  for (let index1 = 0; index1 < oddsAndEvens.length; index1 += 1) {
    for (let index2 = 0; index2 < oddsAndEvens.length - 1; index2 += 1) {
      if (oddsAndEvens[index2] > oddsAndEvens[index2 + 1]) {
        const largerElement = oddsAndEvens[index2];
        oddsAndEvens[index2] = oddsAndEvens[index2 +1];
        oddsAndEvens[index2 +1] = largerElement;
      }
    }
  }
  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);
