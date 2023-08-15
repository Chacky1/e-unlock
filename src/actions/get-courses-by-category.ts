import { clientApiLearning } from "@/lib/api/learning/client";

const fetchCoursesByCategory = async (categoryId: number) => {
  const courses = await clientApiLearning.fetchCoursesByCategory(categoryId);

  return courses;
};

export default fetchCoursesByCategory;