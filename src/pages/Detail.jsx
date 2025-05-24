import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import MOCK_DATA from '../data/mock';
import { MyContext } from '../App';
import { useContext } from 'react';

const Detail = () => {
  const param = useParams();

  const { selectedPokemon, setSelectedPokemon, MOCK_DATA } =
    useContext(MyContext);

  const addPokemonHandler = pokemonId => {
    // console.log(pokemonId);
    if (selectedPokemon.length > 5) {
      alert('포켓몬은 6마리까지만 선택할 수 있습니다.');
      return;
    }

    if (selectedPokemon.some(p => p.id === pokemonId)) {
      alert('이미 선택한 포켓몬입니다.');
      return;
    }

    //pokemonCard는 pokemonCardList에게 MOCK_DATA를 map으로 받아서 생성되는 component
    //  {MOCK_DATA.map(pokemon => (
    //   <PokemonCard key={pokemon.id} pokemon={pokemon} />
    // ))}

    const findPokemon = MOCK_DATA.find(
      pokemonObj => pokemonObj.id == pokemonId
    );

    console.log(findPokemon);

    setSelectedPokemon([...selectedPokemon, findPokemon]);
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
          추가하기
        </StButton>
      </StButtonContainer>
    </StBox>
  );
};

export default Detail;

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
  font-size: 30px;
  font-weight: bold;
`;

const StType = styled.p`
  font-size: 20px;
`;
const StDescription = styled.p`
  width: 500px;
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
  justify-content: center;
  align-items: center;
`;
