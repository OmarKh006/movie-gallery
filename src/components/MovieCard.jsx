import styles from "../styles/MovieCard.module.css";

function MovieCard({ movie }) {
  function favoriteButtonClickHandler() {
    alert("clicked");
  }

  return (
    <div className={styles.movieCard}>
      <div className={styles.moviePoster}>
        <img src={movie.url} alt={movie.title} />
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
        <p>{movie.release_date}</p>
      </div>
      <hr />
    </div>
  );
}

export default MovieCard;
