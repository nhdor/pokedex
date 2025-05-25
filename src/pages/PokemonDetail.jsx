//query String -> MOCK에서 정보를 가져와서 상세 정보 표시
import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import MOCK_DATA from '../data/mock';

const PokemonDetail = () => {
  const param = useParams();
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
      <StButton
        onClick={() => {
          window.history.back();
        }}
      >
        뒤로가기
      </StButton>
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
`;
