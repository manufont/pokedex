import React from "react";
import ReactDOM from "react-dom";
import Stat from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Stat label="speed" value={60} meanValue={68.56} />, div);
});
