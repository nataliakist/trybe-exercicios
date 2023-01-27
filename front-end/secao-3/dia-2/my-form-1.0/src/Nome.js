import React from "react";

class Nome extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label> 
        Digite seu nome:
        <input id="nome" type="text" name="nome" value={ value } onChange={ handleChange } /> 
        { !value ? 'O nome precisa ser preenchido!' : '' }
        <br></br>
      </label>
    );
  }
}

export default Nome;