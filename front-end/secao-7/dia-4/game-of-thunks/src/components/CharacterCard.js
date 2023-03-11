import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterCard extends Component {
  render() {
    const { character, isLoading } = this.props;
    const { name, culture, born, titles, aliases } = character;

    if (isLoading) return <h3>Loading...</h3>;

    if(character) {
      return (
        <div>
          <h3>{ name }</h3>
          <p>Born { born }</p>
          <p>{ culture } Culture</p>
          <p>Titles:</p>
          <ul>
            { titles.map((title) => (
              <li key={title}>{ title }</li>
            )) }
          </ul>
          <p>Aliases:</p>
          <ul>
            { aliases.map((alias, index) => (
              <li key={alias}>{ alias }</li>
            )) }
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  character: state.character,
});

export default connect(mapStateToProps)(CharacterCard)