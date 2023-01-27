import React from "react";

class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    const maxCharac = 100;
    return(
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! <br></br>
        <textarea name='estadoFavorito' value={ value } onChange={ handleChange } /> 
        { !value ? 'O estado precisa ser preenchido!' : '' }
        { value.length > maxCharac ? 'Escreva no máximo 100 caracteres' : '' }
        <br></br>
      </label>
    );
  }
}

export default EstadoFavorito;