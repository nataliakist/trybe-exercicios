import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.button1 = this.button1.bind(this)
    this.button2 = this.button2.bind(this)
    this.button3 = this.button3.bind(this)
  }
  button1() {
    console.log(this)
    console.log('Clicou no botão 1!')
  }
  button2() {
    console.log(this)
    console.log('Clicou no botão 2!')
  }
  button3() {
    console.log(this)
    console.log('Clicou no botão 3!')
  }

  render() {
    return (
      <>
        <button onClick={this.button1}>Botão 1</button>
        <button onClick={this.button2}>Botão 2</button>
        <button onClick={this.button3}>Botão 3</button>
      </>
    );
  }
}

export default App;
