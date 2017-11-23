import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import * as actions from "./actions";
import "./style.css";

class List extends Component {
  componentWillMount() {
    const { list, actions } = this.props;
    if (!list.loaded) {
      actions.loadPokemons();
    }
  }

  onInputChange = event => {
    this.props.actions.setInput(event.target.value);
  };

  seeMore = () => {
    this.props.actions.seeMore();
  };

  render() {
    const { inputValue, displayedPokemons, hiddenPokemons } = this.props.list;

    return (
      <div>
        <div>
          <input type="text" onChange={this.onInputChange} value={inputValue} />
        </div>
        <div>
          {displayedPokemons.map((pokemon, index) =>
            <div>
              <Link key={index} to={`/details/${pokemon.id}`}>
                {pokemon.name}
              </Link>
            </div>
          )}
          {hiddenPokemons && <div onClick={this.seeMore}>...voir plus</div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
