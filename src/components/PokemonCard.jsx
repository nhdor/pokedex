import React from 'react';

const PokemonCard = ({ selectedPokemon, setSelectedPokemon, pokemon }) => {
  const { img_url, korean_name, id } = pokemon;

  const clickHandler = () => {
    setSelectedPokemon([...selectedPokemon, pokemon]);
    console.log(selectedPokemon);
  };

  return (
    // 상세(디테일) 페이지로!
    <div>
      <p>{'No.' + String(id).padStart(3, '0')}</p>
      <div>{korean_name}</div>
      <img src={img_url} alt='X'></img>

      {/* 추가 버튼 누르면 대시보드로! */}
      <button onClick={clickHandler}>추가</button>
    </div>
  );
};

export default PokemonCard;
