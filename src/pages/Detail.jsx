//query String -> MOCK에서 정보를 가져와서 상세 정보 표시
import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import MOCK_DATA from '../data/mock';

const StBox = styled.div`
  background-color:rgb(241, 241, 206);
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
  border: 1px solid #ddd;
  padding: 12px;
  width: 120px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  `
const StImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  `

const Detail = () => {
  const param = useParams();
  return (
    <StBox>
      {MOCK_DATA.filter(pokemon => pokemon.id === Number(param.id)).map((pokemon) => {
        console.log(pokemon);
        const { id, korean_name, img_url ,description, types} = pokemon;
        return (
          <StCard key={id}>
            <StImg src={img_url} alt='X'></StImg>
            <p>{korean_name}</p>
            <p>타입: {types.join(', ')}</p>
            <p>{description}</p>
            
            
          </StCard>
        )
      }
      )}
      <button onClick={() => {
        window.history.back();
      }}>뒤로가기</button>
    </StBox>
  )
}

export default Detail
