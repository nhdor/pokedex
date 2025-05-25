//query String -> MOCK에서 정보를 가져와서 상세 정보 표시
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import MOCK_DATA from '../data/mock';

const PokemonDetail = ({ selectedPokemon, setSelectedPokemon }) => {
  const param = useParams();
  //param.id = 문자열 주의!

  const addPokemonHandler = pokemonId => {
    if (selectedPokemon.some(p => p.id === pokemonId)) {
      const newSelectedPokemon = selectedPokemon.filter(
        p => p.id !== Number(param.id)
      );

      setSelectedPokemon(newSelectedPokemon);

      return;
    }

    if (selectedPokemon.length > 5) {
      alert('포켓몬은 6마리까지만 선택할 수 있습니다.');
      return;
    }

    if (selectedPokemon.some(p => p.id === Number(pokemonId))) {
      alert('이미 선택한 포켓몬입니다.');
      return;
    }

    const findPokemon = MOCK_DATA.find(
      pokemonObj => pokemonObj.id == Number(pokemonId)
    );

    setSelectedPokemon([...selectedPokemon, findPokemon]);
    console.log(selectedPokemon);
  };

  return (
    <StBox>
      {MOCK_DATA.filter(pokemon => pokemon.id === Number(param.id)).map(
        pokemon => {
          const { id, korean_name, img_url, description, types } = pokemon;
          return (
            <StCard key={id}>
              <StImg src={img_url} alt='X'></StImg>
              <StName>{korean_name}</StName>
              <StType>타입: {types.join(', ')}</StType>
              <StDescription> {description}</StDescription>
            </StCard>
          );
        }
      )}
      <StButtonContainer>
        <StButton
          onClick={() => {
            window.history.back();
          }}
        >
          뒤로가기
        </StButton>
        <StButton
          onClick={() => {
            addPokemonHandler(Number(param.id));
          }}
        >
          {selectedPokemon.some(p => {
            return p.id === Number(param.id);
          })
            ? '삭제하기'
            : '추가하기'}
        </StButton>
      </StButtonContainer>
    </StBox>
  );
};

export default PokemonDetail;

const StBox = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 120px;
  margin: 10px;
  border-radius: 10px;
`;
const StImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const StName = styled.p`
  color: red;
  font-size: 25px;
  font-weight: bold;
`;

const StType = styled.p`
  font-size: 20px;
`;
const StDescription = styled.p`
  width: 600px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  margin: 10px;
`;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: none;
`;
