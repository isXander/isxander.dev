<template>
<div class="photo-grid">
    <div
        v-for="(image, idx) in images"
        @click="openLightbox(idx)"
        class="photo-entry"
        :style="{
            backgroundImage: `url(${img(image, { height: 400, quality: 80 })})`
        }"
    >
        
    </div>
</div>

<FsLightbox
    :toggler="lightboxOpen"
    :sources="images"
    :slide="lightboxSlide"
    :exitFullscreenOnClose="true"
/>
</template>

<script setup lang="ts">
// @ts-ignore
import FsLightbox from "fslightbox-vue/v3";

const img = useImage();

const lightboxOpen = ref(false)
const lightboxSlide = ref(0)

function openLightbox(index: number) {
    lightboxOpen.value = !lightboxOpen.value
    lightboxSlide.value = index + 1
}

const glob = import.meta.glob("~/public/photography/*.jpg", { eager: true })
const images = Object.keys(glob)
    .map((key) => "/" + key.replace(/^\//, '').split("/").slice(1).join("/"))
</script>

<style scoped lang="scss">
.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-auto-rows: 20rem;
    gap: 1rem;

    .photo-entry {
        width: 100%;
        height: 100%;

        background-size: cover;
        background-position: center;

        cursor: pointer;

        transition: 0.25s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }
}
</style>