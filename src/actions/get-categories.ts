import { clientApiLearning } from "@/lib/api/learning/client";

const fetchCategories = async () => {
  const categories = await clientApiLearning.fetchCategories();

  return categories;
};

export default fetchCategories;