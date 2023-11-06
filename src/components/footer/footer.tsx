import Link from "next/link";

import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__reserved"]}>
        <p>© {currentYear} E-UNLOCK. TOUS DROITS RÉSERVÉS.</p>
      </div>
      <div className={styles["footer__utils"]}>
        <h4>Quelques liens utiles...</h4>
        <ul className={styles["footer__utils-list"]}>
          <li>
            <Link href="support">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles["footer__links"]}>
        <h4>La lecture légale</h4>
        <ul className={styles["footer__links-list"]}>
          <li>
            <Link href="legal">Mentions Légales</Link>
          </li>
          <li>
            <Link href="cookies">Politique de gestion des cookies</Link>
          </li>
          <li>
            <Link href="privacy-policy">Politique de confidentialité</Link>
          </li>
          <li>
            <Link href="terms">Conditions Générales de vente</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
