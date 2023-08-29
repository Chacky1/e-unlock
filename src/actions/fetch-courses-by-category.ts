import { clientApiLearning } from "@/lib/api/learning/client";
import { Course } from "@/lib/api/learning/schema/course.schema";

const fetchCoursesByCategory = async (categoryId: number): Promise<Course[]> => {
  const courses = await clientApiLearning.fetchCoursesByCategory(categoryId);

  return courses;
};

export default fetchCoursesByCategory;