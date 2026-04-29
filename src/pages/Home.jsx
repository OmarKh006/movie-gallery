import { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    {
      id: 1,
      title: "movie 1",
      release_date: 2024,
      url: "#",
    },
    {
      id: 2,
      title: "movie 2",
      release_date: 2023,
      url: "#",
    },
    {
      id: 3,
      title: "movie 3",
      release_date: 2025,
      url: "#",
    },
    {
      id: 4,
      title: "movie 4",
      release_date: 2026,
      url: "#",
    },
  ];

  const searchHandle = (event) => {
    event.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form className="search-form" typeof="search" onSubmit={searchHandle}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id}></MovieCard>;
        })}
      </div>
    </div>
  );
}
