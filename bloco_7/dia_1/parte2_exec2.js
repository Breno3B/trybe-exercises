const longestWord = phrase => {
  const wordsArray = phrase.split(' ');
  let maxWordLength = 0;
  let result = '';

  for (const word of wordsArray) {
      if (word.length > maxWordLength) {
          maxWordLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));