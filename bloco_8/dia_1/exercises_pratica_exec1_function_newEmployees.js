// 1 - Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

function generateEmployee(fullName) {
  const completeName = fullName;
  const email = `${completeName.toLowerCase().replace(/ /g, '_')}@trybe.com.br`;
    
  return { completeName, email };
};

const newEmployees = () => {
  const employees = {
    id1: generateEmployee('Pedro Guerra'),
    id2: generateEmployee('Luiza Drumond'),
    id3: generateEmployee('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees().id3);
