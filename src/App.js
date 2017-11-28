import React, { Component } from "react";
import { Route } from "react-router-dom";

import { List, Details } from "scenes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={List} />
        <Route path="/pokemon/:name/:id" component={Details} />
      </div>
    );
  }
}

export default App;
