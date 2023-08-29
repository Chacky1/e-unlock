import { clientApiLearning } from "@/lib/api/learning/client";
import { Category } from "@/lib/api/learning/schema/category.schema";

const fetchCategories = async (): Promise<Category[]> => {
  const categories = await clientApiLearning.fetchCategories();

  return categories;
};

export default fetchCategories;