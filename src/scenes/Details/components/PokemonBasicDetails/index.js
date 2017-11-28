import React from "react";
import PropTypes from "prop-types";
import { LabelledDiv } from "components";
import { capitalize, formatName } from "utils";

const PokemonBasicDetails = ({ pokemon }) => (
  <div className="content-text content-unveiled">
    <LabelledDiv label="Name">{formatName(pokemon.name)}</LabelledDiv>
    <LabelledDiv label="Weight">{pokemon.weight}</LabelledDiv>
    <LabelledDiv label={`Type${pokemon.types.length > 1 ? "s" : ""}`}>
      {pokemon.types.map(type => capitalize(type.type.name)).join(", ")}
    </LabelledDiv>
    <LabelledDiv label={`Abilit${pokemon.abilities.length > 1 ? "ies" : "y"}`}>
      {pokemon.abilities
        .map(ability => capitalize(ability.ability.name))
        .join(", ")}
    </LabelledDiv>
  </div>
);

PokemonBasicDetails.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    types: PropTypes.array.isRequired,
    abilities: PropTypes.array.isRequired
  }).isRequired
};

export default PokemonBasicDetails;
