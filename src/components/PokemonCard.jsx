import React from 'react';
import styled from 'styled-components';

const PokemonCardSector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  border: 1px solid #ddd;
  padding: 12px;
  width: 120px;
`;

const PokemonCard = ({ selectedPokemon, setSelectedPokemon, pokemon }) => {
  const { img_url, korean_name, id } = pokemon;

  const clickHandler = () => {
    setSelectedPokemon([...selectedPokemon, pokemon]);
    console.log(selectedPokemon);
  };

  return (
    // 상세(디테일) 페이지로!
    <PokemonCardSector>
      <img src={img_url} alt='X'></img>
      <p>{'No.' + String(id).padStart(3, '0')}</p>
      <div>{korean_name}</div>
      

      {/* 추가 버튼 누르면 대시보드로! */}
      <button onClick={clickHandler}>추가</button>
    </PokemonCardSector>
  );
};

export default PokemonCard;
