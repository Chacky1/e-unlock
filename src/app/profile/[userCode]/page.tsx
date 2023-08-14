import fetchUser from "@/actions/fetch-user-courses";
import Header from "@/components/header/header";
import ProductCards from "@/components/products/product-cards";
import styles from "./profile.module.css";

type ProfilePageProps = {
  params: {
    userCode: string;
  };
};

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { userCode } = params;
  const user = await fetchUser(userCode);

  return (
    <>
      <main className={styles.profile}>
        <div className={styles.profile__container}>
          <Header />
          <section id="dashboard" className={styles.dashboard}>
            <h1 className={styles.dashboard__title}>Ma bibliothèque</h1>
            <ProductCards products={user.courses} />
          </section>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
