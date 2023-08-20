"use client";

import { Product } from "@/types/product.type";
import Button from "@/components/ui/button";
import ProfileCourseCard from "./product-card";
import styles from "./product-cards.module.css";
import { useRouter } from "next/navigation";

type ProfileCourseCardsProps = {
  products: Product[];
};

const ProductCards = ({ products }: ProfileCourseCardsProps) => {
  const router = useRouter();

  const onDiscoverCatalogClick = () => {
    router.push("/");
  };

  return (
    <section id="products" className={styles.products}>
      {products.length > 0 && (
        <ul>
          {products.map((product: any) => (
            <li key={product.id}>
              <ProfileCourseCard product={product} />
            </li>
          ))}
        </ul>
      )}
      {products.length === 0 && (
        <div className={styles.products__none}>
          <p>Vous n&apos;avez pas encore de cours dans votre bibliothèque.</p>
          <Button variant="primary" onClick={onDiscoverCatalogClick} style={{ color: '#fff' }}>Découvrir les cours</Button>
        </div>
      )}
    </section>
  );
};

export default ProductCards;
