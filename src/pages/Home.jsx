import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <StBox>
        <StImg src={'/static/pokemon.png'}></StImg>
        <StButton
          onClick={() => {
            navigate('/dex');
          }}
        >
          포켓몬 도감 시작하기
        </StButton>
      </StBox>
    </>
  );
};

export default Home;
const StBox = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  width: 150px;
  height: 50px;
  font-size: 15px;
  border-radius: 10px;
`;

const StImg = styled.img`
  width: 300px;
  height: 100px;
  margin: 30px;
`;
