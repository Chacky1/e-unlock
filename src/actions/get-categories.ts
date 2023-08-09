import clientApiLearning from "@/lib/client-api-learning";

const {
    API_LEARNING_URL,
} = process.env;

const getCategories = async () => {
  const categoriesUrl = new URL("/categories", API_LEARNING_URL);

  const response = await fetch(categoriesUrl, {
    headers: { authorization: `Bearer ${clientApiLearning.accessToken}` },
  });

  const categories = await response.json();

  return categories;
};

export default getCategories;