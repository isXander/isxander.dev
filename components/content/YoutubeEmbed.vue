<template>
    <div class="youtube-container">
        <iframe :src="'https://www.youtube.com/embed/' + video"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    video: string
}>()
</script>

<style scoped lang="scss">
.youtube-container {
    position: relative;
    width: 100%;
    padding-bottom: calc((9/16)*100%);
    height: 0;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>