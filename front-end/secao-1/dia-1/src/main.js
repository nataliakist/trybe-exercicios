import validator from 'validator';

const button = document.querySelector('#button');
const texto = document.querySelector('#value');
const seletor = document.querySelector('#option');
const result = document.querySelector('#answer');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const verificadores = {
        cpf: validator.isTaxID(texto.value, 'pt-BR'),
        email: validator.isEmail(texto.value),
        data: validator.isDate(texto.value),
        celular: validator.isMobilePhone(texto.value, 'pt-BR'),
        URL: validator.isURL(texto.value),
    };
    result.innerHTML = `A validação retornou ${verificadores[seletor.value]}`;
});
