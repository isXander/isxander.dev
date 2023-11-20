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