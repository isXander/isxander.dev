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
import YoutubeEmbed from "./ui/YoutubeEmbed";
import voxelEngineImg from "./voxel-engine.webp"
import Image from "next/image";

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
      <SkillEntry 
          title="Minecraft Modding" 
          tags={["Java", "Kotlin", "Gradle", "Maven", "Maintaining Libraries", "Bytecode Manip", "Commissions"]} 
          experience={{ text: 'very experienced', progress: 0.98 }}>
        <p>
          I spend most of my free time working on modifications for Minecraft: Java Edition.
          This involves work with <strong>Java</strong>, <strong>Kotlin</strong> and <strong>Gradle</strong> build system.
          To mod a Java application, extensive knowledge of the JVM&apos;s bytecode is required. I employ runtime bytecode manipulation techniques, 
          primarily powered by <Link href="https://github.com/SpongePowered/Mixin">Mixin</Link> and ASM libraries.
        </p>
        <p>
          Some of these mods are also libraries. Their functionality is to provide utility for other modifications.
          One such example is <Link href="projects/yet-another-config-lib">YetAnotherConfigLib</Link>.
          This mod has been downloaded over 17 million times, and used by many other mods that aren&apos;t even my own.
          This has forced me to learn the ways of maintaining a library, providing
          <Link href="https://docs.isxander.dev/yet-another-config-lib">documentation</Link>, maintaining API compatibility,
          adhearing to semver and publishing maven artifacts. Many other mod developers depend on this mod, and love using it!
        </p>
        <p>
          I have also been commissioned by multiple YouTubers to create mods for their videos: 
          namely <Link href="https://youtu.be/UKpFoYqN9-0">ChrisDaCow</Link> and <Link href="https://youtu.be/_IYVOuLYLUs">Socksfor1</Link>.
          This valueable experience has taught me the ways of working for a client&apos;s needs and deadlines, rather than my own.
        </p>
        <p>
          This hobby has helped fund my life, ammounting at (as of June 2024) 60 million downloads.
          It&apos;s something I&apos;m extremely proud of and will continue to work on for the forseeable future.
          You can view my accounts on 
          <Link href="https://www.curseforge.com/members/xanderisdev/projects">Curseforge</Link> and 
          <Link href="https://modrinth.com/user/isxander">Modrinth</Link>, sites dedicated to publishing mods.
        </p>
      </SkillEntry>
      <SkillEntry
          title="Other languages"
          tags={["Rust", "Python"]}>
        <ul>
          <li>
            <p>
              <strong style={{fontSize:'1.5rem'}}>Rust</strong><br/>
              I have made my own no-engine, minimal Voxel Engine using Rust and wgpu-rs.
              This was my first Rust project and demonstrates my method of learning: doing.
              I somehow managed to create this voxel engine without any prior reading on how voxel engines work. I figured it out myself.
              This voxel engine is available on GitHub, <Link href="https://github.com/isXander/VoxelEngine">here</Link>.
            </p>
            <Image src={voxelEngineImg} className={styles.fittedImage} alt="voxel engine screenshot" />
            <ProgressBar progress={0.7} />
          </li>
          <li>
            <p>
              <strong style={{fontSize:'1.5rem'}}>Python</strong><br/>
              I have basic scripting skills with Python and once made a small ML script that scanned frames of input
              videos for specific faces, outputting clips of just them. This is what I used to create
              show <Link href="https://youtube.com/playlist?list=PLv1TAiMz77SeWsRyWGW6L2DhtP0XhbFFE">character highlights on youtube</Link>.
            </p>
            <ProgressBar progress={0.5} />
          </li>
        </ul>
      </SkillEntry>
      <SkillEntry
          title="YouTube Videos"
          tags={["Editing", "Scripting", "Collaboration"]}
          experience={{ text: 'intermediate', progress: 0.6 }}>
        <p>
          I also occasionally enjoy creating videos for YouTube.
          I use Davinci Resolve as my video editor.
        </p>
        <p>
          I created a behind the scenes video in collaboration with big YouTuber ChrisDaCow about teaching Bonobos (species of Ape)
          how to play Minecraft. I was the developer for this project; you can learn more about
          it <Link href="/projects/bonobocraft">here</Link>. <Link href="https://youtu.be/rk1Lc_SC7Bg">I scripted and edited a high-quality video</Link> to
          be published along-side his. Which got extremely positive reception.
        </p>
        <YoutubeEmbed video="rk1Lc_SC7Bg" />
      </SkillEntry>
      <SkillEntry
          title="Linux Knowledge"
          tags={['Terminal', 'Servers', 'Docker']}
          experience={{ text: 'good', progress: 0.55 }}>
        <p>
          I used to daily-drive a Linux desktop system which means I have great knowledge with the Linux terminal.
          I understand the Unix file-system from my time with Linux and macOS.
          I distro-hopped from Debian-based to Fedora to Arch-based. Which means I have a basic understanding of most Linux distributions.
        </p>
        <p>
          I host my own maven server for Minecraft modding, powered by Reposilite, using Docker Compose. My Docker knowledge is minimal and not
          something to be relied on right now, but with enough time, I can get a basic application up and running. This maven server has forced me
          to learn more about networking and the importance of network security, such as setting up a strict firewall.
        </p>
      </SkillEntry>
      <SkillEntry
          title="Backend"
          tags={['Kotlin+Ktor', 'SQL', 'REST APIs']}
          experience={{ text: 'good', progress: 0.55 }}>
        <p>
          I am confident in my ability to spin up a quick REST API server using <Link href="https://ktor.io">Kotlin&apos;s Ktor framework</Link>,
          with an SQL database attached. This is something I have done many times for projects that have ended up not coming into fluition (or been put
          on the back-burner!) One such example is <Link href="https://github.com/craftstudiodevs/API">CraftStudio</Link>.
          I created a full backend service, with authentication, user accounts, an SQL database and more in a just a week. This project was never completed
          since I didn&apos;t get around to completing the frontend. This might be a project I&apos;d like to revist in the future.
        </p>
        <p>
          I have no experience in other languages or frameworks for building REST APIs, just Kotlin+Ktor, for now.
        </p>
      </SkillEntry>
      <SkillEntry 
          title="Frontend Web Dev" 
          tags={["React", "Vue", "TypeScript", "JavaScript", "Node", "HTML", "CSS"]}
          experience={{ text: 'intermediate', progress: 0.4 }}>
        <p>
          I have some experience doing frontend development. This website is an example of that.
          The site you are reading this on is made using NextJS and React, it&apos;s my first React project!
          This site used to be made in Nuxt and Vue, but I am trying to make the jump to React, since there are more
          job opportunities and it&apos;s a more stable platform.
        </p>
        <p>
          This skill is an example of how I am eager and quick to learn new technologies. With just some online documentation
          to hand, I was able to port my <Link href="https://github.com/isXander/isxander.dev/tree/dev">old website</Link>, made in Vue,
          to React, with zero prior knowledge on the subject.
        </p>
      </SkillEntry>
    </section>
  );
}

function SkillEntry({
  title, tags, children, experience
}: { 
  title: string,
  tags?: string[],
  children: React.ReactNode,
  experience?: { text: string, progress: number }
}) {
  const tagDivs = tags?.map((tag, idx) => (
    <div className={styles.tag} key={idx}>{tag}</div>
  ))

  return (
    <article className={`section-card ${styles.skillEntry}`}>
      <div>
        <h2 className={styles.infoTitle}>{title}</h2>
        {tagDivs ? <div className={styles.tagList}>{tagDivs}</div> : undefined}

        {children}
      </div>
      {experience ? <ProgressBar text={experience.text} progress={experience.progress} /> : undefined}
    </article>
  )
}

function ProgressBar({
  text, progress
}: {
  text?: string,
  progress: number,
}) {
  return (
    <div className={styles.progressContainer}>
      {text ? <div className={styles.progressText}>{text}</div> : undefined}
      <div className={styles.progressBackground}>
        <div className={styles.progressForeground} style={{width: `${progress * 100}%`}} />
      </div>
    </div>
  )
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
