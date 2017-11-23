export const loadPokemonDetails = id => ({
  type: "LOAD_POKEMON_DETAILS",
  payload: fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response =>
    response.json()
  )
});
