const { readFileSync } = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = readFileSync(nomeDoArquivo).toString();
  console.log(`Conteúdo do arquivo: ${data}`);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}