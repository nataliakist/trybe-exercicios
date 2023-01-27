import React from 'react';
import PalavraChaveFavorita from './PalavraChaveFavorita';
import VaiComparecer from './VaiComparecer';
import EstadoFavorito from './EstadoFavorito';
import Nome from './Nome';

class Form extends React.Component {
  state = {
    palavraChaveFavorita: "",
    nome: "",
    vaiComparecer: false,
    estadoFavorito: "",
    formularioComErros: true,
  }

  handleError = () => {
    const { palavraChaveFavorita, nome, vaiComparecer, estadoFavorito } = this.state;

    const errorCases = [
      !nome.length,
      !estadoFavorito.length,
      !vaiComparecer,
      !palavraChaveFavorita.length,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    })
  }

  handleChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.handleError);
  } 

  render() {
    const { palavraChaveFavorita, nome, vaiComparecer, estadoFavorito, formularioComErros } = this.state;

    return (
      <div>
        <form>
          <fieldset>
            <PalavraChaveFavorita value={ palavraChaveFavorita} handleChange={this.handleChange} />
            <Nome value={ nome } handleChange= { this.handleChange } />
            <VaiComparecer value={ vaiComparecer } handleChange={ this.handleChange } />
            <EstadoFavorito value={ estadoFavorito } handleChange={ this.handleChange } />
            <label> 
              Insira uma foto de seu documento de identidade: <br></br>
              <input type="file" />
            </label>
          </fieldset>
        </form>

        { formularioComErros 
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}

export default Form;