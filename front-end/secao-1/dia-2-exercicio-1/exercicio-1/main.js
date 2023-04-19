import Swal from 'sweetalert2';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const accessToken = 5908275059255198;
const maxHeroes = 1000;
const randomId = () => Math.floor(Math.random() * maxHeroes);

button.addEventListener('click', (event) => {
    event.preventDefault();
    const id = randomId();

    fetch(`https://www.superheroapi.com/api.php/${accessToken}/${id}`)
        .then((response) => response.json())
        .then((data) => {
            img.src = data.image.url;
            name.innerHTML = data.name;
        })
        .catch((erro) => Swal.fire({
            title: 'Hero not found',
            text: erro.message,
            icon: 'error',
            confirmButtonText: 'Ok',
        }));
});
