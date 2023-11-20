export const xanderMods: XanderMods = {
    "controlify": {
        title: "Controlify",
        tags: ["public", "popular"],
        sites: {
            mr: "controlify",
            cf: "835847",
        }
    },
    "zoomify": {
        title: "Zoomify",
        tags: ["public", "popular"],
        sites: {
            mr: "zoomify",
            cf: "574741",
        },
    },
    "yet-another-config-lib": {
        title: "YetAnotherConfigLib",
        tags: ["public", "popular"],
        sites: {
            mr: "yacl",
            cf: "667299",
        },
    },
    "debugify": {
        title: "Debugify",
        tags: ["public", "popular"],
        sites: {
            mr: "debugify",
            cf: "596224",
        },
    },
    "bonobocraft": {
        title: "Bonobocraft",
        tags: ["commission"],
        summary: "Touch controls designed for real Bonobo/Apes at ApeInitiative research centre.",
        // @ts-ignore
        body: await import("~/assets/res/mods/bonobocraft/body.md?raw").then((res) => res.default),
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
            mr: "adaptive-tooltips",
            cf: "704346",
        },
    },
    "cull-less-leaves": {
        title: "Cull Less Leaves",
        tags: ["public"],
        sites: {
            mr: "cull-less-leaves",
            cf: "619718"
        }
    },
    "main-menu-credits": {
        title: "Main Menu Credits",
        tags: ["public"],
        sites: {
            mr: "main-menu-credits",
            cf: "618812"
        }
    }
}

export interface XanderMods {
    [key: string]: XanderMod,
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
        cf: string,
    },
    downloadReplacement?: {
        text: string,
        link: string,
    }
}