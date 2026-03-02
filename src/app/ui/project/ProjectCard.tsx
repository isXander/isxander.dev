import Link from "next/link"
import "./ProjectCard.featured.css"
import { fetchModrinthProject } from "@/app/lib/publishers";
import { Project, ProjectTag } from "@/app/projects/projects";
import Image, { StaticImageData } from "next/image";

export type ProjectCardProps = {
    slug: string,
    title: string,
    summary: string | undefined,
    icon?: StaticImageData,
    iconUrl?: string,
    tags: Array<ProjectTag>,
    featured: boolean,
}

export default function ProjectCard({
    slug, title, summary, icon, iconUrl, tags = [], featured = false
}: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${slug}`}
            className={`grid gap-2 bg-background-light rounded-2xl p-4 transition-all duration-[250ms] hover:scale-105 hover:shadow-[0_0_2rem_rgba(0,0,0,0.5)] hover:z-10 text-foreground no-underline hover:text-foreground hover:no-underline [grid-template-areas:'icon_title_title'_'summary_summary_summary'_'tags_tags_tags'] [grid-template-columns:5rem_1fr_1fr] ${featured ? 'relative !p-6 featured-card' : ''}`}
        >
            {icon ? (
                <Image
                    src={icon!}
                    alt="Project icon"
                    className="[grid-area:icon] h-20 w-auto rounded-[25%]"
                />
            ) : (
                <img
                    src={iconUrl ?? ''}
                    alt="project icon"
                    className="[grid-area:icon] h-20 w-auto rounded-[25%]"
                />
            )}
            <div className="[grid-area:title] flex items-center">
                <h1 className="text-2xl m-0" dangerouslySetInnerHTML={{__html: title}}></h1>
            </div>
            <p className="[grid-area:summary]">{summary ?? ''}</p>
            <div className="[grid-area:tags] flex gap-[1.2rem]">
                <Tags tags={tags} />
            </div>
        </Link>
    )
}

function Tags({tags}: {tags: Array<ProjectTag>}) {
    return tags.map((tag, idx) => {
        const Icon = tag.icon
        return (
            <span className="capitalize flex gap-[3px] items-center" key={idx}>
                <Icon size={14} color="currentColor" />
                { tag.name }
            </span>
        )
    })
}

export async function ProjectCardFromProject({
    project, slug
}: { project: Project, slug: string }) {
    const modrinth = project.sites?.mr ? await fetchModrinthProject(project.sites.mr) : undefined

    return (
        <ProjectCard
            slug={slug}
            title={project.title}
            summary={project.summary ?? modrinth?.description ?? "Error fetching description"}
            icon={project.icon}
            iconUrl={modrinth?.icon_url ?? "unknown icon here"}
            tags={project.tags}
            featured={project.featured}
        />
    )
}
