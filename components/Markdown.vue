<template>
    <div class="markdown" v-html="rendered_markdown"></div>
</template>

<script setup lang="ts">
import md from 'markdown-it'
import anchorPlugin from 'markdown-it-anchor'

const props = defineProps<{
    content: string
}>()

const rendered_markdown = md({
    linkify: true,
})
    .use(anchorPlugin)
    .render(props.content)
</script>