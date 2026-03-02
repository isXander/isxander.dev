import { notFound } from 'next/navigation'
import { posts } from '../posts'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import rehypeHighlight from 'rehype-highlight'
import { Metadata } from 'next'
import Link from 'next/link'

type PageProps = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = posts.find(p => p.slug === slug)
    if (!post) return {}
    return {
        title: `${post.title} — isXander`,
        description: post.excerpt,
    }
}

function formatDate(dateStr: string) {
    return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    })
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = posts.find(p => p.slug === slug)
    if (!post) notFound()

    const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`)
    if (!fs.existsSync(filePath)) notFound()
    const { content: source } = matter(fs.readFileSync(filePath, 'utf-8'))

    return (
        <main className="markdown-page">
            <Link href="/blog" className="text-foreground-weak hover:text-foreground text-sm">← Back to blog</Link>
            <header className="mt-4 mb-8">
                <h1 className="mb-1">{post.title}</h1>
                <time className="text-foreground-weak">{formatDate(post.date)}</time>
            </header>
            <article className="markdown">
                <MDXRemote
                    source={source}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm, remarkGemoji],
                            rehypePlugins: [rehypeHighlight],
                        }
                    }}
                />
            </article>
        </main>
    )
}
