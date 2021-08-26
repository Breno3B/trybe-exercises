const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão', { flag: 'w' }); //{ flag: 'wx' } // lança um erro caso o arquivo já exista
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
    console.error(err);
  }
}

main()
