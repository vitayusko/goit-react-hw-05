import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id.toString()}`} state={location}>
              {movie.title}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
