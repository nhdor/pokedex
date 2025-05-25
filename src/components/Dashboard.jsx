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
  align-items: center;
  width: 100%;
`;

const StPokeBall = styled.img`
  height: 60px;
  margin: 30px;
  border: dotted 3px rgba(12, 160, 214, 0.28);
  border-radius: 10px;
  padding: 30px;
  background-color: white;
`;

const StCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 12px;
  width: 120px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  const totalSlots = 6;
  const cards = [...selectedPokemon];

  while (cards.length < totalSlots) {
    cards.push(null);
  }

  const handleDelete = id => {
    const newSelectedPokemon = selectedPokemon.filter(p => p.id !== id);
    setSelectedPokemon(newSelectedPokemon);
  };
  return (
    <StView>
      <StTitle>나만의 포켓몬</StTitle>
      <StCardContainer>
        {cards.map((pokemon, index) => {
          if (pokemon === null) {
            return (
              <StPokeBall
                key={'null' + index}
                src='/static/pokeball.png'
              ></StPokeBall>
            );
          }

          const { id, korean_name, img_url } = pokemon;
          return (
            <StCard key={id}>
              <img src={img_url} alt='X' />
              <p>{korean_name}</p>
              <p>{'No.' + String(id).padStart(3, '0')}</p>
              <button onClick={() => handleDelete(id)}>삭제</button>
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
  margin-top: 40px;
  font-size: 1.5em;
  font-weight: bold;
  width: 100%;
  text-align: center;
  color: #2c3e50; /* 진한 회색 */
`;
