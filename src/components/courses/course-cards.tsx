import fetchCoursesByCategory from "@/actions/get-courses-by-category";
import CourseCard from "./course-card";
import styles from "./course-cards.module.css";

type CourseCardsProps = {
  categoryId: number;
};

const CourseCards = async ({ categoryId }: CourseCardsProps) => {
  let courses = [];

  try {
    courses = await fetchCoursesByCategory(categoryId);
  } catch (error) {
    return <p>Impossible de charger les cours disponibles...</p>;
  }

  return (
    <section id="courses" className={styles.courses}>
      {courses.length > 0 && (
        <ul className={styles.courses__list}>
          {courses.map((course: any) => (
            <li key={course.id}>
              <CourseCard
                name={course.name}
                description={course.description}
                issue={course.issue}
                image={course.image}
              />
            </li>
          ))}
        </ul>
      )}
      {
        courses.length === 0 && (
          <p className={styles.courses__construction}>En cours de construction...</p>
        )
      }
    </section>
  );
};

export default CourseCards;
