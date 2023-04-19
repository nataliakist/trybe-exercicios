// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      characterName: '',
      characterList: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState(
        {
          characterList: data.results,
          characterName: data.results.name,
        })
    })
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  componentDidMount = () => {
    this.fetchCharacters();
  };

  render() {
    const { characterName, characterList } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          <div className="filtro">
            <label htmlFor="characterInput">
              Pesquise algum personagem:
            <input type="text" id="characterInput" name="characterName" value={ characterName } onChange={ this.handleChange }/>
            </label>
            <button type="button" onClick={ this.handleChange }>Pesquisar</button>
            {  }
          </div>
          {
            characterList.map(({ id, name, image }) => {
              return (
              <div className="container" key={id}>
                <p>{ name }</p>
                <img src={ image } alt={ name } />
              </div>
            )})
          }
        </div>
      </div>
    );
  }
}

export default App;
