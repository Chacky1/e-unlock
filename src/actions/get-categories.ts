import { clientApiLearning } from "@/lib/client-api-learning";

const fetchCategories = async () => {
  const categories = await clientApiLearning.fetchCategories();

  return categories;
};

export default fetchCategories;