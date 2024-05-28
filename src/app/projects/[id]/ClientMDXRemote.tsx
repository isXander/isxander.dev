'use client'

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

export default function ClientMDXRemote(props: MDXRemoteProps) {
    return <MDXRemote {...props} />
}