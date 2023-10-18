import Image from "next/image";

import { slugify } from "@/lib/utils";
import { Course } from "@/lib/api/learning/schema/course.schema";
import fetchCoursesByCategory from "@/actions/fetch-courses-by-category";
import ProductCards from "@/components/products/product-cards";

import styles from "./category-products.module.css";

type CategoryProductsProps = {
  category: any;
};

const CategoryProducts = async ({ category }: CategoryProductsProps) => {
  let courses: Course[] = [];
  const slugifiedName = slugify(category.name);

  try {
    courses = await fetchCoursesByCategory(category.id);
  } catch (error) {
    return <p>Impossible de charger les cours disponibles...</p>;
  }

  return (
    <section
      id={`category_${slugifiedName}`}
      className={styles.categoryProducts}
    >
      <div className={styles.categoryProducts__title}>
        <h2>{category.name}</h2>
        <p>{category.description}</p>
      </div>
      {courses.length > 0 && <ProductCards courses={courses} />}
      {courses.length === 0 && (
        <div className={styles['categoryProducts__no-course']}>
          <Image
            src="/images/building.svg"
            alt="section en construction"
            width="400"
            height="300"
          />
          <p>
            <i>
              Source:{" "}
              <a href="https://fr.freepik.com/vecteurs-libre/ingenierie-plate-construction-illustree_13107137.htm#query=construction&position=0&from_view=search&track=sph">
                Freepik
              </a>
            </i>
          </p>
        </div>
      )}
    </section>
  );
};

export default CategoryProducts;
