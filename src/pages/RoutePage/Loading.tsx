import { SyncLoader } from "react-spinners";
import { RoutePage } from "./styles";

const Loading = () => {
  return (
    <>
      <RoutePage>
        <h3>잠시만 기다려주세요</h3>
        <SyncLoader color="#36d7b7" />
      </RoutePage>
    </>
  );
};
export default Loading;
