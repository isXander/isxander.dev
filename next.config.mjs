import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: '@use "@/app/css/_colors.scss" as *;'
    },
    transpilePackages: ['next-mdx-remote'],
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm, remarkGemoji],
        rehypePlugins: [rehypeHighlight],
    }
})

export default withMDX(nextConfig);
