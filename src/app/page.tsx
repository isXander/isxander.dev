import styles from "./page.module.scss";
import Avatar from "./ui/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faYoutube,
  faInstagram,
  faLinux,
  faJava,
  faRust,
  faJs,
  faHtml5,
  faCss3Alt,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCube,
  faDollarSign,
  faFilm,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { fira_code } from "./fonts";

export default function Home() {
  return (
    <main className="normal-page">
      <TitleSection />
      <InfoSection />
    </main>
  );
}

function TitleSection() {
  return (
    <section className={`${styles.section} ${styles.titleSection}`}>
      <div className={styles.hello}>
        <h1 className={`${fira_code.className} ${styles.text}`}>I&apos;m Xander</h1>
        <Avatar circle src="/avatar.webp" alt="avatar" className={styles.avatar} />
      </div>
      <div className={styles.socials}>
        <Link href="https://github.com/isXander">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://isxander.dev/discord">
          <FontAwesomeIcon icon={faDiscord} />
        </Link>
        <Link href="https://youtube.com/@isXanderDev">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <Link href="https://instagram.com/isxander.pics">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="https://ko-fi.com/isxander">
          <FontAwesomeIcon icon={faDollarSign} />
        </Link>
      </div>

      <q className={styles.dumbQuote}>it works on my machine...</q>

      <Link
        href="mailto:business@isxander.dev"
        className={styles.contactButton}
      >
        Contact
      </Link>
    </section>
  );
}




function InfoSection() {
  return (
    <section className={`${styles.section} ${styles.infoSection}`}>
      <SkillsArticle />

      <LanguagesArticle />
    </section>
  );
}

function SkillsArticle() {
  return (
    <article className="section-card">
      <h2 className={styles.infoTitle}>Skills</h2>
      <p>
        I am a software developer who has various skills in different fields.
      </p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faCube} className={styles.bodyIcon} />
          <strong>Minecraft mod developer</strong>
          <br />
          Using Java and Kotlin, utilising the Gradle buildsystem, I create mods
          for Minecraft: Java Edition. I have now gained over 25 million
          downloads across all my mods. Check out my{" "}
          <a href="/projects">projects page</a> for all my mods!
        </li>
        <li>
          <FontAwesomeIcon icon={faGlobe} className={styles.bodyIcon} />
          <strong>Full-stack web apps</strong>
          <br />
          Vue/NuxtJS for the frontend, and Kotlin&apos;s Ktor framework for the
          backend, I am able to create full-stack web apps.
        </li>
        <li>
          <FontAwesomeIcon icon={faFilm} className={styles.bodyIcon} />
          <strong>Video editing</strong>
          <br />I have amassed over 1.5 million views on my YouTube channel. I
          use DaVinci Resolve for editing.
        </li>
        <li>
          <FontAwesomeIcon icon={faLinux} className={styles.bodyIcon} />
          <strong>Linux knowledge</strong>
          <br />
          In the past I have used Linux as a daily driver, and commonly manage
          Ubuntu servers to host stuff like my website and maven servers.
        </li>
      </ul>
    </article>
  );
}

function LanguagesArticle() {
  return (
    <article className="section-card">
      <h2 className={styles.infoTitle}>Programming Languages</h2>
      <p className={styles.infoDescription}>
        Due to my varied skillset, I have varying levels of experience in
        different programming languages. I will put them in order of my
        experience with it. Most experienced at the top, least at the bottom.
      </p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faJava} className={styles.bodyIcon} />
          Java
        </li>
        <li>
          <FontAwesomeIcon icon={faJava} className={styles.bodyIcon} />
          Kotlin
        </li>
        <li>
          <FontAwesomeIcon icon={faRust} className={styles.bodyIcon} />
          Rust
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} className={styles.bodyIcon} />
          JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} className={styles.bodyIcon} />
          TypeScript
        </li>
        <li>
          <FontAwesomeIcon icon={faHtml5} className={styles.bodyIcon} />
          HTML
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3Alt} className={styles.bodyIcon} />
          CSS
        </li>
        <li>
          <FontAwesomeIcon icon={faPython} className={styles.bodyIcon} />
          Python
        </li>
      </ul>
    </article>
  );
}
