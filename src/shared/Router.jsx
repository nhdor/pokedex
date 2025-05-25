import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../pages/PokemonDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dex' element={<Dex />} />
        <Route path='/pokemon' element={<PokemonList />} />
        <Route path='/PokemonDetail/:id' element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
