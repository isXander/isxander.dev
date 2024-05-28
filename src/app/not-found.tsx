import Link from "next/link"
import styles from "./not-found.module.scss"

export default function NotFound() {
    return (
        <main className="normal-page center">
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.errrorMessage}>Page not found!</h2>

            <Link href="/" className={styles.backButton}>Return home</Link>
        </main>
    )
}