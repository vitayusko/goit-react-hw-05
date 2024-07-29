import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies = [] }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id.toString()}`}>{movie.title}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
