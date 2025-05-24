import DashBoard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../data/mock';
import React, { useState, createContext } from 'react';

const Dex = () => {
  return (
    <div>
      <DashBoard />

      <PokemonList />
    </div>
  );
};

export default Dex;
