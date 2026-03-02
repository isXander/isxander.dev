import Link from 'next/link'
import { sortedPosts } from './posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Blog - isXander",
    description: "Thoughts on programming, modding, and other things.",
}

const POSTS_PER_PAGE = 10

type PageProps = {
    searchParams: Promise<{ page?: string }>
}

function formatDate(dateStr: string) {
    return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    })
}

export default async function BlogPage({ searchParams }: PageProps) {
    const { page: pageStr } = await searchParams
    const page = Math.max(1, parseInt(pageStr ?? '1', 10) || 1)
    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE)
    const clampedPage = Math.min(page, Math.max(1, totalPages))
    const pagePosts = sortedPosts.slice((clampedPage - 1) * POSTS_PER_PAGE, clampedPage * POSTS_PER_PAGE)

    return (
        <main className="normal-page">
            <h1>Blog</h1>

            <div className="flex flex-col gap-4">
                {pagePosts.map(post => (
                    <article key={post.slug} className="section-card flex flex-col gap-2">
                        <div>
                            <Link href={`/blog/${post.slug}`} className="text-foreground-strong text-xl font-semibold hover:no-underline hover:text-primary-light">
                                {post.title}
                            </Link>
                            <p className="m-0 text-foreground-weak text-sm mt-1">{formatDate(post.date)}</p>
                        </div>
                        <p className="m-0 text-foreground">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="text-primary-light self-start text-sm">
                            Read more →
                        </Link>
                    </article>
                ))}

                {sortedPosts.length === 0 && (
                    <p className="text-foreground-weak">No posts yet.</p>
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-8">
                    {clampedPage > 1 ? (
                        <Link href={`/blog?page=${clampedPage - 1}`} className="text-primary-light">← Newer</Link>
                    ) : <span />}
                    <span className="text-foreground-weak text-sm">Page {clampedPage} of {totalPages}</span>
                    {clampedPage < totalPages ? (
                        <Link href={`/blog?page=${clampedPage + 1}`} className="text-primary-light">Older →</Link>
                    ) : <span />}
                </div>
            )}
        </main>
    )
}
