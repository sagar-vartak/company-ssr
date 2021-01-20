import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Company SSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to SSR.js!</h1>

        <div className={styles.grid}>
          <a href="/surfboard" className={styles.card}>
            <img
              src="https://www.surfboardventures.com/favicon.ico"
              height="144px"
            />
            <h3>SurfBoard &rarr;</h3>
          </a>
          <a href="/contentstack" className={styles.card}>
            <img
              src="https://www.contentstack.com/favicon.ico"
              height="144px"
            />
            <h3>ContentStack &rarr;</h3>
          </a>

          <a href="/RawEngineering" className={styles.card}>
            <img
              src="https://www.raweng.com/icons/icon-144x144.png"
              height="144px"
            />
            <h3>Raw Engineering &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © 2021 ShAaGGy. All Rights Reserved.
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
