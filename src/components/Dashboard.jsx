import React from 'react';
import styled from 'styled-components';

const StView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  width: 88%;
  margin: 20px;
  box-sizing: border-box;
  background-color: rgba(217, 244, 253, 0.57);
`;

const StCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 300px;
  border: 1px solid red;
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
`;

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  const totalSlots = 6;
  const cards = [...selectedPokemon];

  while (cards.length < totalSlots) {
    cards.push(null); // 빈칸은 null
    console.log(cards);
  }

  const handleDelete = id => {
    const newSelectedPokemon = selectedPokemon.filter(p => p.id !== id);
    setSelectedPokemon(newSelectedPokemon);
  };
  return (
    <StView>
      <StTitle>나만의 포켓몬</StTitle>
      <StCardContainer>
        {selectedPokemon.map(pokemon => {
          const { id, korean_name, img_url } = pokemon;
          return (
            <StCard key={id}>
              <img src={img_url} alt='X'></img>
              <p>{korean_name}</p>
              <p>{'No.' + String(id).padStart(3, '0')}</p>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                삭제
              </button>
            </StCard>
          );
        })}
      </StCardContainer>
    </StView>
  );
};

export default Dashboard;
const StTitle = styled.div`
  align-self: center;
  margin-bottom: 15px;
  font-size: 1.5em;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;
