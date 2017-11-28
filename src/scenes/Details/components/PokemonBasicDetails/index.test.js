import React from "react";
import ReactDOM from "react-dom";
import PokemonBasicDetails from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const pokemon = {
    name: "pikachu",
    weight: 60,
    types: [
      {
        type: {
          name: "electric"
        }
      }
    ],
    abilities: [
      {
        ability: {
          name: "static"
        }
      },
      {
        ability: {
          name: "lightning-rod"
        }
      }
    ]
  };
  ReactDOM.render(<PokemonBasicDetails pokemon={pokemon} />, div);
});
