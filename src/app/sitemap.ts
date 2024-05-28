import { MetadataRoute } from "next";
import { projects } from "./projects/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const projectPages: MetadataRoute.Sitemap = Object.entries(projects).map(([slug, project]) => ({
        url: `https://www.isxander.dev/projects/${slug}/`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.5
    }))

    return [
        {
            url: 'https://www.isxander.dev/',
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        },
        {
            url: 'https://www.isxander.dev/projects',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        },
        {
            url: 'https://www.isxander.dev/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://www.isxander.dev/photography',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7
        },
        ...projectPages
    ]
}