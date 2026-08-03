import { useState } from "react";
import styles from "./CategoryButtons.module.css";

function CategoryButtons({ categories, setFilterCategory }) {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <>
      <div className={styles.filterButtons}>
        <button
          onClick={() => {
            setFilterCategory("All");
            setActiveCategory("All");
          }}
          className={`${styles.button} ${activeCategory === "All" && styles.activeFilter}`}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category.id}
              className={`${styles.button} ${activeCategory === category.name && styles.activeFilter}`}
              value={category.name}
              onClick={() => {
                setFilterCategory(category.name);
                setActiveCategory(category.name);
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
