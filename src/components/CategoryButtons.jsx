import styles from "./CategoryButtons.module.css";

function CategoryButtons({ categories, setFilterCategory }) {
  return (
    <>
      <div className={styles.filterButtons}>
        <button
          onClick={() => setFilterCategory("All")}
          className={`${styles.button} ${styles.activeFilter}`}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category.id}
              className={styles.button}
              value={category.name}
              onClick={() => setFilterCategory(category.name)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default CategoryButtons;
