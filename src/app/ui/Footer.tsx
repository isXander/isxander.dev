'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="max-w-7xl mx-auto px-4 py-12 text-center">
            This website is <Link href="https://github.com/isXander/isxander.dev">open source</Link>! • Copyright © isXander {currentYear}
        </footer>
    )
}
