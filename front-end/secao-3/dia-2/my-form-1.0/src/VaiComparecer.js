import React from "react";

class vaiComparecer extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return(
      <label> 
        Marque a caixinha caso vá comparecer ao evento:
        <input type="checkbox" name="vaiComparecer" value={ value } onChange={ handleChange } /> 
        { value === false ? 'Necessário marcar a caixinha para confirmar presença' : '' }
        <br></br>
      </label>
    );
  }
}

export default vaiComparecer;