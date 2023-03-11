import { REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  character: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        character: action.payload[0],
      };

    default: return state
  }
}

export default reducer;