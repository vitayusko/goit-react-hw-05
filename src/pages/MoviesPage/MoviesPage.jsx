import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovieSearch } from "../../services/api";
import s from "./MoviesPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query") || "Inception";

    const getData = async () => {
      try {
        const data = await fetchMovieSearch(query);
        console.log(data);
        if (data && data.results) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
      }
    };

    getData();
  }, [searchParams]);

  const handleChangeFilter = (newValue) => {
    setFilterValue(newValue);
    searchParams.set("query", newValue);
    setSearchParams(searchParams);
  };

  const filteredData = movies.filter((item) =>
    item.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className={s.wrapper}>
      <SearchBar
        handleChangeFilter={handleChangeFilter}
        filterValue={filterValue}
      />
      {error ? <div>Error: {error}</div> : <MovieList movies={filteredData} />}
    </div>
  );
};

export default MoviesPage;
