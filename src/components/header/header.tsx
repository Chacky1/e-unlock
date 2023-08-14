"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserButton, useAuth } from "@clerk/nextjs";

import Button from "@/components/ui/button";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  const { userId } = useAuth();
  const router = useRouter();

  const onSignUpClick = () => {
    router.push("/sign-up");
  };

  const onSignInClick = () => {
    router.push("/sign-in");
  };

  return (
    <header className={styles.header}>
      <section id="logo" className={styles.logo}>
        <Image
          src="/unlock-logo.webp"
          width={40}
          height={40}
          alt="UnlockTonComputer"
        />
        <h1 className={styles.title}>e-unlock</h1>
      </section>

      <section id="navigation" className={styles.auth}>
        {userId ? (
          <>
            <nav className={styles.navigation}>
              <ul>
                <li className={styles.navigation__link}>
                  <Link href="/">
                    Accueil
                  </Link>
                </li>
                <li className={styles.navigation__link}>
                  <Link
                    href={`/profile/${userId}`}
                  >
                    Mes cours
                  </Link>
                </li>
              </ul>
            </nav>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            <Button variant="secondary" onClick={onSignUpClick}>
              Inscription
            </Button>
            <Button variant="primary" outlined onClick={onSignInClick}>
              Connexion
            </Button>
          </>
        )}
      </section>
    </header>
  );
}
