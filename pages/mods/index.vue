<template>
<main class="normal-page">
    <h1>Minecraft Mods</h1>
    
    <div class="mod-list">
        <NuxtLink class="mod" v-for="[slug, mod] in Object.entries(xanderMods)" :to="`/mods/${slug}`">
            <img class="mod-icon" :src="mod.icon ?? mrProjects[slug].icon_url" alt="">
            <div class="mod-title-container">
                <h1 class="mod-title" v-html="mod.title"></h1>
            </div>
            <p class="mod-summary">{{ mod.summary ?? mrProjects[slug].description  }}</p>
            <div class="mod-tags">
                <span v-for="tag in mod.tags" class="mod-tag">
                    <FontAwesomeIcon :icon="tagIcons[tag]"/>
                    {{ tag }}
                </span>
            </div>
        </NuxtLink>
    </div>
</main>

</template>

<script setup lang="ts">
let mrProjects: {[key: string]: ModrinthMod} = {}

for (const slug of Object.keys(xanderMods)) {
    if (xanderMods[slug].sites) {
        mrProjects[slug] = await useModrinthFetch<ModrinthMod>(`/project/${xanderMods[slug].sites!.mr}`)
    }
}
</script>

<style scoped lang="scss">
.mod-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1rem;

    .mod, .mod:hover {
        color: $foreground-color;
        text-decoration: none;
    }

    .mod {
        display: grid;
        grid-template-areas:
            "icon title title"
            "summary summary summary"
            "tags tags tags";
        grid-template-columns: 5rem 1fr 1fr;
        gap: .5rem;

        background-color: $background-color-light;
        border-radius: 1rem;
        padding: 1rem;
        transition: 0.25s;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 0 2rem rgba(black, 0.5);
            z-index: 1i;
        }

        .mod-icon {
            grid-area: icon;

            height: 5rem;
            width: auto;
            border-radius: 25%;
        }

        .mod-title-container {
            grid-area: title;
            display: flex;
            align-items: center;

            .mod-title {
                font-size: 1.5rem;
                margin: 0;
            }
        }

        .mod-summary {
            grid-area: summary;
        }

        .mod-tags {
            grid-area: tags;
            display: flex;
            gap: 1.2rem;

            .mod-tag {
                text-transform: capitalize;
            }
        }
    }
}
</style>