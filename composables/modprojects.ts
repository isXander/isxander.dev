export const useModrinthProjects = async () => {
    let mrProjects: {[key: string]: ModrinthMod} = {}

    const slugs = Object.values(xanderMods)
        .filter(mod => mod.sites?.mr)
        .map(mod => `\"${mod.sites!.mr}\"`)
        .join(",")
    const bulkProjects = await useModrinthFetch<ModrinthMod[]>(`/projects?ids=[${slugs}]`)
    
    // put xanderMod mod key into mrProjects with the value of the project
    bulkProjects.forEach(project => {
        mrProjects[Object.keys(xanderMods).find(key => xanderMods[key].sites?.mr === project.id)!] = project
    })

    return mrProjects
}
