import { Montserrat, Fira_Code } from "next/font/google";

export const montserrat = Montserrat({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    subsets: ["latin"],
});

export const fira_code = Fira_Code({
    weight: ['400', '700'],
    display: 'swap',
    subsets: ["latin"],
});
