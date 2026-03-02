import { projects } from "./projects"
import { ProjectCardFromProject } from "../ui/project/ProjectCard"

export default function Page() {
    return (
        <main className="normal-page">
            <h1>My Projects</h1>

            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(20rem,1fr))] gap-4">
                <ProjectList />
            </div>
        </main>
    )
}

function ProjectList() {
    return Object.entries(projects).map(([slug, project]) => (
        <ProjectCardFromProject project={project} slug={slug} key={slug} />
    ))
}
