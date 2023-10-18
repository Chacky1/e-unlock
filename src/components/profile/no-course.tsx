"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";

import styles from "./no-course.module.css";

const NoCourse = () => {
  const router = useRouter();

  const redirectToProducts = () => {
    router.push("/");
  };

  return (
    <div className={styles["no-course"]}>
      <p>
        Vous n&apos;avez pas encore de cours dans votre bibliothèque...
      </p>
      <Button
        variant="primary"
        onClick={redirectToProducts}
        style={{ color: "#fff" }}
      >
        Découvrir les cours
      </Button>
    </div>
  );
};

export default NoCourse;
