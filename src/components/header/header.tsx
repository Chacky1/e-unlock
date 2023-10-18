"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserButton, useAuth } from "@clerk/nextjs";

import Button from "@/components/ui/button";
import styles from "./header.module.css";
import Link from "next/link";

interface HeaderProps {
  primaryTextColor?: string;
  secondaryTextColor?: string;
}

export default function Header({ primaryTextColor = 'inherit', secondaryTextColor = 'inherit' }: HeaderProps) {
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
      <section id="logo">
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/unlock-logo.webp"
            width={40}
            height={40}
            alt="UnlockTonComputer"
          />
          <h1 className={styles.title} style={{color: primaryTextColor}}>e-unlock</h1>
        </Link>
      </section>

      <section id="navigation" className={styles.auth}>
        {userId ? (
          <>
            <nav className={styles.navigation}>
              <ul>
                <li className={styles.navigation__link}>
                  <Link href="/">Accueil</Link>
                </li>
                <li className={styles.navigation__link}>
                  <Link href={`/profile/${userId}`}>Mes cours</Link>
                </li>
              </ul>
            </nav>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <>
            <Button variant="secondary" style={{color: secondaryTextColor}} onClick={onSignUpClick}>
              Inscription
            </Button>
            <Button variant="primary" style={{color: primaryTextColor}} outlined onClick={onSignInClick}>
              Connexion
            </Button>
          </>
        )}
      </section>
    </header>
  );
}
