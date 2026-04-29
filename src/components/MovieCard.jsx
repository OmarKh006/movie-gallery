import { useMovieContext } from "../contexts/MovieContext";
import styles from "../styles/MovieCard.module.css";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function favoriteButtonClickHandler(e) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className={styles.movieCard}>
      <div className={styles.moviePoster}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.movieOverlay}>
          <button
            type="button"
            className={`${styles.favoriteBtn} ${favorite ? styles.active : ""}`}
            onClick={favoriteButtonClickHandler}
          >
            ❤︎⁠
          </button>
        </div>
      </div>
      <div className={styles.movieInfo}>
        <h3>{movie.title}</h3>
        <p>{movie.release_date.split("-")[0]}</p>
      </div>
      <hr />
    </div>
  );
}

export default MovieCard;
