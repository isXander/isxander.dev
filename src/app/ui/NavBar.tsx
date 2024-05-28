import Link from 'next/link'
import styles from './NavBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { fira_code } from '../fonts'

export default function NavBar() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={`${styles.navRow} ${styles.navLeft}`}>
                    <Link href="/" className={`${styles.homeLink} ${fira_code.className}`}>isXander</Link>
                </div>
                <div className={`${styles.navRow} ${styles.navRight} ${fira_code.className}`}>
                    <NavLinks />
                </div>
            </nav>
        </header>
    )
}

function NavLinks() {
    return (
        <>
            <Link href="/projects">Projects</Link>
            <Link href="/photography">Photography</Link>
            <Link href="/about">About Me</Link>
            <Link href="https://github.com/isXander/"><FontAwesomeIcon icon={faGithub} size='xl' /></Link>
        </>
    )
}