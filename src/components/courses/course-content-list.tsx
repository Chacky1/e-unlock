import Link from "next/link";

import { Course } from "@/lib/api/learning/schema/course.schema";
import { Lesson } from "@/lib/api/learning/schema/lesson.schema";
import { Section } from "@/lib/api/learning/schema/section.schema";

type CourseContentListProps = {
  course: Course;
  userCode: string;
};

const CourseContentList = ({ course, userCode }: CourseContentListProps) => {
  return (
    <>
      {course.sections && course.sections.map((section: Section) => (
        <div key={section.id}>
          <h4>{section.name}</h4>
          <ul>
            {section.lessons && section.lessons.map((lesson: Lesson) => (
              <li key={lesson.id}>
                <Link
                  href={`/profile/${userCode}/courses/${course.slug}/${lesson.id}`}
                >
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CourseContentList;
