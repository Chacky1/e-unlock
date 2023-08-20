import { SignUp } from "@clerk/nextjs";
import styles from "./sign-up.module.css";

export default function Page() {
  return (
    <main className={styles["sign-up"]}>
      <SignUp />
    </main>
  );
}
