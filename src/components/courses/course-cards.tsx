import fetchCoursesByCategory from "@/actions/get-courses-by-category";
import styles from "./course-cards.module.css";
import CourseCard from "./course-card";
import { Course } from "@/lib/api/learning/schema/course.schema";

type CourseCardsProps = {
  categoryId: number;
};

const CourseCards = async ({ categoryId }: CourseCardsProps) => {
  let courses = [] as Course[];

  const defaultCourse = {
    name: "En construction",
    issue: "Je veux me former tout de suite",
    description:
      "Malheureusement, je travaille encore sur cette future formation...",
    price: 0,
    image: "/default-course.webp",
    categoryId: 0,
    id: 0,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  };

  try {
    courses = await fetchCoursesByCategory(categoryId);
  } catch (error) {
    return <p>Impossible de charger les cours disponibles...</p>;
  }

  return (
    <section id="courses" className={styles.courses}>
      <ul className={styles.courses__list}>
        {courses.length > 0 &&
          courses.map((course: any) => (
            <li key={course.id}>
              <CourseCard course={course} />
            </li>
          ))}
        {courses.length === 0 && (
          <li>
            <CourseCard course={defaultCourse} inactive />
          </li>
        )}
      </ul>
    </section>
  );
};

export default CourseCards;
