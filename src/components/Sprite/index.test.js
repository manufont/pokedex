import React from "react";
import ReactDOM from "react-dom";
import Sprite from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Sprite
      url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png"
      alt="pikachu"
    />,
    div
  );
});
