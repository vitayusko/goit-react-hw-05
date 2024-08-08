import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendingMovies();
        if (data && data.results) {
          setMovies(data.results);
        } else {
          throw new Error("No results found");
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div className={s.wrapper}>Loading...</div>;
  }

  if (error) {
    return <div className={s.wrapper}>Error: {error}</div>;
  }

  return (
    <div className={s.wrapper}>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
