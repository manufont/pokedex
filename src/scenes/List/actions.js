export const setInput = inputValue => ({
  type: "SET_INPUT",
  payload: inputValue
});

export const loadPokemons = () => ({
  type: "LOAD_POKEMONS",
  payload: fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=99999"
  ).then(response => response.json())
});

export const seeMore = () => ({
  type: "SEE_MORE"
});
