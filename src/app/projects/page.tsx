import { projects } from "./projects"
import { ProjectCardFromProject } from "../ui/project/ProjectCard"
import styles from "./page.module.scss"

export default function Page() {
    return (
        <main className="normal-page">
            <h1>My Projects</h1>

            <div className={styles.projectList}>
                <ProjectList />
            </div>
        </main>
    )
}

function ProjectList() {
    return Object.entries(projects).map(([slug, project]) => (
        <ProjectCardFromProject project={project} slug={slug} />
    ))
}