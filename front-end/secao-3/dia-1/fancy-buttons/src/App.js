import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    function button1() {
      console.log('Clicou no botão 1!')
    }
    function button2() {
      console.log('Clicou no botão 2!')
    }
    function button3() {
      console.log('Clicou no botão 3!')
    }
    return (
      <>
        <button onClick={button1}>Botão 1</button>
        <button onClick={button2}>Botão 2</button>
        <button onClick={button3}>Botão 3</button>
      </>
    );
  }
}

export default App;
