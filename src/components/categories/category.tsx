import Image from "next/image";
import styles from "./category.module.css";
import { slugify } from "@/lib/utils";

type CategoryProps = {
  name: string;
  description: string;
  image: string;
  color: string;
};

const Category = ({ name, description, image, color }: CategoryProps) => {
  const slugifiedName = slugify(name);
  
  return (
    <a
      className={styles.category}
      href={`#category_${slugifiedName}`}
      style={{ backgroundColor: color }}
    >
      <div className={styles.category__image}>
        <Image src={image} alt={name} width={80} height={80} />
      </div>
      <div className={styles.category__content}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Category;
