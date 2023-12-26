<template>
<main class="normal-page">
    <h1>Minecraft Mods</h1>
    
    <div class="project-list">
        <ProjectCard
          v-for="[slug, mod] in Object.entries(xanderMods)"
          :slug="slug"
          :title="mod.title"
          :summary="mod.summary ?? mrProjects[slug].description"
          :icon="mod.icon ?? mrProjects[slug]?.icon_url ?? ``"
          :tags="mod.tags"
          :featured="mod.featured"/>
    </div>
</main>

</template>

<script setup lang="ts">
const mrProjects = await useModrinthProjects()

</script>

<style scoped lang="scss">
.project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1rem;
}

</style>