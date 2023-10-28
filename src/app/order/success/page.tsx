import createOrder from "@/actions/create-order";
import Spinner from "@/components/ui/spinner";

type orderSuccessPageProps = {
  searchParams: {
    courseId: string;
    userCode: string;
  };
};

const OrderSuccessPage = async ({ searchParams }: orderSuccessPageProps) => {
  const { courseId, userCode } = searchParams;

  await createOrder(userCode, +courseId, "SUCCESS");

  return (
    <main>
      <h1>Votre achat a été effectué avec succès 🥳</h1>
      <p>Vous allez être redirigé vers votre dashboard...</p>
      <Spinner redirectPath={`/profile/${userCode}`} />
    </main>
  );
};

export default OrderSuccessPage;
