import { Course } from "@/lib/api/learning/schema/course.schema";
import ProductCard from "@/components/products/product-card";

import styles from "./product-cards.module.css";

type ProductCardsProps = {
  courses: Course[];
};

const ProductCards = async ({ courses }: ProductCardsProps) => {
  return (
    <section id="products" className={styles.products}>
      <ul className={styles.products__list}>
        {courses.map((course: any) => (
          <li key={course.id}>
            <ProductCard course={course} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductCards;
