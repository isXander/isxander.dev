import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
    slug: string;
    title: string;
    date: string; // ISO date YYYY-MM-DD
    excerpt: string;
};

const contentDir = path.join(process.cwd(), 'src', 'content', 'blog')

export const posts: BlogPost[] = fs.readdirSync(contentDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
        const slug = file.replace(/\.mdx$/, '')
        const source = fs.readFileSync(path.join(contentDir, file), 'utf-8')
        const { data } = matter(source)
        return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
        }
    })

// Most recent first
export const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)
