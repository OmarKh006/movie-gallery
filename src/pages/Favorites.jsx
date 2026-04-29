import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import styles from "../styles/Favorites.module.css";

export default function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className={styles.favorites}>
        <h2>Your Favorites</h2>
        <div className={styles.moviesGrid}>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.favoritesEmpty}>
      <h2>No favorites to display yet</h2>
      <p>Start adding movies to your favorite list</p>
    </div>
  );
}
