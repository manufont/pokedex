const defaultState = {
  allPokemons: [],
  filteredPokemons: [],
  displayedPokemons: [],
  hiddenPokemons: false,
  loading: false,
  loaded: false,
  inputValue: "",
  inputValid: false,
  size: 11,
  error: null
};

const normalize = str => str.trim().toLowerCase();

const pokemonFilter = input => pokemon =>
  normalize(input) && normalize(pokemon.name).indexOf(normalize(input)) !== -1;

const addPokemonId = pokemon => {
  const splittedUrl = pokemon.url.split("/");
  return {
    ...pokemon,
    id: parseInt(splittedUrl[splittedUrl.length - 2], 10)
  };
};

export default function listReducer(state = defaultState, action) {
  switch (action.type) {
    case "LOAD_POKEMONS_PENDING":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "LOAD_POKEMONS_FULFILLED": {
      const allPokemons = action.payload.results.map(addPokemonId);
      const filteredPokemons = allPokemons.filter(
        pokemonFilter(state.inputValue)
      );
      const displayedPokemons = filteredPokemons.slice(0, state.size);
      return {
        ...state,
        loaded: true,
        loading: false,
        allPokemons,
        filteredPokemons,
        displayedPokemons,
        hiddenPokemons: displayedPokemons.length < filteredPokemons.length
      };
    }
    case "LOAD_POKEMONS_REJECTED":
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    case "SET_INPUT": {
      const filteredPokemons = state.allPokemons.filter(
        pokemonFilter(action.payload)
      );
      const size = defaultState.size;
      const displayedPokemons = filteredPokemons.slice(0, size);
      return {
        ...state,
        inputValue: action.payload,
        size,
        filteredPokemons,
        displayedPokemons,
        inputValid: Boolean(normalize(action.payload)),
        hiddenPokemons: displayedPokemons.length < filteredPokemons.length
      };
    }
    case "SEE_MORE": {
      const size = state.size + 12;
      const displayedPokemons = state.filteredPokemons.slice(0, size);
      return {
        ...state,
        size,
        displayedPokemons,
        hiddenPokemons: displayedPokemons.length < state.filteredPokemons.length
      };
    }
    default:
      return state;
  }
}
