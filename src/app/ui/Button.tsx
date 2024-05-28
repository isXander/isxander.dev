import Link from "next/link"
import styles from "./Button.module.scss"

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
                className={`${className} ${styles.container}`}
            >{children}</Link>
        )
    } else if (action) {
        return (
            <button
                onClick={action}
                className={`${className} ${styles.container}`}
            >{children}</button>
        )
    }
}