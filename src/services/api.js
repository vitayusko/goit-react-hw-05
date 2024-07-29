import axios from "axios";

const API_KEY = "bd3d086e77f5add27184f7b47bd9e9c8";

export const fetchMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
};
