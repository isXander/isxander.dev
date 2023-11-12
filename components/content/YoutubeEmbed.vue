<template>
    <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + video"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
</template>

<script setup lang="ts">
const props = defineProps<{
    video: string
}>()
</script>