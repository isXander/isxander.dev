export interface ModrinthMod {
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