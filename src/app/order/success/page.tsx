import Spinner from "@/components/ui/spinner";
import updateOrderOrFail from "@/actions/update-order";
import { OrderStatus } from "@/lib/api/learning/schema/order.schema";

import styles from "./page.module.css";

type OrderSuccessPageProps = {
  searchParams: {
    orderId: string;
    userCode: string;
  };
};

const OrderSuccessPage = async ({ searchParams }: OrderSuccessPageProps) => {
  const { orderId, userCode } = searchParams;

  try {
    console.log(`UPDATING order ${orderId} to have a SUCCESS status...`);
    await updateOrderOrFail(+orderId, OrderStatus.SUCCESS);
  }
  catch (error) {
    console.error(`Error while updating order : ${error}`);
  }

  return (
    <main className={styles['order-success']}>
      <h1 className={styles['order-success__title']}>Votre achat a été effectué avec succès 🥳</h1>
      <p className={styles['order-success__text']}>Vous allez être redirigé vers votre dashboard...</p>
      <Spinner redirectPath={`/profile/${userCode}`} />
    </main>
  );
};

export default OrderSuccessPage;
