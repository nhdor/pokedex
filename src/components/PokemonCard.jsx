import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  registerPokemon,
  removePokemon
} from '../redux/slices/selectPokemonSlice';

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(state => state.selectPokemon);

  const { img_url, korean_name, id } = pokemon;

  const navigate = useNavigate();

  const addHandler = pokemonId => {
    if (selectedPokemon.length >= 6) {
      toast('포켓몬은 6마리까지만 선택할 수 있습니다.');

      return;
    }

    if (selectedPokemon.some(p => p.id === pokemonId)) {
      toast('이미 선택한 포켓몬입니다.');

      return;
    }

    dispatch(registerPokemon(pokemon));
  };

  return (
    // 상세(디테일) 페이지로!
    <PokemonCardSector>
      <Temp
        onClick={() => {
          navigate(`/PokemonDetail/${id}`);
        }}
      >
        <img src={img_url} alt='X'></img>
        <p>{korean_name}</p>
        <p>{'No.' + String(id).padStart(3, '0')}</p>
      </Temp>
      <StButton onClick={() => addHandler(id)}>추가</StButton>
    </PokemonCardSector>
  );
};

export default PokemonCard;

const PokemonCardSector = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background-color: white;
`;

const Temp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StButton = styled.button`
  background-color: rgb(26, 161, 30);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
`;
