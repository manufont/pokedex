import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "react-spinkit";

import "./style.css";
import { formatName } from "utils";
import { PokemonItem } from "components";
import {
  PokemonBasicDetails,
  PokemonSprites,
  PokemonStats,
  PokemonTweets
} from "./components";
import { pokemonDetails } from "paths";

const loadPokemonDetails = name =>
  fetch(pokemonDetails(name)).then(response => response.json());

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: null,
      comparedType: "all"
    };
  }

  componentWillMount() {
    const { match } = this.props;
    loadPokemonDetails(match.params.name)
      .then(details => {
        if (this._isMounted) {
          this.setState({ details });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    delete this._isMounted;
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { match } = this.props;
    const { details, comparedType } = this.state;

    const pokemonItem = {
      name: match.params.name,
      id: parseInt(match.params.id, 10)
    };

    return (
      <div>
        <div className="header">
          <div className="details-title">
            <Link to="/" className="no-style-link">
              <i className="material-icons arrow-back">arrow_back</i>
            </Link>
            <span className={"name title"}>
              {formatName(match.params.name)}
            </span>
          </div>
        </div>
        <div className="content">
          <div>
            <PokemonItem pokemon={pokemonItem} />
          </div>
          {details ? (
            <PokemonBasicDetails pokemon={details} />
          ) : (
            <div className="content-spinner-wrapper">
              <Spinner name="three-bounce" color="white" fadeIn="none" />
            </div>
          )}
        </div>
        {details && (
          <div className="content-unveiled">
            <PokemonStats
              pokemon={details}
              comparedType={comparedType}
              handleChange={this.handleChange}
            />
            <PokemonSprites pokemon={details} />
          </div>
        )}
        <PokemonTweets pokemonName={match.params.name} hide={!details} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
