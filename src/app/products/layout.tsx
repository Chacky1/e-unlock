import { redirect } from "next/navigation";

import Header from "@/components/header/header";
import ProductIntro from "@/components/products/product-intro";
import fetchCourseBySlug from "@/actions/fetch-course-by-slug";

import styles from "./layout.module.css";

const COURSE_NOT_FOUND_TIMEOUT = 1000 * 5; // 5 seconds

type ProductPageProps = {
  params: {
    productSlug: string;
  };
};

const ProductLayout = async ({ params }: ProductPageProps) => {
  const course = await fetchCourseBySlug(params.productSlug);

  if (!course) {
    setTimeout(() => {
      redirect("/");
    }, COURSE_NOT_FOUND_TIMEOUT);

    return <p>Une erreur s&apos;est produite, vous allez être redirigé...</p>;
  }

  return (
    <main className={styles.course}>
      <div className={styles.container}>
        <Header />
        <ProductIntro product={course} />
      </div>
    </main>
  );
};

export default ProductLayout;
