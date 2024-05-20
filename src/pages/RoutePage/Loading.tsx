import { SyncLoader } from "react-spinners";
import { RoutePage } from "./styles";

const Loading = () => {
  return (
    <>
      <RoutePage>
        <h3>잠시만 기다려주세요</h3>
        <SyncLoader color="#ff9078" />
      </RoutePage>
    </>
  );
};
export default Loading;
