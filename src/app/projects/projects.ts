import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faJava } from "@fortawesome/free-brands-svg-icons"
import { faBoxArchive, faDollarSign, faFire, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { StaticImageData } from "next/image"
import controlifyIcon from "./controlify/icon.webp"
import bonobocraftIcon from "./bonobocraft/logo.webp"
import bonobocraftBody from "./bonobocraft/body.mdx"
import bonobocraftBackdrop from "./bonobocraft/backdrop.webp"

export const tagPublic: ProjectTag = {
    name: "Public",
    icon: faGlobe,
}
export const tagPopular: ProjectTag = {
    name: "Popular",
    icon: faFire,
}
export const tagCommission: ProjectTag = {
    name: "Commission",
    icon: faDollarSign,
}
export const tagArchived: ProjectTag = {
    name: "Archived",
    icon: faBoxArchive,
}
export const tagMinecraft: ProjectTag = {
    name: "Minecraft",
    icon: faJava,
}

export const projects: Record<string, Project> = {
    "controlify": {
        title: "Controlify",
        tags: [tagMinecraft, tagPopular],
        summary: "Adds advanced controller support to Minecraft: Java Edition",
        icon: controlifyIcon,
        featured: false,
        sites: {
            mr: "DOUdJVEm",
            cf: "835847",
        }
    },
    "zoomify": {
        title: "Zoomify",
        tags: [tagMinecraft, tagPopular],
        featured: false,
        sites: {
            mr: "w7ThoJFB",
            cf: "574741",
        },
    },
    "yet-another-config-lib": {
        title: "Yet<wbr>Another<wbr>Config<wbr>Lib",
        tags: [tagMinecraft, tagPopular],
        featured: false,
        sites: {
            mr: "1eAoo2KR",
            cf: "667299",
        },
    },
    "debugify": {
        title: "Debugify",
        tags: [tagMinecraft, tagPopular],
        featured: false,
        sites: {
            mr: "QwxR6Gcd",
            cf: "596224",
        },
    },
    "bonobocraft": {
        title: "Bonobocraft",
        tags: [tagMinecraft, tagCommission],
        summary: "Touch controls designed for real Bonobo/Apes at ApeInitiative research centre.",
        body: bonobocraftBody({}),
        backdropImage: bonobocraftBackdrop,
        icon: bonobocraftIcon,
        featured: true,
        extraHeroButtons: [
            {
                text: "Watch Video",
                link: "https://youtu.be/rk1Lc_SC7Bg",
                strong: true,
            },
            {
                text: "Download Modpack",
                link: "https://modrinth.com/modpack/bonobocraft",
                strong: false,
            }
        ]
    },
    "adaptive-tooltips": {
        title: "Adaptive Tooltips",
        tags: [tagMinecraft],
        featured: false,
        sites: {
            mr: "wFv8yCxM",
            cf: "704346",
        },
    },
    "cull-less-leaves": {
        title: "Cull Less Leaves",
        tags: [tagMinecraft],
        featured: false,
        sites: {
            mr: "iG6ZHsUV",
            cf: "619718"
        }
    },
    "main-menu-credits": {
        title: "Main Menu Credits",
        tags: [tagMinecraft],
        featured: false,
        sites: {
            mr: "qJDfP7WN",
            cf: "618812"
        }
    },
    "evergreenhud": {
        title: "EvergreenHUD",
        tags: [tagMinecraft, tagArchived],
        featured: false,
        sites: {
            mr: "1yIQcc2b"
        }
    }
}


export type Project = {
    title: string,
    tags: ProjectTag[],
    summary?: string,
    body?: JSX.Element,
    backdropImage?: StaticImageData,
    icon?: StaticImageData,
    featured: boolean,
    sites?: {
        mr: string,
        cf?: string,
    },
    showDownload?: boolean,
    extraHeroButtons?: {
        text: string,
        link: string,
        strong: boolean,
    }[]
}

export type ProjectTag = {
    name: string,
    icon: IconProp,
}