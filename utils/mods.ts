export const xanderMods: Record<string, XanderMod> = {
    "controlify": {
        title: "Controlify",
        tags: ["public", "popular"],
        sites: {
            mr: "DOUdJVEm",
            cf: "835847",
        }
    },
    "zoomify": {
        title: "Zoomify",
        tags: ["public", "popular"],
        sites: {
            mr: "w7ThoJFB",
            cf: "574741",
        },
    },
    "yet-another-config-lib": {
        title: "Yet<wbr>Another<wbr>Config<wbr>Lib",
        tags: ["public", "popular"],
        sites: {
            mr: "1eAoo2KR",
            cf: "667299",
        },
    },
    "debugify": {
        title: "Debugify",
        tags: ["public", "popular"],
        sites: {
            mr: "QwxR6Gcd",
            cf: "596224",
        },
    },
    "bonobocraft": {
        title: "Bonobocraft",
        tags: ["commission"],
        summary: "Touch controls designed for real Bonobo/Apes at ApeInitiative research centre.",
        // @ts-ignore
        body: "/mods/bonobocraft",
        backdropImage: "/mods/bonobocraft/backdrop.webp",
        icon: "/mods/bonobocraft/logo.webp",
        downloadReplacement: {
            text: "Watch Video",
            link: "https://youtu.be/UKpFoYqN9-0"
        }
    },
    "adaptive-tooltips": {
        title: "Adaptive Tooltips",
        tags: ["public"],
        sites: {
            mr: "wFv8yCxM",
            cf: "704346",
        },
    },
    "cull-less-leaves": {
        title: "Cull Less Leaves",
        tags: ["public"],
        sites: {
            mr: "iG6ZHsUV",
            cf: "619718"
        }
    },
    "main-menu-credits": {
        title: "Main Menu Credits",
        tags: ["public"],
        sites: {
            mr: "qJDfP7WN",
            cf: "618812"
        }
    },
    "evergreenhud": {
        title: "EvergreenHUD",
        tags: ["public", "archived"],
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
    downloadReplacement?: {
        text: string,
        link: string,
    }
}