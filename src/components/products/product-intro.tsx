import { Course } from "@/lib/api/learning/schema/course.schema";
import Button from "@/components/ui/button";
import styles from "./product-intro.module.css";

type ProductIntroProps = {
  product: Course;
};

const ProductIntro = ({ product }: ProductIntroProps) => {
  return (
    <section id="product-introduction" className={styles.header}>
      <h1>{product.name}</h1>
      <p>{product.solution}</p>
      <p>{product.price}</p>
      <Button>Acheter</Button>
    </section>
  );
};

export default ProductIntro;
