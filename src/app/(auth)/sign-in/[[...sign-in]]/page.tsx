import { SignIn } from "@clerk/nextjs";
import styles from "./sign-in.module.css";

export default function Page() {
  return (
    <main className={styles["sign-in"]}>
      <SignIn />
    </main>
  );
}
