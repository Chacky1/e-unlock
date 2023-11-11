import Link from "next/link";

import { Course } from "@/lib/api/learning/schema/course.schema";
import { Lesson } from "@/lib/api/learning/schema/lesson.schema";
import { Section } from "@/lib/api/learning/schema/section.schema";

import styles from "./course-content-list.module.css";

type CourseContentListProps = {
  course: Course;
  userCode: string;
  activeLessonId?: number;
};

const CourseContentList = ({ course, userCode, activeLessonId }: CourseContentListProps) => {
  return (
    <div className={styles["course-content"]}>
      {course.sections && course.sections.map((section: Section) => (
        <div key={section.id} className={styles["course-content__section"]}>
          <h4>{section.name}</h4>
          <ul className={styles["course-content__lessons"]}>
            {section.lessons && section.lessons.map((lesson: Lesson) => (
              <li key={lesson.id} className={styles["course-content__lesson"]}>
                <Link
                  href={`/courses/${course.slug}/${lesson.id}`}
                  className={lesson.id === activeLessonId ? styles["course-content__lesson--active"] : ""}
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseContentList;
