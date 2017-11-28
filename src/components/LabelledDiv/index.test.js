import React from "react";
import ReactDOM from "react-dom";
import LabelledDiv from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <LabelledDiv label="Test">
      <div>Content</div>
    </LabelledDiv>,
    div
  );
});
