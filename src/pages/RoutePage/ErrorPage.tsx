import styled from "styled-components";
import { RoutePage } from "./styles";
import { useLocation } from "react-router-dom";
import { Container, MainContainer } from "./styles";

const ErrorPage = () => {
  const location = useLocation();

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
