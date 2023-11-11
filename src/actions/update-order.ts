import clientApiLearning from "@/lib/api/learning/client";
import { Order } from "@/lib/api/learning/schema/order.schema";

const updateOrderOrFail = async (
  orderId: number,
  status: string
): Promise<Order> => {
  return await clientApiLearning.updateOrderOrFail(orderId, status);
};

export default updateOrderOrFail;
