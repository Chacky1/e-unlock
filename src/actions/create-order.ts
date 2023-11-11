import clientApiLearning from "@/lib/api/learning/client";
import { Order } from "@/lib/api/learning/schema/order.schema";

const createOrderOrFail = async (
  userCode: string,
  courseId: number,
  status: string
): Promise<Order> => {
  return await clientApiLearning.createOrderOrFail(userCode, courseId, status);
};

export default createOrderOrFail;