import styles from "../styles/Favorites.module.css";

export default function Favorites() {
  return (
    <div className={styles.favoritesEmpty}>
      <h2>No favorites to display yet</h2>
      <p>Start adding movies to your favorite list</p>
    </div>
  );
}
