import Link from "next/link"

export default function NotFound() {
    return (
        <main className="normal-page center">
            <h1 className="text-[10rem] font-black text-primary mb-auto">404</h1>
            <h2 className="text-[3rem] font-black text-foreground mt-auto mb-8">Page not found!</h2>

            <Link href="/" className="no-underline text-foreground p-4 bg-primary rounded-lg text-[2rem] hover:bg-primary-light hover:no-underline">Return home</Link>
        </main>
    )
}
