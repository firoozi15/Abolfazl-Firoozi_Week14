import styles from "./CategoryButtons.module.css";

function CategoryButtons({ categories, setFilterCategory, selectedCategory }) {
  return (
    <>
      <div className={styles.filterButtons}>
        <button
          onClick={() => {
            setFilterCategory("All");
          }}
          className={`${styles.button} ${selectedCategory === "All" && styles.activeFilter}`}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category.id}
              className={`${styles.button} ${selectedCategory === category.name && styles.activeFilter}`}
              value={category.name}
              onClick={() => {
                setFilterCategory(category.name);
              }}
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
