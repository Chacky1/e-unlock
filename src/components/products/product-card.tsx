"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import { Course } from "@/lib/api/learning/schema/course.schema";

import styles from "./product-card.module.css";

type ProductCardProps = {
  course: Course;
};

const ProductCard = ({ course }: ProductCardProps) => {
  const router = useRouter();

  const onCourseClick = () => {
    router.push(`/products/${course.slug}`);
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Image src={course.image} alt={course.name} width={300} height={200} />
      </div>
      <div className={styles.product__content}>
        <h3>{course.issue}</h3>
        <p>{course.description}</p>
        <Button onClick={onCourseClick}>{course.name}</Button>
      </div>
    </div>
  );
};

export default ProductCard;
