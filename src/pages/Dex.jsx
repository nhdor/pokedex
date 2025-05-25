import DashBoard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../data/mock';
import React from 'react';

const Dex = ({ selectedPokemon, setSelectedPokemon }) => {
  // const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <>
      <div>
        <DashBoard
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemon={selectedPokemon}
        />
      </div>
      <div>
        <PokemonList
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          pokemonList={MOCK_DATA}
        />
      </div>
    </>
  );
};

export default Dex;
