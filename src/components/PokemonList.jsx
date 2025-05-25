import { React } from 'react';
import styled from 'styled-components';

import PokemonCard from './PokemonCard';

const StBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: solid 4px yellow;
  width: 88%;
  margin: 20px;
  background-color: rgba(217, 244, 253, 0.57);
`;

const PokemonList = ({ selectedPokemon, setSelectedPokemon, pokemonList }) => {
  return (
    <StBox>
      {pokemonList.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          pokemon={pokemon}
        />
      ))}
    </StBox>
  );
};

export default PokemonList;
