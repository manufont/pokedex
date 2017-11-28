import React from "react";
import PropTypes from "prop-types";
import { LabelledDiv, Sprite } from "components";

const PokemonSprites = ({ pokemon }) => {
  const sprites = Object.keys(pokemon.sprites).filter(
    key => pokemon.sprites[key]
  );

  return (
    sprites.length > 0 && (
      <div className="content-unveiled">
        <LabelledDiv label="Sprites">
          <div className="sprite-container">
            {sprites.map((key, index) => (
              <Sprite
                key={index}
                className="sprite"
                url={pokemon.sprites[key]}
                alt={key}
              />
            ))}
          </div>
        </LabelledDiv>
      </div>
    )
  );
};

PokemonSprites.propTypes = {
  pokemon: PropTypes.shape({
    sprites: PropTypes.object.isRequired
  }).isRequired
};

export default PokemonSprites;
