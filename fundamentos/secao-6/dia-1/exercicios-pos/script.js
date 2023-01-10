const buttons = document.querySelector('#buttons')
const submitButton = document.querySelector('#submit-button')
const clearButton = document.createElement('button')
const newButton = () => {
  clearButton.id = 'clear-button'
  clearButton.className = 'button'
  clearButton.innerText = 'Limpar'
  buttons.appendChild(clearButton)
}
newButton();

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
})

clearButton.addEventListener('click', (event) => {
  const inputElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for(let i = 0; i < inputElements.length; i += 1){
    const clearInput = inputElements[i];
    clearInput.value = '';
    clearInput.checked = false;
  }
  textArea.value = '';
})
