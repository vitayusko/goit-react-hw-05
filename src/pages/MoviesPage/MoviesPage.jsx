import React, { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovieSearch } from "../../services/api";
import s from "./MoviesPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );

  useEffect(() => {
    if (searchQuery) {
      const getData = async () => {
        try {
          const data = await fetchMovieSearch(searchQuery);
          if (data && data.results) {
            setMovies(data.results);
          } else {
            setMovies([]);
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
          setError(error.message);
        }
      };
      getData();
    }
  }, [searchQuery]);

  const handleSearchSubmit = (newQuery) => {
    setSearchParams({ query: newQuery });
    setSearchQuery(newQuery); // Устанавливаем новый запрос
  };

  const handleChangeFilter = (newValue) => {
    setSearchQuery(newValue); // Обновляем локальное состояние поиска
  };

  return (
    <div className={s.wrapper}>
      <SearchBar
        filterValue={searchQuery}
        handleChangeFilter={handleChangeFilter}
        handleSearchSubmit={handleSearchSubmit}
      />
      {error ? <div>Error: {error}</div> : <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
