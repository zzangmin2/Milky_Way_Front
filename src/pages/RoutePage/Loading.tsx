import { SyncLoader } from "react-spinners";
import { RoutePage, Container, MainContainer } from "./styles";

const Loading = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <RoutePage>
            <h3>잠시만 기다려주세요</h3>
            <SyncLoader color="#36d7b7" />
          </RoutePage>
        </MainContainer>
      </Container>
    </>
  );
};
export default Loading;
