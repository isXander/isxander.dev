import { notFound } from "next/navigation"
import styles from "./page.module.scss"
import { CurseforgeMod, ModrinthMod, useCurseforgeProject, useModrinthProject } from "@/app/lib/publishers"
import { Project, projects } from "../projects"
import Image from "next/image"
import Button from "@/app/ui/Button"
import { serialize } from 'next-mdx-remote/serialize'
import ClientMDXRemote from "./ClientMDXRemote"
import GallerySection from "./Gallery"
import { Metadata, ResolvingMetadata } from "next"

type PageProps = {
    params: { id: string }
}

export type ProjectInfo = {
    local: Project,
    modrinth?: ModrinthMod,
    curseforge?: CurseforgeMod,
}

export type SectionProps = {
    project: ProjectInfo
}

export async function generateStaticParams() {
    return Object.keys(projects).map(slug => ({
        id: slug
    }))
}

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const local = projects[params.id]

    const title = `${local.title} - Minecraft Mod`
    const description = `${local.summary} - Download the Minecraft Mod ${local.title} by isXander`
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: local.icon?.src
        },
        robots: 'all'
    }
}

export default async function ProjectPage({
    params
}: PageProps) {
    const local = projects[params.id]
    if (!local) {
        return notFound()
    }

    const project: ProjectInfo = {
        local,
        modrinth: local.sites?.mr ? await useModrinthProject(local.sites.mr) : undefined,
        curseforge: local.sites?.cf ? await useCurseforgeProject(local.sites.cf) : undefined,
    }

    return (
        <main>
            <HeroSection project={project} />
            <BodySection project={project} />
            <GallerySection project={project} />
        </main>
    )
}

function HeroSection({
    project: { local, modrinth, curseforge }
}: SectionProps) {
    const backdropImage = local.backdropImage?.src ?? modrinth?.gallery?.find(image => image.featured)?.url

    return (
        <section className={styles.heroSection}>
            <div
                className={styles.heroBackground}
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(34, 34, 34, 1.0)), url(${backdropImage ?? ''})`
                }}
            />

            <div>
                <div className={styles.heroTitle}>
                    {local.icon ? (
                        <Image
                            src={local.icon!}
                            alt="Project icon"
                            className={styles.heroTitleIcon}
                        />
                    ) : (
                        <img
                            src={modrinth?.icon_url}
                            alt="Project icon"
                            className={styles.heroTitleIcon}
                        />
                    )}

                    <h1 className={styles.heroTitleText} dangerouslySetInnerHTML={{ __html: local.title }} />
                </div>

                <h2 className={styles.heroTitleDesc}>{local.summary ?? modrinth?.description ?? ''}</h2>
            </div>

            <div className={styles.heroDownload}>
                {((local.showDownload ?? true) && (modrinth || curseforge)) ? (
                    <Button
                        href={modrinth 
                            ? `https://modrinth.com/mod/${modrinth!.slug}/versions` 
                            : `https://www.curseforge.com/minecraft/mc-mods/${curseforge!.slug}/files`} 
                        className={styles.downloadButton}>
                            Download
                    </Button>
                ) : undefined}

                {local.extraHeroButtons?.map((extraButton, idx) => (
                    <Button href={extraButton.link} key={idx} className={extraButton.strong ? styles.downloadButton : ''}>
                        {extraButton.text}
                    </Button>
                ))}

                {modrinth || curseforge ? (
                    <h4 className={styles.downloadCount}>
                        { formatNumberMetricUnits((modrinth?.downloads ?? 0) + (curseforge?.downloadCount ?? 0)) } downloads
                    </h4>
                ) : undefined}
            </div>
        </section>
    )
}

async function BodySection({
    project: { local, modrinth, curseforge }
}: SectionProps) {

    let markdown = local.body
    if (!markdown) {
        const mdxSource = await serialize(modrinth!.body)
        markdown = <ClientMDXRemote {...mdxSource} />
    }

    return (
        <section className={`markdown-page markdown ${styles.body}`}>
            {markdown}
        </section>
    )
}

function formatNumberMetricUnits(n: number) {
    const ranges = [
        { divider: 1e18, suffix: 'E' },
        { divider: 1e15, suffix: 'P' },
        { divider: 1e12, suffix: 'T' },
        { divider: 1e9, suffix: 'B' },
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'k' }
    ];

    for (let i = 0; i < ranges.length; i++) {
        if (n >= ranges[i].divider) {
            const decimal = n / ranges[i].divider;
            const suffix = ranges[i].suffix;
            return decimal.toFixed(2) + suffix;
        }
    }
    return n.toString();
}