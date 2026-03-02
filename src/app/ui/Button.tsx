import Link from "next/link"

export type ButtonProps = {
    href?: string,
    action?: () => void,
    children: React.ReactNode,
    className?: string,
}

export default function Button({
    href, action, children, className,
}: ButtonProps) {
    if (href) {
        return (
            <Link
                href={href}
                className={`flex justify-center items-center flex-row ${className}`}
            >{children}</Link>
        )
    } else if (action) {
        return (
            <button
                onClick={action}
                className={`flex justify-center items-center flex-row ${className}`}
            >{children}</button>
        )
    }
}
