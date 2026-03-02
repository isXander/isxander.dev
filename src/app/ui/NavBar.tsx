import Link from 'next/link'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { fira_code } from '../fonts'

export default function NavBar() {
    return (
        <header className="sticky top-0 w-full backdrop-blur bg-background/50 z-10">
            <nav className="flex flex-row justify-between items-center mx-auto max-w-7xl px-4 py-5 max-[530px]:flex-col max-[530px]:items-center max-[530px]:gap-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className={`text-primary-light text-[1.3rem] font-medium transition-[transform,color] duration-300 hover:text-primary hover:no-underline hover:scale-110 ${fira_code.className}`}>isXander</Link>
                </div>
                <div className={`flex items-center gap-6 max-[530px]:flex-wrap max-[530px]:justify-center ${fira_code.className}`}>
                    <NavLinks />
                </div>
            </nav>
        </header>
    )
}

function NavLinks() {
    return (
        <>
            <Link href="/projects" className="text-foreground hover:text-foreground-strong hover:no-underline">Projects</Link>
            <Link href="/blog" className="text-foreground hover:text-foreground-strong hover:no-underline">Blog</Link>
            <Link href="/photography" className="text-foreground hover:text-foreground-strong hover:no-underline">Photography</Link>
            <Link href="/about" className="text-foreground hover:text-foreground-strong hover:no-underline">About Me</Link>
            <Link href="https://github.com/isXander/" className="text-foreground hover:text-foreground-strong hover:no-underline"><SiGithub size={24} color="currentColor" /></Link>
        </>
    )
}
