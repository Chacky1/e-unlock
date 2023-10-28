import { SignIn } from "@clerk/nextjs";
import styles from "./sign-in.module.css";

type PageProps = {
  searchParams: {
    redirect: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  const { redirect } = searchParams;

  return (
    <main className={styles["sign-in"]}>
      <SignIn afterSignInUrl={redirect} />
    </main>
  );
}
