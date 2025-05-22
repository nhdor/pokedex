import { React } from 'react';
import styled from 'styled-components';

import PokemonCard from './PokemonCard';

const StBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PokemonList = ({ selectedPokemon, setSelectedPokemon, pokemonList }) => {
  return (
    <StBox>
      {pokemonList.map(pokemon => (
        <PokemonCard // Add border to PokemonCard
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </StBox>
  );
};

export default PokemonList;
