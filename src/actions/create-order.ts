import clientApiLearning from "@/lib/api/learning/client";

const createOrder = async (
  userCode: string,
  courseId: number,
  status: string
): Promise<Boolean> => {
  console.log("createOrder", userCode, courseId, status);
  return await clientApiLearning.createOrder(userCode, courseId, status);
};

export default createOrder;