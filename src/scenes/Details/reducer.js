const defaultState = {
  loading: false,
  loaded: false,
  pokemon: null
};

export default function detailsReducer(state = defaultState, action) {
  switch (action.type) {
    case "LOAD_POKEMON_DETAILS_PENDING":
      return {
        ...state,
        loading: true
      };
    case "LOAD_POKEMON_DETAILS_FULFILLED":
      return {
        ...state,
        loading: false,
        loaded: true,
        pokemon: action.payload
      };
    case "LOAD_POKEMON_DETAILS_REJECTED":
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    default:
      return state;
  }
}
