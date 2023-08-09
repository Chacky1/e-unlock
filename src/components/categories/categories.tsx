import getCategories from "@/actions/get-categories";
import Category from "./category";
import styles from "./categories.module.css";

const Categories = async () => {
  let categories = [];

  try {
    categories = await getCategories();
  } catch (error) {
    return <p>Unable to load categories</p>;
  }

  return (
    <section id="categories" className={styles.categories}>
      <div className={styles.categories__title}>
        <h2>Catégories</h2>
      </div>
      <ul className={styles.categories__categories}>
        {categories &&
          categories.map((category: any) => (
            <li key={category.id}>
              <Category
                name={category.name}
                description={category.description}
                image={category.image}
                color={category.color}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Categories;
