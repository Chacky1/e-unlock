import createOrder from '@/actions/create-order';
import Spinner from '@/components/ui/spinner';

import styles from './page.module.css';

type OrderCancelledPageProps = {
  searchParams: {
    courseId: string;
    userCode: string;
  };
};

const OrderCancelledPage = async ({ searchParams }: OrderCancelledPageProps) => {
  const { courseId, userCode } = searchParams;
  
  try {
    console.log(`Creating a CANCELLED order for user ${userCode} and course ${courseId}...`);
    await createOrder(userCode, +courseId, "CANCELLED");
  }
  catch (error) {
    console.log(`Error while creating order : ${error}`);
  }

  return (
    <main className={styles['order-cancelled']}>
      <h1 className={styles['order-cancelled__title']}>Vous n'avez pas terminé votre achat... 😢</h1>
      <p className={styles['order-cancelled__text']}>Vous allez être redirigé vers la page d'accueil...</p>
      <Spinner redirectPath="/" />
    </main>
  );
};

export default OrderCancelledPage;