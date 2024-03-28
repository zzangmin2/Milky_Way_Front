import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Navigation from "./layouts/Navigation";

const LoginPage = lazy(() => import("./pages/LogIn"));
const HomePage = lazy(() => import("./pages/Home"));
const SearchPage = lazy(() => import("./pages/Search"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      {
        path: "/home",
        element: <Navigation />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "search",
            element: <SearchPage />,
          },
        ],
      },
    ],
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
