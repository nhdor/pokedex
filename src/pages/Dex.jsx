import DashBoard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import styled from 'styled-components';

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Dex = () => {
  return (
    <StDiv>
      <DashBoard />
      <PokemonList />
    </StDiv>
  );
};

export default Dex;
