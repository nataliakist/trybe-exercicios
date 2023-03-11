import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from './redux/actions';
import Charactercard from './components/CharacterCard'

class App extends Component {
  state = {
    isReady: false,
    characterName: ''
  }

  render() {
    const { characterName, isReady } = this.state;
    const { dispatch } = this.props;

    return (  
      <>
        <input
          type='text'
          value={ characterName }
          placeholder='Type a GoT character name'
          onChange={({target}) => this.setState({ characterName: target.value })}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(fetchCharacter(characterName))
            this.setState({ isReady: true })
          }}
        >
          Procurar
        </button>
        {isReady && <Charactercard />}
      </>
    );
  }
}

export default connect()(App)
