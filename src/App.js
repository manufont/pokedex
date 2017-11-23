import React, { Component } from "react";
import { Route } from "react-router-dom";

import { List, Details } from "./scenes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <Route exact path="/" component={List} />
        <Route path="/details/:id" component={Details} />
      </div>
    );
  }
}

export default App;
