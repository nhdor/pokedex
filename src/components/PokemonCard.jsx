import React from 'react';
import styled from 'styled-components';

const PokemonCardSector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px;
  width: 120px;
`;

const PokemonCard = ({ selectedPokemon, setSelectedPokemon, pokemon }) => {
  const { img_url, korean_name, id } = pokemon;

  const clickHandler = (pokemonId) => {
    if(selectedPokemon.length>5){
      alert('포켓몬은 6마리까지만 선택할 수 있습니다.');
      return;
    }

    if(selectedPokemon.some(p => p.id === pokemonId)){
      alert('이미 선택한 포켓몬입니다.');
      return;
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
    console.log(selectedPokemon);
  };

  return (
    // 상세(디테일) 페이지로!
    <PokemonCardSector>
      <img src={img_url} alt='X'></img>
      <p>{korean_name}</p>
      <p>{'No.' + String(id).padStart(3, '0')}</p>
      <button onClick={()=>{
        clickHandler(id)
      }}>추가</button>
    </PokemonCardSector>
  );
};

export default PokemonCard;
