import { React } from 'react';
import styled from 'styled-components';
import { MyContext } from '../App';
import { useContext } from 'react';
import PokemonCard from './PokemonCard';

const StBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 88%;
  background-color: rgba(217, 244, 253, 0.57);
`;

const PokemonList = () => {
  const { MOCK_DATA } = useContext(MyContext);
  return (
    <StBox>
      {MOCK_DATA.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </StBox>
  );
};

export default PokemonList;
