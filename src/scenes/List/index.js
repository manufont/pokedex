import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import * as actions from "./actions";
import "./style.css";
import { PokemonItem } from "components";

class List extends Component {
  componentWillMount() {
    const { list, actions } = this.props;
    if (!list.loaded) {
      actions.loadPokemons();
    }
  }

  setInputRef = input => {
    this.searchInput = input;
  };

  componentDidMount() {
    this.searchInput.focus();
    this.searchInput.selectionStart = this.searchInput.value.length;
    this.searchInput.selectionEnd = this.searchInput.value.length;
  }

  onInputChange = event => {
    this.props.actions.setInput(event.target.value);
  };

  seeMore = () => {
    this.props.actions.seeMore();
  };

  render() {
    const {
      inputValue,
      inputValid,
      displayedPokemons,
      hiddenPokemons
    } = this.props.list;

    return (
      <div>
        <div className={classNames("header", { middle: !inputValid })}>
          <textarea
            rows={inputValid ? 1 : undefined}
            ref={this.setInputRef}
            type="text"
            className={`title search-input`}
            placeholder="Find a pokemon..."
            onChange={this.onInputChange}
            value={inputValue}
          />
        </div>
        <div className="list-container">
          {inputValid &&
          displayedPokemons.length === 0 && (
            <span>
              No matching pokemons were found for
              {` "${inputValue}"`}
            </span>
          )}
          {displayedPokemons.map((pokemon, index) => (
            <Link
              key={index}
              to={`/pokemon/${pokemon.name}/${pokemon.id}`}
              className="list-item no-style-link"
            >
              <PokemonItem pokemon={pokemon} />
            </Link>
          ))}
          {hiddenPokemons && (
            <div
              key={displayedPokemons.length}
              className="list-item see-more"
              onClick={this.seeMore}
            >
              <i className="material-icons add-icon">add</i>
            </div>
          )}
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
