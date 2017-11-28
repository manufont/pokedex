import { pokemonList } from "paths";

export const setInput = inputValue => ({
  type: "SET_INPUT",
  payload: inputValue
});

export const loadPokemons = () => ({
  type: "LOAD_POKEMONS",
  payload: fetch(pokemonList()).then(response => response.json())
});

export const seeMore = () => ({
  type: "SEE_MORE"
});
