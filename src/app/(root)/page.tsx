import Header from "@/components/header/header";
import styles from "./root.module.css";
import Introduction from "@/components/introduction/introduction";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.home__container}>
        <Header />
        <Introduction />
      </div>
    </main>
  )
}
