import { nanoid } from "nanoid";
import './style.css';

const button = document.querySelector('button');
const display = document.querySelector('h2');

button.addEventListener('click', () => {
  display.innerHTML = nanoid();
});