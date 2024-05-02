import styled from "styled-components";
import { RoutePage } from "./styles";
import { useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
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
  return (
    <>
      <Container>
        <MainContainer>
          <RoutePage>
            <div></div>
            <h3>oops!! 잘못된 접근</h3>
            <p>
              {location.pathname}
              <br />
              경로를 찾을 수 없습니다.
            </p>
          </RoutePage>
        </MainContainer>
      </Container>
    </>
  );
};

export default ErrorPage;
