import React from "react";
import PropTypes from "prop-types";

import "./style.css";
import { formatName } from "utils";

const PokemonItem = ({ pokemon }) => {
  const id = pokemon.id || 0;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className="pokemon-item">
      <div className="background-cover" style={backgroundStyle} />
      <div className="pokemon-item-content">
        <div className="picture">
          <img width={96} height={96} src={imageUrl} alt={" "} />
        </div>
        <div>{formatName(pokemon.name)}</div>
      </div>
    </div>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};

export default PokemonItem;
