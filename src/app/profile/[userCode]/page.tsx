import fetchUser from "@/actions/fetch-user-courses";
import Header from "@/components/header/header";
import ProductCards from "@/components/products/product-cards";
import styles from "./profile.module.css";
import { redirect } from "next/navigation";

type ProfilePageProps = {
  params: {
    userCode: string;
  };
};

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { userCode } = params;
  const user = await fetchUser(userCode);

  if (!user) {
    redirect("/");
  }

  return (
    <>
      <main className={styles.profile}>
        <section id="dashboard-header" className={styles.profile__header}>
          <div className={styles.profile__container}>
            <Header />
            <h1 className={styles.profile__title}>Ma bibliothèque</h1>
          </div>
        </section>

        <section id="dashboard-products" className={styles.profile__dashboard}>
          <div className={styles.profile__container}>
            <ProductCards products={user.courses} />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
