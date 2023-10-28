import { SignUp } from "@clerk/nextjs";
import styles from "./sign-up.module.css";

type PageProps = {
  searchParams: {
    redirect: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  const { redirect } = searchParams;

  return (
    <main className={styles["sign-up"]}>
      <SignUp afterSignUpUrl={redirect} />
    </main>
  );
}
