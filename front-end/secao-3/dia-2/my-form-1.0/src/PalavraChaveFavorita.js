import React from 'react';

class PalavraChaveFavorita extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
            Escolha sua palavra chave favorita:
          <select name="palavraChaveFavorita" value={ value } onChange={ handleChange }>
            <option></option>
            <option value="Componentes">Componentes</option>
            <option value="Estados">Estados</option>
            <option value="Eventos">Eventos</option>
            <option value="Props">Props</option>
          </select> 
          { !value ? 'A palavra chave favorita precisa ser preenchida!' : '' }
          <br></br>
          </label>
    );
  }
}

export default PalavraChaveFavorita;