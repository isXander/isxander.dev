import Avatar from "./ui/Avatar";
import { SiGithub, SiDiscord, SiYoutube, SiInstagram } from "@icons-pack/react-simple-icons";
import { DollarSign } from "lucide-react";
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
    <section className="mb-20 items-center flex flex-col justify-center">
      <div className="flex flex-row items-center gap-8 justify-center max-[660px]:flex-col-reverse max-[660px]:gap-4">
        <h1 className={`${fira_code.className} m-0 text-center text-[5rem] text-white max-[660px]:text-[3rem]`}>I'm Xander</h1>
        <Avatar circle src="/avatar.webp" alt="avatar" className="shadow-[0_10px_rgba(0,0,0,0.2)]" />
      </div>
      <div className="items-center flex flex-row gap-4">
        <Link href="https://github.com/isXander" className="text-foreground hover:text-foreground-strong">
          <SiGithub size={32} color="currentColor" />
        </Link>
        <Link href="https://isxander.dev/discord" className="text-foreground hover:text-foreground-strong">
          <SiDiscord size={32} color="currentColor" />
        </Link>
        <Link href="https://youtube.com/@isXanderDev" className="text-foreground hover:text-foreground-strong">
          <SiYoutube size={32} color="currentColor" />
        </Link>
        <Link href="https://instagram.com/isxander.pics" className="text-foreground hover:text-foreground-strong">
          <SiInstagram size={32} color="currentColor" />
        </Link>
        <Link href="https://ko-fi.com/isxander" className="text-foreground hover:text-foreground-strong">
          <DollarSign size={32} />
        </Link>
      </div>
      <q className="mt-8 text-center text-[1.5rem] text-foreground-weak">it works on my machine...</q>
      <Link
        href="mailto:business@isxander.dev"
        className="rounded-2xl mt-8 p-2 text-[1.5rem] border-[3.2px] border-solid border-primary-light"
      >
        Contact
      </Link>
    </section>
  );
}

function InfoSection() {
  return (
    <section className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] max-[800px]:grid-cols-1">
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
          This has forced me to learn the ways of maintaining a library, providing{' '}
          <Link href="https://docs.isxander.dev/yet-another-config-lib">documentation</Link>, maintaining API compatibility,
          adhearing to semver and publishing maven artifacts. Many other mod developers depend on this mod, and love using it!
        </p>
        <p>
          I have also been commissioned by multiple YouTubers to create mods for their videos:
          namely <Link href="https://youtu.be/UKpFoYqN9-0">ChrisDaCow</Link> and <Link href="https://youtu.be/_IYVOuLYLUs">Socksfor1</Link>.
          This valueable experience has taught me the ways of working for a client&apos;s needs and deadlines, rather than my own.
        </p>
        <p>
          This hobby has helped fund my life, amounting at (as of June 2024) 60 million downloads.
          It&apos;s something I&apos;m extremely proud of and will continue to work on for the forseeable future.
          You can view my accounts on{' '}
          <Link href="https://www.curseforge.com/members/xanderisdev/projects">Curseforge</Link> and{' '}
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
            <Image src={voxelEngineImg} className="h-auto w-full shadow-[0_0_5px_rgba(0,0,0,0.2)]" alt="voxel engine screenshot" />
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
    <div className="uppercase font-bold" key={idx}>{tag}</div>
  ))

  return (
    <article className="section-card flex flex-col justify-between">
      <div>
        <h2 className="m-0 text-white text-[2rem] max-[800px]:text-[1.5rem]">{title}</h2>
        {tagDivs ? <div className="[row-gap:0.3rem] gap-x-6 flex flex-row flex-wrap">{tagDivs}</div> : undefined}

        {children}
      </div>
      {experience ? <ProgressBar text={experience.text} progress={experience.progress} /> : undefined}
    </article>
  );
}

function ProgressBar({
  text, progress
}: {
  text?: string,
  progress: number,
}) {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {text ? <div className="text-right text-[1.5rem]">{text}</div> : undefined}
      <div className="rounded-2xl h-4 relative w-full bg-background">
        <div className="transition-[width] duration-1000 rounded-2xl h-full bg-primary" style={{width: `${progress * 100}%`}} />
      </div>
    </div>
  );
}
