import { clientApiLearning } from "@/lib/client-api-learning";

const fetchCoursesByCategory = async (categoryId: number) => {
  const courses = await clientApiLearning.fetchCoursesByCategory(categoryId);

  return courses;
};

export default fetchCoursesByCategory;