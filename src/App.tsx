import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router";
import { lazy } from "react";
import useInterceptors from "./hooks/useInterceptors";

const App = () => {
  const LoadingPage = lazy(() => import("./pages/RoutePage/Loading"));

  // 전역적으로 한번 호출
  useInterceptors();
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
