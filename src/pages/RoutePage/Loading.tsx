import { SyncLoader } from "react-spinners";
import { LoadingPage } from "./styles";

const Loading = () => {
  return (
    <>
      <LoadingPage>
        <h3>잠시만 기다려주세요</h3>
        <SyncLoader color="#36d7b7" />
      </LoadingPage>
    </>
  );
};
export default Loading;
