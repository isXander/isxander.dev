export default function MarkdownLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="markdown markdown-page">{children}</div>
}