import { React, useEffect } from 'react';

import PokemonCard from './PokemonCard';

const PokemonList = ({ selectedPokemon, setSelectedPokemon, pokemonList }) => {
  return (
    <>
      {pokemonList.map(pokemon => (
        <PokemonCard
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </>
  );
};

export default PokemonList;
