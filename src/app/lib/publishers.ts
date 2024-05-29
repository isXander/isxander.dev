import { Fetcher } from "swr"

export const fetchModrinthProject = (slug: string) =>
    fetch(`https://api.modrinth.com/v2/project/${slug}`).then(res => res.json()).then(res => res as ModrinthMod)

export const fetchCurseforgeProject = (slug: string) =>
    fetch(`https://api.curse.tools/v1/cf/mods/${slug}`).then(res => res.json()).then(res => res.data as CurseforgeMod)

export const modrinthProjectFetcher: Fetcher<ModrinthMod, string> = (slug) => 
    fetch(`https://api.modrinth.com/v2/project/${slug}`).then(res => res.json())

export const curseforgeProjectFetcher: Fetcher<CurseforgeMod, string> = (slug) =>
    fetch(`https://api.curse.tools/v1/cf/mods/${slug}`).then(res => res.json()).then(json => json.data)

export type ModrinthMod = {
    slug: string,
    title: string,
    description: string,
    categories: string[],
    body: string,
    additional_categories: string[],
    issues_url: string,
    source_url: string,
    wiki_url: string,
    discord_url: string,
    donation_urls: {
        id: string,
        platform: string,
        url: string,
    }[],
    project_type: string,
    downloads: number,
    icon_url: string,
    color: number,
    thread_id: string,
    monetization_status: string,
    id: string,
    team: string,
    body_url: string | null,
    moderator_message: string | null,
    published: string,
    updated: string,
    approved: string,
    queued: string,
    followers: number,
    license: {
        id: string,
        name: string,
        url: string,
    },
    versions: string[],
    game_versions: string[],
    loaders: string[],
    gallery: {
        url: string,
        featured: boolean,
        title: string,
        description: string,
        created: string,
        ordering: number,
    }[]
}

export type CurseforgeMod = {
    id: number,
    gameId: number,
    name: string,
    slug: string,
    links: {
        websiteUrl: string,
        wikiUrl: string,
        issuesUrl: string,
        sourceUrl: string,
    },
    summary: string,
    status: number,
    downloadCount: number,
    isFeatured: boolean,
    primaryCategoryId: number,
    categories: [
        {
            id: number,
            gameId: number,
            name: string,
            slug: string,
            url: string,
            iconUrl: string,
            dateModified: string,
            isClass: boolean,
            classId: number,
            parentCategoryId: number,
        }
    ],
    classId: number,
    authors: [
        {
            id: number,
            name: string,
            url: string,
        }
    ],
    logo: {
        id: number,
        modId: number,
        title: string,
        description: string,
        thumbnailUrl: string,
        url: string,
    },
    screenshots: [],
    allowModDistribution: boolean,
}