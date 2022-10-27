// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function palindromo (string) {
//     let reversedString = string.split('').reverse().join(''); 
//     if (reversedString === string){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(palindromo('arara'))

// function verificaPalindrome(word) {
//     for(index in word) {
//       if(word[index] == word[(word.length - 1) - index]) {
//         return true;
//       } else {
//         return false
//       };    
//     }
//   }

//   console.log(verificaPalindrome('natalia'))

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function maiorValor (array) {
//     let maior = 0;
//     for(let valor of array) {
//         if (valor > maior) {
//             maior = valor
//         }
//     }
//     return array.indexOf(maior)
// }

// console.log(maiorValor([2, 3, 6, 7, 10, 1]))

// function indiceDoMaior(numeros) {
//     let indiceMaior = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMaior] < numeros[indice]) {
//         indiceMaior = indice;
//       }
//     }
//     return indiceMaior;
//   }
  
//   console.log(indiceDoMaior([2, 3, 15, 7, 10, 1, 12]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function menorValor (array) {
//     let menor = 0;
//     for(let valor of array) {
//         if (valor < menor) {
//             menor = valor
//         }
//     }
//     return array.indexOf(menor)
// }

// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function maiorNome (array) {
//     let nome = '';
//     for(let valor of array){
//         if (valor.length > nome.length){
//             nome = valor
//         }
//     }
//     return nome
// }

// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana','Adamastor']))

// function maiorPalavra(palavras) {
//     let maiorPalavra = palavras[0];
//     for (let indice in palavras) {
//       if (maiorPalavra.length < palavras[indice].length) {
//         maiorPalavra = palavras[indice];
//       }
//     }
  
//     return maiorPalavra;
//   }
  
//   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function maisRepetido(array){
//     let contAtual = 0;
//     let contArmazenado = 0;
//     let indexArmazenado = 0;
    
//     for(let index in array){
//         for(let index2 in array){
//             if (array[index] === array[index2])
//             contAtual += 1;
//         }
//         if (contAtual > contArmazenado){
//             contArmazenado = contAtual;
//             indexArmazenado = index;
//         }
//         contAtual = 0;
//     }
    
//     return array[indexArmazenado]
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 3, 3]))

// function maisRepetido(array){
//     let contAtual = 0;
//     let contArmazenado = 0;
//     let valueArmazenado = 0;
    
//     for(let value of array){
//         for(let value2 of array){
//             if (value === value2)
//             contAtual += 1;
//         }
//         if (contAtual > contArmazenado){
//             contArmazenado = contAtual;
//             valueArmazenado = value;
//         }
//         contAtual = 0;
//     }
    
//     return valueArmazenado
// }

// console.log(maisRepetido([2, 3, 3, 5, 8, 2, 3]))

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function somatorio(numero) {
//   let soma = 0;
//     for(let i = 1; i <= numero; i++){
//       soma += i
//     }
//   return soma
// }
   
// console.log(somatorio(8))

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// function finalPalavra (stringWord, stringEnding) {
//   wordReverse = stringWord.split('').reverse().join('')
//   endingReverse = stringEnding.split('').reverse().join('')
//   for(let i = 0; i < endingReverse.length; i++){
//     if (endingReverse[i] === wordReverse [i]){
//       return true;
//     } else {
//       return false;
//     }
//   }
//   return controle;
// }
// console.log(finalPalavra('trybe', 'be'));
// console.log(finalPalavra('joaofernando', 'fernan')); 
