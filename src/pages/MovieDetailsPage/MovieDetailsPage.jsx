import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log("Error fetching movie details:", error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.wrapper}>
      <button className={s.btn} onClick={() => navigate(-1)}>
        Go Back
      </button>
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
        </div>{" "}
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
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
