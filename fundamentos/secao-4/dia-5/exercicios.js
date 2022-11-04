// 🚀 Modifique a variável para que não ocorra Erro;
//     let pessoa = {
//         nome: 'Henri',
//         idade: 20
//       }
//       pessoa = {
//         nome: 'Luna',
//         idade: 19
//       }
//       console.log('Nome:', pessoa.nome);
//       console.log('Idade:', pessoa.idade);

// 🚀 Transforme a função numeroAleatorio em uma arrow function;
// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

// const numeroAleatorio = () => Math.random()
// console.log(numeroAleatorio())

// 🚀 Transforme a função nomeCompleto em uma arrow function;

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

// const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

// 🚀 Altere a expressão if/else utilizando ternary operator;

// let speed = 90;
// const speedCar = (speed) => speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida` 
// console.log(speedCar(speed));

// Crie uma função que ligue e desligue um motor de um carro.
// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
// Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
// Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
// Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).

// let situacao = 'desligado';
// const ligarDesligar = () => situacao === 'desligado' ? situacao = 'ligado' : situacao = 'desligado'
// console.log(ligarDesligar(`O motor está ${situacao}`))
// console.log(ligarDesligar(`O motor está ${situacao}`))
// console.log(ligarDesligar(`O motor está ${situacao}`))

// 🚀 Crie uma função que calcule a área de um círculo.
// Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
// Com base nessa informação:
// Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
// Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
// Crie a lógica para retornar a área do círculo;
// Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).

// const circleArea = raio => {
//     const PI = 3.14;
//     let area = PI * raio ** 2;
//     return `Essa é a área do círculo: ${area}`
// }
// console.log(circleArea(5));

// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// const longestWord = text => {
//     let array = text.split(' ')
//     let armazenarWord = '';
//     for(const word of array) {
//         if (word.length > armazenarWord.length)
//         armazenarWord = word
//     }
//     return armazenarWord
// }
// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))

// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
// console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));