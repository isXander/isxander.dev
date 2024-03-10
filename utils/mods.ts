export const xanderMods: Record<string, XanderMod> = {
    "controlify": {
        title: "Controlify",
        tags: ["minecraft", "popular"],
        summary: "Adds advanced controller support to Minecraft: Java Edition",
        icon: "/mods/controlify/icon.webp",
        featured: false,
        sites: {
            mr: "DOUdJVEm",
            cf: "835847",
        }
    },
    "zoomify": {
        title: "Zoomify",
        tags: ["minecraft", "popular"],
        featured: false,
        sites: {
            mr: "w7ThoJFB",
            cf: "574741",
        },
    },
    "yet-another-config-lib": {
        title: "Yet<wbr>Another<wbr>Config<wbr>Lib",
        tags: ["minecraft", "popular"],
        featured: false,
        sites: {
            mr: "1eAoo2KR",
            cf: "667299",
        },
    },
    "debugify": {
        title: "Debugify",
        tags: ["minecraft", "popular"],
        featured: false,
        sites: {
            mr: "QwxR6Gcd",
            cf: "596224",
        },
    },
    "bonobocraft": {
        title: "Bonobocraft",
        tags: ["minecraft", "commission"],
        summary: "Touch controls designed for real Bonobo/Apes at ApeInitiative research centre.",
        body: "/mods/bonobocraft",
        backdropImage: "/mods/bonobocraft/backdrop.webp",
        icon: "/mods/bonobocraft/logo.webp",
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
        tags: ["minecraft"],
        featured: false,
        sites: {
            mr: "wFv8yCxM",
            cf: "704346",
        },
    },
    "cull-less-leaves": {
        title: "Cull Less Leaves",
        tags: ["minecraft"],
        featured: false,
        sites: {
            mr: "iG6ZHsUV",
            cf: "619718"
        }
    },
    "main-menu-credits": {
        title: "Main Menu Credits",
        tags: ["minecraft"],
        featured: false,
        sites: {
            mr: "qJDfP7WN",
            cf: "618812"
        }
    },
    "evergreenhud": {
        title: "EvergreenHUD",
        tags: ["minecraft", "archived"],
        featured: false,
        sites: {
            mr: "1yIQcc2b"
        }
    }
}

export const tagIcons: Record<string, string> = {
    "public": "fa-solid fa-globe",
    "popular": "fa-solid fa-fire",
    "commission": "fa-solid fa-dollar-sign",
    "archived": "fa-solid fa-box-archive",
    "minecraft": "fa-brands fa-java",
}

export interface XanderMod {
    title: string,
    tags?: string[],
    summary?: string,
    body?: string,
    backdropImage?: string,
    icon?: string,
    sites?: {
        mr: string,
        cf?: string,
    },
    featured: boolean,
    showDownload?: boolean,
    extraHeroButtons?: [{
        text: string,
        link: string,
        strong: boolean,
    }]
}