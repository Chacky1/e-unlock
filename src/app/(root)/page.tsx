import Header from "@/components/header/header";
import Introduction from "@/components/introduction/introduction";
import Categories from "@/components/categories/categories";
import fetchCategories from "@/actions/fetch-categories";
import CategoryProducts from "@/components/categories/category-products";
import { Category } from "@/lib/api/learning/schema/category.schema";

import styles from "./root.module.css";

const Home = async () => {
  let categories: Category[] = [];

  try {
    categories = await fetchCategories();
  } catch (error) {
    categories = [];
  }

  return (
    <main className={styles.home}>
      <div className={styles.home__container}>
        <Header />
        <Introduction />
        {categories.length > 0 && <Categories categories={categories} />}
        {categories.length > 0 && categories.map((category: any) => (
          <CategoryProducts key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}

export default Home;
