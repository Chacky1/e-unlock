import Link from "next/link";

import { Course } from "@/lib/api/learning/schema/course.schema";
import CourseContentList from "@/components/courses/course-content-list";

import styles from "./course-navigation-menu.module.css";

type CourseNavigationMenuProps = {
  course: Course;
  userCode: string;
  activeLessonId?: number;
};

const CourseNavigationMenu = ({
  course,
  userCode,
  activeLessonId,
}: CourseNavigationMenuProps) => {
  return (
    <nav className={styles["course-navigation"]}>
      <Link href={`/profile/${userCode}`} className={styles["course-navigation__back"]}>Bibliothèque</Link>
      <h3 className={styles["course-navigation__title"]}>{course.name}</h3>
      <CourseContentList course={course} userCode={userCode} activeLessonId={activeLessonId} />
    </nav>
  );
};

export default CourseNavigationMenu;
