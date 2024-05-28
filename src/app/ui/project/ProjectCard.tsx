import Link from "next/link"
import styles from "./ProjectCard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useModrinthProject } from "@/app/lib/publishers";
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
} : ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`} className={`${styles.card} ${featured ? styles.featured : ''}`}>
            {icon ? (
                <Image
                    src={icon!}
                    alt="Project icon"
                    className={styles.icon}
                />
            ) : (
                <img
                    src={iconUrl ?? ''}
                    alt="project icon"
                    className={styles.icon}
                />
            )}
            <div className={styles.titleContainer}>
                <h1 className={styles.title} dangerouslySetInnerHTML={{__html: title}}></h1>
            </div>
            <p className={styles.summary}>{summary ?? ''}</p>
            <div className={styles.tags}>
                <Tags tags={tags} />
            </div>
        </Link>
    )
}

function Tags({tags} : {tags: Array<ProjectTag>}) {
    return tags.map(tag => (
        <span className={styles.tag}>
            <FontAwesomeIcon icon={tag.icon} />
            { tag.name }
        </span>
    ))
}

export async function ProjectCardFromProject({
    project, slug
} : { project: Project, slug: string }) {
    const modrinth = project.sites?.mr ? await useModrinthProject(project.sites.mr) : undefined
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