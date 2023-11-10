import SupportForm from "@/components/support/form";

import styles from "./page.module.css";

const { MAKE_SUPPORT_WEBHOOK_URL = '' } = process.env;

const SupportPage = () => {
  return (
    <section id="support" className={styles["support"]}>
      <h1 className={styles["support__title"]}>Page de contact / support</h1>
      <SupportForm urlHandler={MAKE_SUPPORT_WEBHOOK_URL} />
    </section>
  );
};

export default SupportPage;
