<template>
    <div :style="{ width: `${pixels}px` }"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
    pixels: number
}>()
</script>
