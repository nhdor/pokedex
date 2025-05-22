import DashBoard from '../components/Dashboard';
import PokemonCard from '../components/PokemonCard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../data/mock';
import React, { useState } from 'react';




const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  

  return (
    <>
      <div>
        <DashBoard selectedPokemon={selectedPokemon} />
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
