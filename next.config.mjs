import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['next-mdx-remote'],
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    options: {
        remarkPlugins: ['remark-gfm', 'remark-gemoji'],
        rehypePlugins: ['rehype-highlight'],
    }
})

export default withMDX(nextConfig);
