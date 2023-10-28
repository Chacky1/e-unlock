import clientApiLearning from "@/lib/api/learning/client";
import { Course } from "@/lib/api/learning/schema/course.schema";

const fetchCourseById = async (courseId: number): Promise<Course | null> => {
  const course = await clientApiLearning.fetchCourseById(courseId);

  return course;
};

export default fetchCourseById;