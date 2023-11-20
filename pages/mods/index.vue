<template>
<main>
    <h1>Minecraft Mods</h1>
    
    <div class="mod-list">
        <NuxtLink class="mod" v-for="[slug, mod] in Object.entries(xanderMods)" :to="`/mods/${slug}`">
            {{ mod.title }}
        </NuxtLink>
    </div>
</main>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
main {
    margin: 0 auto;
    max-width: 80rem;
}

.mod-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1rem;

    .mod, .mod:hover {
        color: $foreground-color;
        text-decoration: none;
    }

    .mod {
        background-color: $background-color-light;
        border-radius: 1rem;
        padding: 3rem;
    }
}
</style>