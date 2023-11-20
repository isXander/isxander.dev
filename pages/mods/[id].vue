<template>
<div class="container">
    <section 
      id="header-section" 
      :style="{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(34, 34, 34, 1.0)), url(${backdropImage ?? ''})` 
      }">
        <div>
            <div id="title">
                <img :src="mod.icon ?? mrProject.icon_url" alt="project icon" class="title-icon">
                <h1 class="title-h1">{{ mod.title }}</h1>
            </div>

            <h2 class="title-desc">{{ mod.summary ?? mrProject.description }}</h2>
        </div>

        <div id="download-section">
            <Button 
              v-if="mod.downloadReplacement"
              class="download-btn" 
              :to="mod.downloadReplacement.link">
                {{ mod.downloadReplacement.text }}
            </Button>
            <Button 
              v-else-if="mrProject"
              class="download-btn" 
              :to="`https://modrinth.com/mod/${mod.sites!.mr}/versions`">
                Download
            </Button>
            <Button 
              v-else-if="cfProject"
              class="download-btn" 
              :to="`https://www.curseforge.com/minecraft/mc-mods/${cfProject.slug}/files`">
                Download
            </Button>
            
            <h4 v-if="mrProject || cfProject" class="download-count">{{ formatNumberMetricUnits((mrProject.downloads ?? 0) + (cfProject.downloadCount ?? 0)) }} downloads</h4>
        </div>
    </section>

    <section class="body">
        <Markdown v-if="mod.body" :content="mod.body" class="markdown markdown-page"/>
        <Markdown v-else-if="mrProject" :content="mrProject.body" class="markdown markdown-page"/>
        <div v-else class="markdown markdown-page">
            <h1>No body found.</h1>
        </div>
    </section>
</div>

</template>

<script setup lang="ts">
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

const mrProject = mod.sites ? await $fetch<ModrinthMod>(`https://api.modrinth.com/v2/project/${mod.sites.mr}`) : null
const cfProject = mod.sites ? (await $fetch<{data: CurseforgeMod}>(`https://api.curse.tools/v1/cf/mods/${mod.sites.cf}`)).data : null

const backdropImage = mod.backdropImage ?? mrProject.gallery.find(image => image.featured === true)?.url

</script>

<style scoped lang="scss">
#header-section {
    background-size: cover;
    padding: 2rem 0;
    min-height: 75vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        font-size: 1.2rem;

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
}



</style>