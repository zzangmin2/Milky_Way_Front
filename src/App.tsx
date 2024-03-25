import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";

const LoginPage = lazy(() => import("./pages/LogIn"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
