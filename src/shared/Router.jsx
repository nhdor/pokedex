import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../pages/PokemonDetail';

const Router = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/dex'
          element={
            <Dex
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          }
        />
        {/* <Route path='/pokemon' element={<PokemonList />} /> */}
        <Route
          path='/PokemonDetail/:id'
          element={
            <PokemonDetail
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
