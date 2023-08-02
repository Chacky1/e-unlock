import Header from "@/components/header/header";
import styles from "./root.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Header />
      Main Page
    </main>
  )
}
