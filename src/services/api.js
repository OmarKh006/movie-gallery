const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = () => {
  return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error("Failed to fetch popular movies: " + err.message);
    });
};

export const searchMovies = (query) => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  )
    .then((response) => response.json())
    .catch((err) => {
      throw new Error("Failed to fetch popular movies: " + err.message);
    });
};
