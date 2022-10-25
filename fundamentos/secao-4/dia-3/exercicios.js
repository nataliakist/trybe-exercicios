// 1. Crie um algoritmo que imprima na tela o fatorial de 10.

// let numero = 10;
// let fatorial = 1;

// for (let index = numero; index > 0; index--) {
//     fatorial *= index
// }

// console.log(fatorial)

// 2. Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let reverse = '';

// for (let i = word.length-1; i >= 0; i--) {
//     reverse += word[i]
// }
// console.log(reverse)

// Outra solução possível:

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

// Mais uma solução possível:

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

// 3. Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = ''
// let menorPalavra = ''

// for (let i = 0; i < array.length; i++) {
//     if (maiorPalavra.length < 1 && menorPalavra.length < 1) {
//         maiorPalavra = array[i]
//         menorPalavra = array[i]
//     } else {
//         if (array[i].length > maiorPalavra.length) {
//             maiorPalavra = array[i]
//         }
//         if (array[i].length < menorPalavra.length) {
//             menorPalavra = array[i]
//         }
//     }
// }

// console.log(maiorPalavra)
// console.log(menorPalavra)

// 4. Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

// let primos = 0;
// let divisiveis = 0;
// let maiorNumero = 0;

// for (let i=2; i<=50; i++) {
//     divisiveis = 0
//     for (let z=1; z<=i; z++) {
//         if (i % z == 0) {
//             divisiveis += 1
//         }
       
//     }
//     if (divisiveis == 2) {
//         primos += 1
//         if (i > maiorNumero) {
//             maiorNumero = i
//         }
//     }
// }
// console.log(primos)
// console.log(maiorNumero)

// Exercicios bonus:

// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// let n = 5
// let asteriscos = ''
// for (let i=0; i<n; i++) {
//     asteriscos += "*"
// }
// for (let i=0; i<n; i++) {
//     console.log(asteriscos)
// }

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base

// let n = 5
// let asteriscos = ''
// for (let i=0; i<n; i++) {
//     asteriscos += "*"
//     console.log(asteriscos)
// }

// Agora inverta o lado do triângulo.

let n = 5
let asteriscos = ''

for (let i = 0; i < n; i += 1){
    for (let z = 0; z < n; z += 1){
        if (z >= n-1) {
            asteriscos += '*'
        }
    }
    console.log(asteriscos)
}



