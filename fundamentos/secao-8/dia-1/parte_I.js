// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. 

// const newEmail = (fullName) => {
//   const email = fullName.toLowerCase().replace(' ', '_');
//   return {
//     fullName,
//     email: `${email}@trybe.com`,
//   }
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drumond'),
//     id3: callback('Carla Paiva'),
//   }
//   return employees;
// };

// console.log(newEmployees(newEmail));

// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

// const checkNumber = (myNumber, alleatoryNumber) => myNumber === alleatoryNumber;

// const sortNumber = (myNumber, callback) => {
//   let number = Math.floor(Math.random() * 5 ) + 1;
//   console.log(`O número sorteado foi: ${number}`);
//   return callback(myNumber, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
// };

// console.log(sortNumber(5, checkNumber));

// Crie uma HOF que receberá três parâmetros. Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } else if (studentAnswer === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
};

const countPoints = (studentAnswer, callback) => {
  let contador = 0;
  RIGHT_ANSWERS.forEach((element, index) => {
    const callbackReturn = callback(element, studentAnswer[index]);
    contador += callbackReturn;
  })
  return `Resultado final: ${contador} pontos`;
};
  
console.log(countPoints(STUDENT_ANSWERS, compareAnswers));