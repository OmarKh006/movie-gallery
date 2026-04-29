import styles from "../styles/Home.module.css";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import { useState, useEffect } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies.results);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies ...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const searchHandle = (event) => {
    event.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className={styles.home}>
      <form
        className={styles.searchForm}
        typeof="search"
        onSubmit={searchHandle}
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className={styles.moviesGrid}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
