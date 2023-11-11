import Spinner from '@/components/ui/spinner';
import updateOrderOrFail from '@/actions/update-order';
import { OrderStatus } from '@/lib/api/learning/schema/order.schema';

import styles from './page.module.css';

type OrderCancelledPageProps = {
  searchParams: {
    orderId: string;
  };
};

const OrderCancelledPage = async ({ searchParams }: OrderCancelledPageProps) => {
  const { orderId } = searchParams;
  
  try {
    console.log(`UPDATING order ${orderId} to have a CANCELLED status...`);
    await updateOrderOrFail(+orderId, OrderStatus.CANCELLED);
  }
  catch (error) {
    console.log(`Error while creating order : ${error}`);
  }

  return (
    <main className={styles['order-cancelled']}>
      <h1 className={styles['order-cancelled__title']}>Vous n&apos;avez pas terminé votre achat... 😢</h1>
      <p className={styles['order-cancelled__text']}>Vous allez être redirigé vers la page d&apos;accueil...</p>
      <Spinner redirectPath="/" />
    </main>
  );
};

export default OrderCancelledPage;