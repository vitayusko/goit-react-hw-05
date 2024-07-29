import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovies("Inception");
        if (data && data.results) {
          setMovies(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
