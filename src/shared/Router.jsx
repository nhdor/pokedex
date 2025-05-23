import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';
import PokemonList from '../components/PokemonList';
import Detail from '../pages/Detail';

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어줍니다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/dex' element={<Dex />} />
        <Route path='/pokemon' element={<PokemonList />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
