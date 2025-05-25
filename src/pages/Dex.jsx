import DashBoard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../data/mock';
import React from 'react';

const Dex = () => {
  return (
    <>
      <div>
        <DashBoard />
      </div>
      <div>
        <PokemonList pokemonList={MOCK_DATA} />
      </div>
    </>
  );
};

export default Dex;
