import axios from "axios";

const API_KEY = "bd3d086e77f5add27184f7b47bd9e9c8"; // Your API key

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week",
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
};

export const fetchMovies = async (query) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        api_key: API_KEY,
        query: query,
      },
    }
  );
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    }
  );
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  const response = await axios.get(url, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: 1,
    },
  });

  return response.data;
};

export const fetchMovieSearch = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie`;
  const response = await axios.get(url, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: 1,
      query,
    },
  });
  return response.data;
};
