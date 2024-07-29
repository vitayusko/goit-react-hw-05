import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Navigation from "./Navigation/Navigation";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
