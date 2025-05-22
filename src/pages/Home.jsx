import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StBox = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <StBox>
        <button
          onClick={() => {
            navigate("/dex");
          }}
        >
          포켓몬 도감 시작하기
        </button>
      </StBox>
    </>
  );
};

export default Home;
