import React from "react";
import ReactDOM from "react-dom";
import PokemonStats from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const pokemon = {
    types: [
      {
        type: {
          name: "electric"
        }
      }
    ],
    stats: [
      {
        stat: { name: "hp" },
        base_stat: 35
      },
      {
        stat: { name: "attack" },
        base_stat: 55
      },
      {
        stat: { name: "defense" },
        base_stat: 40
      },
      {
        stat: {
          name: "special-attack"
        },
        base_stat: 50
      },
      {
        stat: {
          name: "special-defense"
        },
        base_stat: 50
      },
      {
        stat: { name: "speed" },
        base_stat: 90
      }
    ]
  };

  const comparedType = "all";

  ReactDOM.render(
    <PokemonStats
      pokemon={pokemon}
      comparedType={comparedType}
      handleChange={() => () => {}}
    />,
    div
  );
});
