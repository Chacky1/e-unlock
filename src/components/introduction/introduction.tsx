import Button from "@/components/ui/button";
import styles from "./introduction.module.css";
import Image from "next/image";

export default function Introduction() {
  return (
    <section id="introduction" className={styles.introduction}>
      <div className={styles.introduction__content}>
        <h1>Développez le monde !</h1>
        <p>
          Des formations pour <strong>devenir un bon développeur</strong>,{" "}
          <strong>maîtriser vos outils</strong> et aller plus loin avec{" "}
          <strong>la cybersécurité</strong> et <strong>le cloud</strong>.
        </p>
        <Button variant="tertiary">Commencer</Button>
      </div>
      <div className={styles.introduction__image}>
        <Image
          src="/images/video-camera-folder.webp"
          width={400}
          height={400}
          alt="Video camera folder"
        />
      </div>
    </section>
  );
}
