let divisiveisPor3 = 0;
let array1 = [];

for (let index = 2; index <= 150; index += 1) {
    if (index % 3 == 0) {
        divisiveisPor3 += 1
        array1.push(index)
    }
}
if (divisiveisPor3 == 50) {
    console.log("A quantidade de números divisiveis por 3 é de: ", divisiveisPor3)
    console.log("Mensagem Secreta")
    console.log(array1)
} else {
    console.log("A quantidade de números divisiveis por 3 é de: ", divisiveisPor3)
    console.log("A quantidade de divisiveis por 3 não é igual a 50")
    console.log(array1)
}