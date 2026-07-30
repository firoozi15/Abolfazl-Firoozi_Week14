import styles from "./Header.module.css";
import searchIcon from "../assets/icons/search.svg";
import closeIcon from "../assets/icons/close.svg";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <img
          src={searchIcon}
          alt="searchicon"
          className={`${styles.icon} ${styles.searchIcon}`}
        />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
        <img
          src={closeIcon}
          alt="searchicon"
          className={`${styles.icon} ${styles.closeIcon}`}
        />
      </div>
    </>
  );
}

export default Header;
