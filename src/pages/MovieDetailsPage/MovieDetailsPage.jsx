import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location?.state || "/movies");
  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.wrapper}>
      <Link to={goBackRef.current} className={s.btn}>
        Go Back
      </Link>
      {/* <button  onClick={() => navigate(-1)}>
        Go Back
      </button> */}
      <div className={s.wrapperInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={s.img}
        />
        <div className={s.textInfo}>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <hr />

      <h3>Addition Information</h3>
      <ul>
        <li>
          <NavLink
            to={`/movies/${movieId}/cast`}
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
