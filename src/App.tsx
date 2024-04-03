import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./utils/router";
import Loading from "./pages/RoutePage/Loading";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
