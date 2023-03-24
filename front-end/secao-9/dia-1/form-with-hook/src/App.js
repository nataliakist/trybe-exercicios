import React, { useState } from 'react';
import './App.css';

function App() {
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState('')
  const [ city, setCity ] = useState('')
  const [ module, setModule ] = useState()

  return (
    <form>
      <fieldset>
        <legend>Dados pessoais</legend>
        <input type="text" placeholder='Nome' value={name} onChange={({target}) => setName(target.value)} />
        <br />
        <input type="numb" placeholder='Idade' value={age} onChange={({target}) => setAge(target.value)}/>
        <br />
        <input type="text" placeholder='Cidade' value={city} onChange={({target}) => setCity(target.value)}/>
        <br />
        <input type="radio" name="module" value="Fundamentos" checked={module === 'Fundamentos'} onChange={({target}) => setModule(target.value)} /> Fundamentos
        <input type="radio" name="module" value="Front-end" checked={module === 'Front-end'} onChange={({target}) => setModule(target.value)} /> Front-end
        <input type="radio" name="module" value="Back-end" checked={module === 'Back-end'} onChange={({target}) => setModule(target.value)} /> Back-end
        <input type="radio" name="module" value="Ciências da computação" checked={module === 'Ciências da computação'} onChange={({target}) => setModule(target.value)} /> Ciências da Computação
        <br />
        <button type="submit" onClick={(e) =>{
          e.preventDefault();
          console.log('Click!');
        }}
        >
          Enviar
        </button>
      </fieldset>
    </form>
  );
}

export default App;
