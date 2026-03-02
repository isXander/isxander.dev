import { notFound } from "next/navigation"
import { CurseforgeMod, ModrinthMod, fetchCurseforgeProject, fetchModrinthProject } from "@/app/lib/publishers"
import { Project, projects } from "../projects"
import Image from "next/image"
import Button from "@/app/ui/Button"
import { serialize } from 'next-mdx-remote/serialize'
import ClientMDXRemote from "./ClientMDXRemote"
import GallerySection from "./Gallery"
import { Metadata, ResolvingMetadata } from "next"

type PageProps = {
    params: Promise<{ id: string }>
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

export async function generateMetadata(props: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const params = await props.params;
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

export default async function ProjectPage(props: PageProps) {
    const params = await props.params;
    const local: Project | undefined = projects[params.id]

    const project: ProjectInfo = {
        local,
        modrinth: local?.sites?.mr ? await fetchModrinthProject(local.sites.mr) : undefined,
        curseforge: local?.sites?.cf ? await fetchCurseforgeProject(local.sites.cf) : undefined,
    }

    if (!local) {
        return notFound()
    }

    return (
        <main>
            <HeroSection project={project} />
            <BodySection project={project} />
            <GallerySection gallery={project.modrinth?.gallery} />
        </main>
    )
}

function HeroSection({
    project: { local, modrinth, curseforge }
}: SectionProps) {
    const backdropImage = local.backdropImage?.src ?? modrinth?.gallery?.find(image => image.featured)?.url

    return (
        <section className="py-8 min-h-[75vh] relative flex flex-col items-center justify-between">
            <div
                className="absolute left-0 right-0 bottom-0 -top-16 -z-10 bg-cover bg-center w-full h-[calc(100%+4rem)]"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(34, 34, 34, 1.0)), url(${backdropImage ?? ''})`
                }}
            />

            <div>
                <div className="flex flex-row items-center justify-center gap-4 mx-4 max-[750px]:flex-col">
                    {local.icon ? (
                        <Image
                            src={local.icon!}
                            alt="Project icon"
                            className="h-24 w-auto rounded-[25%] max-[750px]:h-16 max-[430px]:h-12"
                        />
                    ) : (
                        <img
                            src={modrinth?.icon_url}
                            alt="Project icon"
                            className="h-24 w-auto rounded-[25%] max-[750px]:h-16 max-[430px]:h-12"
                        />
                    )}

                    <h1
                        className="wrap-break-word m-0 [text-shadow:2px_2px_2px_black] max-[750px]:text-[3rem] max-[430px]:text-[2.25rem]"
                        dangerouslySetInnerHTML={{ __html: local.title }}
                    />
                </div>

                <h2 className="[text-shadow:2px_2px_2px_black] text-center max-[750px]:text-[1.5rem]">
                    {local.summary ?? modrinth?.description ?? ''}
                </h2>
            </div>

            <div className="flex flex-row items-center gap-6 text-[1.2rem] [&_a]:text-foreground">
                {((local.showDownload ?? true) && (modrinth || curseforge)) ? (
                    <Button
                        href={modrinth
                            ? `https://modrinth.com/mod/${modrinth!.slug}/versions#download`
                            : `https://www.curseforge.com/minecraft/mc-mods/${curseforge!.slug}/files`}
                        className="text-[1.5rem] text-white! bg-primary px-4 py-2 rounded-2xl border-2 border-primary transition-all duration-[250ms] hover:no-underline hover:border-foreground">
                        Download
                    </Button>
                ) : undefined}

                {local.extraHeroButtons?.map((extraButton, idx) => (
                    <Button
                        href={extraButton.link}
                        key={idx}
                        className={extraButton.strong ? "text-[1.5rem] text-white! bg-primary px-4 py-2 rounded-2xl border-2 border-primary transition-all duration-[250ms] hover:no-underline hover:border-foreground" : ''}>
                        {extraButton.text}
                    </Button>
                ))}

                {modrinth || curseforge ? (
                    <h4 className="my-2">
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
        <section className="markdown-page markdown">
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
