import Header from "@/components/header/header";

import styles from "./layout.module.css";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.course}>
      <div className={styles.container}>
        <Header secondaryTextColor="#fff"/>
      </div>
      {children}
    </main>
  );
};

export default ProductLayout;
