import styles from "../styles/MovieCard.module.css";

function MovieCard({ movie }) {
  function favoriteButtonClickHandler() {
    alert("clicked");
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
            className={styles.favoriteBtn}
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
