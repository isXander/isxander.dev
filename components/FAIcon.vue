<template>
    <i :class="`fa-icon ${icon}`"></i>
</template>

<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        required: true
    },
})
</script>