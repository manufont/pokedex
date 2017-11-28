import React from "react";
import ReactDOM from "react-dom";
import PokemonSprites from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const pokemon = {
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
    }
  };
  ReactDOM.render(<PokemonSprites pokemon={pokemon} />, div);
});
