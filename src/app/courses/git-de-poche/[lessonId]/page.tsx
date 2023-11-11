import fetchCourseById from "@/actions/fetch-course-by-id";
import fetchUser from "@/actions/fetch-user-courses";
import CourseContent from "@/components/courses/course-content";
import CourseNavigationMenu from "@/components/courses/course-navigation-menu";
import { Course } from "@/lib/api/learning/schema/course.schema";

import styles from "./page.module.css";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type GitDePochePageProps = {
  params: {
    lessonId: string;
  };
};

const GitDePochePage = async ({ params }: GitDePochePageProps) => {
  const { lessonId } = params;
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await fetchUser(userId);
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
      <CourseNavigationMenu course={courseDetails} userCode={userId} activeLessonId={+lessonId} />
      <CourseContent lessonId={+lessonId} />
    </main>
  );
};
export default GitDePochePage;
