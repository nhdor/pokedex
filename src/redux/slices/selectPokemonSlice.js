import { createSlice } from "@reduxjs/toolkit";



const selectPokemonSlice = createSlice({
  name: "selectPokemon",
  initialState : [],
  reducers: {
    registerPokemon: (state, action) => {
      state.push(action.payload);
      console.log(state);
    },

    removePokemon: (state, action) => {
      return state.filter((pokemon) => pokemon.id != action.payload)
    },
  },
});


export const { registerPokemon, removePokemon } = selectPokemonSlice.actions;
export default selectPokemonSlice.reducer;