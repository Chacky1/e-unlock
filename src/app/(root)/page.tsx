import Header from "@/components/header/header";
import styles from "./root.module.css";
import Introduction from "@/components/introduction/introduction";
import Categories from "@/components/categories/categories";
import fetchCategories from "@/actions/get-categories";
import CategoryCourses from "@/components/categories/category-courses";
import { Category } from "@/lib/api/learning/schema/category.schema";

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
          <CategoryCourses key={category.id} category={category} />
        ))}
      </div>
    </main>
  );
}

export default Home;
