import React from "react";
import ReactDOM from "react-dom";
import Details from "./";
import { MemoryRouter } from "react-router-dom";

global.WebSocket = class {};

it("renders without crashing", () => {
  const div = document.createElement("div");
  const routerMatch = {
    params: {
      name: "pikachu",
      id: "25"
    }
  };
  ReactDOM.render(
    <MemoryRouter initialEntries={["/pokemon/pikachu/25"]}>
      <Details match={routerMatch} />
    </MemoryRouter>,
    div
  );
});
