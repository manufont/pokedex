import { typeList, pokemonList, pokemonDetails } from "paths";
import { groupBy, flatten, mean, mapOverObject } from "utils";

const getTypeList = () =>
  fetch(typeList())
    .then(response => response.json())
    .then(result => result.results.map(type => type.name));

const getPokemonList = () =>
  fetch(pokemonList())
    .then(response => response.json())
    .then(result => result.results.map(pokemon => pokemon.name));

const getPokemonDetails = name =>
  fetch(pokemonDetails(name)).then(response => response.json());

const averageStats = stats => {
  const statByName = groupBy(flatten(stats), stat => stat.stat.name);
  return mapOverObject(
    stats => mean(stats.map(stat => stat.base_stat)),
    statByName
  );
};

export const buildAverageStats = () =>
  Promise.all([getTypeList(), getPokemonList()]).then(results => {
    const [types, pokemons] = results;
    const res = {};
    types.forEach(type => (res[type] = []));
    return Promise.all(
      pokemons.map(getPokemonDetails)
    ).then(detailedPokemons => {
      detailedPokemons.forEach(pokemon => {
        pokemon.types.forEach(type => res[type.type.name].push(pokemon.stats));
      });
      res.all = detailedPokemons.map(pokemon => pokemon.stats);
      return mapOverObject(averageStats, res);
    });
  });

export default {
  all: {
    hp: 68.95468914646997,
    attack: 79.47207586933614,
    defense: 74.0663856691254,
    "special-attack": 72.80927291886196,
    "special-defense": 72.21707060063224,
    speed: 69.0231822971549
  },
  normal: {
    hp: 76.38983050847457,
    attack: 74.82203389830508,
    defense: 60.25423728813559,
    "special-attack": 57.940677966101696,
    "special-defense": 64.38983050847457,
    speed: 71.05932203389831
  },
  fighting: {
    hp: 75.921875,
    attack: 105.890625,
    defense: 76.171875,
    "special-attack": 67.75,
    "special-defense": 72.390625,
    speed: 77.21875
  },
  flying: {
    hp: 70.328,
    attack: 80.312,
    defense: 69.432,
    "special-attack": 77.296,
    "special-defense": 71.784,
    speed: 85.936
  },
  poison: {
    hp: 63.7,
    attack: 70.35714285714286,
    defense: 64.4,
    "special-attack": 69,
    "special-defense": 68.92857142857143,
    speed: 65.92857142857143
  },
  ground: {
    hp: 76.27631578947368,
    attack: 92.61842105263158,
    defense: 87.35526315789474,
    "special-attack": 61.69736842105263,
    "special-defense": 65.71052631578948,
    speed: 60.30263157894737
  },
  rock: {
    hp: 66.0506329113924,
    attack: 89.0506329113924,
    defense: 100.16455696202532,
    "special-attack": 63.67088607594937,
    "special-defense": 74.20253164556962,
    speed: 59.25316455696203
  },
  bug: {
    hp: 57.464285714285715,
    attack: 72.70238095238095,
    defense: 72.38095238095238,
    "special-attack": 56.98809523809524,
    "special-defense": 65.23809523809524,
    speed: 62.57142857142857
  },
  ghost: {
    hp: 64.82758620689656,
    attack: 80.25862068965517,
    defense: 82.48275862068965,
    "special-attack": 77.5,
    "special-defense": 79.60344827586206,
    speed: 64.08620689655173
  },
  steel: {
    hp: 65.61016949152543,
    attack: 94.52542372881356,
    defense: 112.67796610169492,
    "special-attack": 71.72881355932203,
    "special-defense": 81.59322033898304,
    speed: 60.94915254237288
  },
  fire: {
    hp: 69.64864864864865,
    attack: 82.67567567567568,
    defense: 70.41891891891892,
    "special-attack": 91.67567567567568,
    "special-defense": 73,
    speed: 75.70270270270271
  },
  water: {
    hp: 69.73611111111111,
    attack: 74.11111111111111,
    defense: 75.34722222222223,
    "special-attack": 74.63194444444444,
    "special-defense": 72.20138888888889,
    speed: 64.45138888888889
  },
  grass: {
    hp: 65.80909090909091,
    attack: 75.43636363636364,
    defense: 73.9,
    "special-attack": 72.62727272727273,
    "special-defense": 71.7090909090909,
    speed: 59.42727272727273
  },
  electric: {
    hp: 59.16438356164384,
    attack: 70,
    defense: 65.28767123287672,
    "special-attack": 82.52054794520548,
    "special-defense": 68.8082191780822,
    speed: 81.79452054794521
  },
  psychic: {
    hp: 72.89,
    attack: 73.58,
    defense: 75.44,
    "special-attack": 94.32,
    "special-defense": 87.36,
    speed: 77.35
  },
  ice: {
    hp: 77.29545454545455,
    attack: 82.3409090909091,
    defense: 77.38636363636364,
    "special-attack": 78.54545454545455,
    "special-defense": 77.72727272727273,
    speed: 67.27272727272727
  },
  dragon: {
    hp: 85.72131147540983,
    attack: 102.98360655737704,
    defense: 88.63934426229508,
    "special-attack": 96.11475409836065,
    "special-defense": 86.04918032786885,
    speed: 79.37704918032787
  },
  dark: {
    hp: 72.80645161290323,
    attack: 94.6774193548387,
    defense: 69.19354838709677,
    "special-attack": 76.09677419354838,
    "special-defense": 69.14516129032258,
    speed: 76.30645161290323
  },
  fairy: {
    hp: 66.84482758620689,
    attack: 66.48275862068965,
    defense: 74.08620689655173,
    "special-attack": 80.06896551724138,
    "special-defense": 88.43103448275862,
    speed: 64.60344827586206
  }
};

//Average stats based on https://pokemondb.net/pokebase/276112/what-is-the-average-base-stat-total-of-every-pokemon
/*export default {
  hp: 68.86,
  attack: 76.86,
  defense: 72.32,
  "special-attack": 70,
  "special-defense": 70.4,
  speed: 66.6
};*/
