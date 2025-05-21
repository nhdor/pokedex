import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// styled키워드를 사용해서 styled-components 방식대로 컴포넌트를 만듭니다.
const StBox = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
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
