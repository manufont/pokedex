import React from "react";
import ReactDOM from "react-dom";
import PokemonItem from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const pokemon = {
    name: "pikachu",
    id: 25
  };

  ReactDOM.render(<PokemonItem pokemon={pokemon} />, div);
});
