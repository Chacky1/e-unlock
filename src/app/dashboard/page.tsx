import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import fetchUser from "@/actions/fetch-user-courses";
import Header from "@/components/header/header";
import ProfileCourses from "@/components/profile/courses";
import NoCourse from "@/components/profile/no-course";

import styles from "./profile.module.css";

const ProfilePage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await fetchUser(userId);
  const userCourses = user?.courses;

  return (
    <>
      <main className={styles.profile}>
        <section id="dashboard-header" className={styles.profile__header}>
          <div className={styles["profile__header-container"]}>
            <Header />
          </div>
          <h1 className={styles.profile__title}>Ma bibliothèque</h1>
        </section>

        <section id="dashboard-products" className={styles.profile__dashboard}>
          <div className={styles.profile__container}>
            {userCourses && userCourses.length > 0 && (
              <ProfileCourses courses={userCourses} />
            )}
            {userCourses && userCourses.length === 0 && (
              <NoCourse />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
