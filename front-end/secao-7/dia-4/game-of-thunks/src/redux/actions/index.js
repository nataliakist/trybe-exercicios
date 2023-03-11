export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';

export const requestStarted = () => {
  return { type: REQUEST_STARTED };
}

export const requestSuccessful = (character) => {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: character,
  };
}

export function fetchCharacter(name) {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
      .then(response => response.json())
      .then(data => dispatch(requestSuccessful(data)))
  }
}

