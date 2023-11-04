import createOrder from "@/actions/create-order";
import Spinner from "@/components/ui/spinner";

import styles from "./page.module.css";

type OrderSuccessPageProps = {
  searchParams: {
    courseId: string;
    userCode: string;
  };
};

const OrderSuccessPage = async ({ searchParams }: OrderSuccessPageProps) => {
  const { courseId, userCode } = searchParams;

  try {
    console.log(`Creating a SUCCESS order for user ${userCode} and course ${courseId}...`);
    await createOrder(userCode, +courseId, "SUCCESS");
  }
  catch (error) {
    console.log(`Error while creating order : ${error}`);
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
