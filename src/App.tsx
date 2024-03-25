import React from "react";
import styled from "styled-components";
import LogIn from "./pages/LogIn";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #eee;
`;

const MainContainer = styled.div`
  width: 375px;
  height: 100vh;
  background-color: #fff;
  overflow-x: hidden;

  @media (max-width: 575px) {
    width: 100vw;
  }
`;

const App = () => {
  return (
    <Container>
      <MainContainer>
        <LogIn />
      </MainContainer>
    </Container>
  );
};

export default App;
