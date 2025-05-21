import React from 'react';

const Dashboard = ({ selectedPokemon }) => {
  return (
    <div>
      {selectedPokemon.map(pokemon => {
        const { id, korean_name, img_url } = pokemon;
        return (
          <>
            <p>{'No.' + String(id).padStart(3, '0')}</p>
            <div>{korean_name}</div>
            <img src={img_url} alt='X'></img>
          </>
        );
      })}
    </div>
  );
};

export default Dashboard;
