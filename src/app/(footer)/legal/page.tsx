import styles from "./page.module.css";

const LegalPage = () => {
  return (
    <section id="legal-terms" className={styles["legal"]}>
      <div className={styles["legal__container"]}>
        <h1 className={styles["legal__title"]}>Mentions légales</h1>
        <p>Adresse : Unlocktoncomputer, 19 rue Salluste, 67200 Strasbourg</p>
        <p>Email : unlocktoncomputer@gmail.com</p>
        <p>Siret : 893 741 371 00015</p>
        <p>Code APE : 6202A – N° TVA intracommunautaire : FR 80893741371</p>
        <p>Dirigeant : M. Alban THAUMUR</p>
        <p>Identification du prestataire d’hébergement : Vercel</p>
        <div className={styles["legal__hosting-provider-address"]}>
          <p>Vercel Inc.</p>
          <p>Attn: DMCA/dmca@vercel.com</p>
          <p>440 N Barranca Ave #4133</p>
          <p>Covina, CA 91723</p>
          <p>Phone: 5592887060</p>
          <p><a href="dmca@vercel.com">dmca@vercel.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
