import styles from "./Header.module.css";
import searchIcon from "../assets/icons/search.svg";
import closeIcon from "../assets/icons/close.svg";

function Header({ searchContact, searchValue, clearSearch }) {
  return (
    <>
      <header className={styles.header}>
        <img
          src={searchIcon}
          alt="searchicon"
          className={`${styles.icon} ${styles.searchIcon}`}
        />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          value={searchValue}
          onChange={(event) => searchContact(event.target.value)}
        />
        <img
          src={closeIcon}
          alt="searchicon"
          className={`${styles.icon} ${styles.closeIcon} ${searchValue && styles.showCloseIcon}`}
          onClick={clearSearch}
        />
      </header>
    </>
  );
}

export default Header;
