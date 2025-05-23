import DashBoard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../data/mock';
import React, { useState, createContext } from 'react';

export const MyContext = createContext(null);

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <MyContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      <div>
        <DashBoard />
      </div>
      <div>
        <PokemonList pokemonList={MOCK_DATA} />
      </div>
    </MyContext.Provider>
  );
};

export default Dex;
