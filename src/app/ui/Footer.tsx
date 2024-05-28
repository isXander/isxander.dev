import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
      <footer className={styles.footer}>
        This website is <Link href="https://github.com/isXander/isxander.dev">open source</Link>! • Copyright © isXander 2024
      </footer>
    )
  }