// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto

// function perimArea (base, altura) {
//     let area = base * altura;
//     let perimetro = 2 * base + 2 * altura
//     let objeto = {
//         area,
//         perimetro,
//     }
//     return objeto
// }

// console.log(perimArea(4,7))

// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares dentro de um objeto

// function paresImpares(array) {
//     let pares = 0;
//     let impares = 0;
//     for(let valor of array) {
//         if (valor % 2 === 0) {
//             pares += 1
//         } else {
//             impares += 1
//         }
//     }
//     let numeros = {
//         pares,
//         impares,
//     }
//     return numeros;
// }
// console.log(paresImpares([3,7,4,10,2,0,9,12]))

// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Dica: Use o split.

// function funcaoConfere(stringWord, stringEnding) {
//
//     let stringEndingReverse = stringEnding.split('').reverse().join('');
//     let stringWordReverse = stringWord.split('').reverse().join('');
    
//     for(let i = 0; i < stringEndingReverse.length; i++){
//         if(stringEndingReverse[i] == stringWordReverse[i]){
//             return true
//         } else {
//             return false
//         }
//     }
//     return resultado;
//     }

// console.log(funcaoConfere('natalia', 'lia')) 

// function verificaFimPalavra(word, ending) {
//     let resultado = word.split(ending)
//     if (resultado[resultado.length-1] === ''){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(verificaFimPalavra('natalia', 'lia'))

// function verificaString(palavra, ending) {
//     if (palavra.endsWith(ending)) {
//       return true
//     }
//     return false;
//   }

// console.log(verificaString('natalia', 'lia'))