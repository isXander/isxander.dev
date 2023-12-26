import { SitemapStream, streamToPromise } from 'sitemap'
import { xanderMods } from '~/utils/mods'

export default defineEventHandler(async (event) => {
    const sitemap = new SitemapStream({
        hostname: 'https://www.isxander.dev',
    })

    Object.entries(xanderMods).forEach(([slug, mod]) => {
        sitemap.write({ url: `/mods/${slug}`, changefreq: 'daily', priority: 0.8 })
    })

    sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
    sitemap.write({ url: '/mods', changefreq: 'daily', priority: 0.9 })
    sitemap.write({ url: '/about', changefreq: 'daily', priority: 0.9 })
    sitemap.write({ url: '/photography', changefreq: 'daily', priority: 0.9 })

    sitemap.end()

    return streamToPromise(sitemap)
})