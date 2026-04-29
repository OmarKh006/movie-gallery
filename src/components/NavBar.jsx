import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link to="/" className={styles.navLink}>
          Movie App
        </Link>
      </div>
      <ul className={styles.navbarLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/favorites" className={styles.navLink}>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
