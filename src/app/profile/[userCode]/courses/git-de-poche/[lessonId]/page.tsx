import fetchCourseById from "@/actions/fetch-course-by-id";
import fetchUser from "@/actions/fetch-user-courses";
import CourseContent from "@/components/courses/course-content";
import CourseNavigationMenu from "@/components/courses/course-navigation-menu";
import { Course } from "@/lib/api/learning/schema/course.schema";

import styles from "./page.module.css";

type GitDePochePageProps = {
  params: {
    userCode: string;
    lessonId: string;
  };
};

const GitDePochePage = async ({ params }: GitDePochePageProps) => {
  const { userCode, lessonId } = params;
  const user = await fetchUser(userCode);
  const userCourses = user?.courses;

  if (!userCourses) {
    return <h1>Vous n&apos;avez pas accès à ce cours</h1>;
  }

  const course = userCourses.find(
    (course: Course) => course.slug === "git-de-poche"
  );

  if (!course) {
    return <h1>Vous n&apos;avez pas accès à ce cours</h1>;
  }

  const courseDetails = await fetchCourseById(course.id);

  if (!courseDetails) {
    return <h1>Vous n&apos;avez pas accès à ce cours</h1>;
  }

  return (
    <main className={styles.course}>
      <CourseNavigationMenu course={courseDetails} userCode={userCode} activeLessonId={+lessonId} />
      <CourseContent lessonId={+lessonId} />
    </main>
  );
};
export default GitDePochePage;
