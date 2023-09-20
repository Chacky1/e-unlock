import { redirect } from "next/navigation";

import fetchCourseBySlug from "@/actions/fetch-course-by-slug";
import Button from "@/components/ui/button";

import styles from "./page.module.css";

const COURSE_NOT_FOUND_TIMEOUT = 1000 * 5; // 5 seconds
const COURSE_SLUG = "git-de-poche";

const GitDePochePage = async () => {
  const course = await fetchCourseBySlug(COURSE_SLUG);
  console.log(course);

  if (!course) {
    setTimeout(() => {
      redirect("/");
    }, COURSE_NOT_FOUND_TIMEOUT);

    return <p>Une erreur s&apos;est produite, vous allez être redirigé...</p>;
  }

  return (
    <>
      <section id="sale-page" className="sale-page">
        <section id="sale-page-intro" className={styles['sale-page__intro']}>
          <video autoPlay loop controls>
            <source src={course.video} type="video/mp4" />
          </video>

          <div>
            <h1>{course.name}</h1>
            <p>{course.solution}</p>
            <p>{course.price}</p>
            <Button>Acheter</Button>
          </div>
        </section>

        <section
          id="sale-page-customer-suffering"
          className="sale-page__customer-suffering"
        ></section>

        <section
          id="sale-page-storytelling"
          className="sale-page__storytelling"
        ></section>

        <section
          id="sale-page-solutions"
          className="sale-page__solutions"
        ></section>
      </section>

      <section
        id="sale-page-differentiation"
        className="sale-page__differentiation"
      ></section>

      <section
        id="sale-page-prerequisites"
        className="sale-page__prerequisites"
      ></section>

      <section
        id="sale-page-disadvantages"
        className="sale-page__disadvantages"
      ></section>

      <section
        id="sale-page-usage-cases"
        className="sale-page__usage-cases"
      ></section>

      <section id="sale-page-program" className="sale-page__program"></section>

      <section
        id="sale-page-accesses"
        className="sale-page__accesses"
      ></section>

      <section id="sale-page-pricing" className="sale-page__pricing"></section>

      <section
        id="sale-page-inaction"
        className="sale-page__inaction"
      ></section>

      <section id="sale-page-faq" className="sale-page__faq"></section>
    </>
  );
};

export default GitDePochePage;
