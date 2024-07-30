import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage/HomePage";
// import Navigation from "./Navigation/Navigation";
// import MoviesPage from "../pages/MoviesPage/MoviesPage";
// import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./MovieCast/MovieCast ";
// import MovieReviews from "./MovieReviews/MovieReviews";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Navigation = lazy(() => import("./Navigation/Navigation"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./MovieCast/MovieCast "));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

// /movies/:movieId/cast – компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
// /movies/:movieId/reviews – компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
