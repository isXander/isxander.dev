<template>
<div class="container">
    <h1 class="title-h1 above">{{ project.title }}</h1>
    <h3 class="above">{{ project.description }}</h3>
    
</div>

</template>

<script setup lang="ts">
const route = useRoute()
const modId = route.params.id

const project = await $fetch<ModrinthMod>(`https://api.modrinth.com/v2/project/${modId}`)
const featuredGallery = project.gallery.find(image => image.featured === true)

const bodyBGImage = `url(${featuredGallery.url})`
</script>

<style scoped lang="scss">
body {
    background-image: $bodyBGImage;
}

.container {
    text-align: center;
}

.above {
    z-index: 1;
    isolation: isolate;
    left: 0;
    width: 100%;
}

.title-h1 {
    position: absolute;
    padding: 2rem 0;
}

#bg-gallery {
    width: 100%;
    height: auto;
    filter: blur(5px) brightness(0.4);
    mask-image: linear-gradient(to bottom, rgba($background-color, 0) 0%, rgba($background-color, 1) 3%, rgba($background-color, 0) 100%);
}
</style>