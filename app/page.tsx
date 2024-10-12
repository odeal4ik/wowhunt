import { Header } from "@/components/header/header";
import { HeroBlock } from "@/components/hero-block/hero-block";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBlock />
      <div className={styles.page}>
        <main className={styles.main}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste
            praesentium blanditiis exercitationem ratione ducimus qui
            temporibus, molestiae nulla deleniti. Quia illo numquam rerum
            deserunt soluta impedit, iste perferendis totam?
          </div>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
