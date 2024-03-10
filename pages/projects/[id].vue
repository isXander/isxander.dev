<template>
<div class="container">
    <section 
      id="header-section">
        <div 
          id="header-background"
          :style="{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(34, 34, 34, 1.0)), url(${backdropImage ?? ''})` 
          }"></div>
        <div>
            <div id="title">
                <img :src="mod.icon ?? mrProject.icon_url" alt="project icon" class="title-icon">
                <h1 style="text-align: center;;" class="title-h1" v-html="mod.title"></h1>
            </div>

            <h2 class="title-desc">{{ mod.summary ?? mrProject.description }}</h2>
        </div>

        <div id="download-section">
            <Button 
              v-if="mrProject && (mod.showDownload ?? true)"
              class="download-btn" 
              :to="`https://modrinth.com/mod/${mod.sites!.mr}/versions`">
                Download
            </Button>
            <Button 
              v-else-if="cfProject && (mod.showDownload ?? true)"
              class="download-btn" 
              :to="`https://www.curseforge.com/minecraft/mc-mods/${cfProject.slug}/files`">
                Download
            </Button>

            <template v-for="extraButton in mod.extraHeroButtons">
                <Button
                  :class="extraButton.strong ? 'download-btn' : ''" 
                  :to="extraButton.link">
                    {{ extraButton.text }}
                </Button>
            </template>
            
            <h4 v-if="mrProject || cfProject" class="download-count">{{ formatNumberMetricUnits((mrProject?.downloads ?? 0) + (cfProject?.downloadCount ?? 0)) }} downloads</h4>
        </div>
    </section>

    <div class="markdown-page">
        <section class="body">
            <ContentDoc v-if="mod.body" :path="mod.body" class="markdown"/>
            <Markdown v-else-if="mrProject" :content="mrProject.body" class="markdown"/>
            <div v-else class="markdown">
                <h1>No body found.</h1>
            </div>
        </section>

        <template v-if="mrProject?.gallery?.length > 0">
            <h1>Gallery</h1>
            <section id="gallery">
                <article v-for="(image, idx) in mrProject?.gallery ?? []" class="gallery-entry" @click="openLightbox(idx)">
                    <img :src="image.url" class="gallery-image" loading="lazy">
                    <div class="gallery-meta">
                        <h4>{{ image.title }}</h4>
                        <p>{{ image.description }}</p>
                    </div>
                </article>
            </section>
        </template>
    </div>
</div>

<FsLightbox
    v-if="mrProject?.gallery?.length > 0"
    :toggler="lightboxToggler"
    :sources="mrProject?.gallery.map(image => image.url) ?? []"
    :slide="lightboxSlide"
    :exitFullscreenOnClose="true"/>

</template>

<script setup lang="ts">
// @ts-ignore
import FsLightbox from "fslightbox-vue/v3";

definePageMeta({
    middleware: [
        function(to, from) {
            if ((to.params.id as string) in xanderMods === false) {
                return abortNavigation({
                    statusCode: 404,
                    message: "Mod not found"
                })
            }
        }
    ]
})

const route = useRoute()
const modId = route.params.id as string

const mod = xanderMods[modId]

const mrProject = mod.sites?.mr ? await $fetch<ModrinthMod>(`https://api.modrinth.com/v2/project/${mod.sites.mr}`) : null
const cfProject = mod.sites?.cf ? (await $fetch<{data: CurseforgeMod}>(`https://api.curse.tools/v1/cf/mods/${mod.sites.cf}`)).data : null

const backdropImage = mod.backdropImage ?? mrProject.gallery.find(image => image.featured === true)?.url

const cleanTitle = mod.title.replaceAll('<wbr>', '')
useSeoMeta({
    title: `${cleanTitle} - isXander Mod`,
    ogTitle: `${cleanTitle} - isXander Mod`,
    ogDescription: (mod.summary ?? mrProject?.description ?? "No description found.") + ` - isXander's Minecraft mods`,
    description: (mod.summary ?? mrProject?.description ?? "No description found.") + ` - isXander's Minecraft mods`,
    ogImage: mod.icon ?? mrProject?.icon_url ?? "https://isxander.dev/icon.png",

})

const lightboxToggler = ref(false)
const lightboxSlide = ref(0)

function openLightbox(index: number) {
    lightboxToggler.value = !lightboxToggler.value
    lightboxSlide.value = index + 1
}
</script>

<style scoped lang="scss">
#header-section {
    padding: 2rem 0;
    min-height: 75vh;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    #header-background {
        position: absolute;
        inset: 0;
        top: -4rem;
        z-index: -1;
        background-size: cover;
        background-position-x: center;
        width: 100%;
        height: calc(100% + 4rem);
    }

    #title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 0 1rem;

        .title-h1 {
            word-wrap: break-word;
            margin: 0;
            text-shadow: 2px 2px 2px black;
        }

        .title-icon {
            height: 6rem;
            width: auto;
            border-radius: 25%;
        }
    }

    .title-desc {
        text-shadow: 2px 2px 2px black;
        text-align: center;
    }

    #download-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5rem;
        font-size: 1.2rem;

        a {
            color: $foreground-color;
        }

        .download-btn {
            font-size: 1.5rem;
            color: white;
            background-color: $primary-color;
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            border: 2px solid $primary-color;
            transition: 0.25s;

            &:hover {
                text-decoration: none;
                border-color: $foreground-color;
            }
        }

        .download-count {
            margin: 0.5rem 0;
        }
    }

    @media screen and (max-width: 750px) {
        .title-h1 {
            font-size: 3rem;
        }

        .title-desc {
            font-size: 1.5rem;
        }

        #title {
            flex-direction: column;

            .title-icon {
                height: 4rem;
            }
        }
    }

    @media screen and (max-width: 430px) {
        .title-h1 {
            font-size: 2.25rem;
        }

        .title-desc {
            font-size: 1.5rem;
        }

        #title .title-icon {
            height: 3rem;
        }
    }
}

#gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1rem;
    place-items: center;

    .gallery-entry {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        background-color: $background-color-light;
        border-radius: 1rem;

        width: 100%;
        height: 100%;

        cursor: pointer;
        transition: 0.25s;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 0 2rem rgba(black, 0.5);
            z-index: 1i;
        }

        .gallery-image {
            width: 100%;
            height: auto;
            border-radius: 1rem 1rem 0 0;
        }

        .gallery-meta {
            text-align: center;
            padding: 0.5rem 1rem;
            margin: auto 0;

            h4 {
                margin: 0.5rem 0;
            }

            p {
                margin: 0.8rem 0;
            }
        }
    }
}
</style>