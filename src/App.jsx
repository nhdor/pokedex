import React from 'react';
import Router from './shared/Router';
import { useState, createContext } from 'react';
import MOCK_DATA from './data/mock';

export const MyContext = createContext(null);

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <MyContext.Provider
      value={{ selectedPokemon, setSelectedPokemon, MOCK_DATA }}
    >
      <Router />;
    </MyContext.Provider>
  );
};

export default App;
