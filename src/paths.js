export const pokemonList = () =>
  process.env.REACT_APP_POKEAPI_URL + "pokemon/?limit=99999";

export const typeList = () =>
  process.env.REACT_APP_POKEAPI_URL + "type/?limit=99999";

export const pokemonDetails = name =>
  process.env.REACT_APP_POKEAPI_URL + `pokemon/${name}/`;
