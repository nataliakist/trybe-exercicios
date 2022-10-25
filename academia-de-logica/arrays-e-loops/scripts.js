const numbers = [3, 8, 13, 5, 17, 2];
const valor = 8;
let contador = 0;

for (let index = 0; index < numbers.length; index += 1) {
	if (valor == numbers [index]) {
		contador += index
	}
}
if (contador == 0) {
	console.log("Elemento não encontrado no array")
} else {
	console.log(contador)
}
