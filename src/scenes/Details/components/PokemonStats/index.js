import React from "react";
import PropTypes from "prop-types";
import { LabelledDiv, Stat } from "components";
import { capitalize } from "utils";
import { meanStats } from "data";

const PokemonStats = ({ pokemon, handleChange, comparedType }) => {
  const comparableTypes = ["all", ...pokemon.types.map(t => t.type.name)];

  return (
    <LabelledDiv label="Stats">
      <div className="stats-compare details-line">
        Compare with{" "}
        <select
          className="stats-compare-select"
          value={comparedType}
          onChange={handleChange("comparedType")}
        >
          {comparableTypes.map((type, index) => (
            <option value={type} key={index} className="stats-compare-option">
              {capitalize(type)}
            </option>
          ))}
        </select>{" "}
        pokemons
      </div>
      {pokemon.stats.map((stat, index) => (
        <Stat
          key={index}
          label={capitalize(stat.stat.name)}
          value={stat.base_stat}
          meanValue={meanStats[comparedType][stat.stat.name]}
        />
      ))}
    </LabelledDiv>
  );
};

PokemonStats.propTypes = {
  pokemon: PropTypes.shape({
    types: PropTypes.array.isRequired,
    stats: PropTypes.array.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  comparedType: PropTypes.string.isRequired
};

export default PokemonStats;
