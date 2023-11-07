import Header from "@/components/header/header";

import styles from "./layout.module.css";

const FooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles["footer-layout"]}>
      <div className={styles.container}>
        <Header />
      </div>
      {children}
    </main>
  );
};

export default FooterLayout;
