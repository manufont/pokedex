import React from "react";
import ReactDOM from "react-dom";
import PokemonTweets from "./";

global.WebSocket = class {};

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<PokemonTweets pokemonName="pikachu" hide={false} />, div);
});
