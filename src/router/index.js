import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Converter from "../pages/Converter";
import CurrentExchange from "../pages/CurrentExchange";

const routeItems = [
  { id: 0, path: "converter", element: <Converter /> },
  { id: 1, path: "exchange", element: <CurrentExchange /> },
  { id: 2, path: "/", element: <Navigate to={"/converter"} /> },
];

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        {routeItems.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
};

export default AppRouter;
