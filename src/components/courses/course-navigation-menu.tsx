import Link from "next/link";

import { Course } from "@/lib/api/learning/schema/course.schema";
import CourseContentList from "@/components/courses/course-content-list";

type CourseNavigationMenuProps = {
  course: Course;
  userCode: string;
};

const CourseNavigationMenu = ({
  course,
  userCode,
}: CourseNavigationMenuProps) => {
  return (
    <nav>
      <Link href={`/profile/${userCode}`}>Bibliothèque</Link>
      <h3>{course.name}</h3>
      <CourseContentList course={course} userCode={userCode} />
    </nav>
  );
};

export default CourseNavigationMenu;
