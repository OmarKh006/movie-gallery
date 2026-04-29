import styles from "../styles/Home.module.css";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "movie 1", release_date: 2024, url: "#" },
    { id: 2, title: "movie 2", release_date: 2023, url: "#" },
    { id: 3, title: "movie 3", release_date: 2025, url: "#" },
    { id: 4, title: "movie 4", release_date: 2026, url: "#" },
  ];

  const searchHandle = (event) => {
    event.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className={styles.home}>
      <form className={styles.searchForm} typeof="search" onSubmit={searchHandle}>
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
      <div className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
