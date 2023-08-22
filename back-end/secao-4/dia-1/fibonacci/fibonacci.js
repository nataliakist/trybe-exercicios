const readline = require('readline-sync');
const fs = require('fs').promises;

function fibonacciSequence(n) {
  let sequence = [];
  let penultimo = 0;
  let ultimo = 1;
  let num;

  for (let index = 0; index < n; index++) {
    if (index === 0){
      sequence.push(ultimo)
    } else {
      num = ultimo + penultimo
      sequence.push(num)
      penultimo = ultimo;
      ultimo = num;
    }
  }
  
  return sequence;
}

function main() {
  const n = readline.questionInt('Enter \'n\' value: ')
  if(n <= 0) {
    console.log('Enter a number greater then \'0\'!');
  }
  console.log(fibonacciSequence(n));
}

main();
