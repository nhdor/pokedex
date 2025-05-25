// src/redux/slices/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";

import selectPokemonReducer from "../slices/selectPokemonSlice"


const store = configureStore({
  reducer: {
    selectPokemon: selectPokemonReducer,  
  }
});
export default store;