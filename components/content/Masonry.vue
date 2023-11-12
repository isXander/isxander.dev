<template>
    <div class="masonry">
        <NuxtImg src="/img2.jpg" />
    </div>
</template>

<script setup lang="ts">
const img = useImage();

// import fs from 'fs'
// const EXIF = require('exif-js')

// const glob = import.meta.glob('~/assets/content/photography/*.jpg', { eager: true })
// const images = Object.fromEntries(
//   Object.entries(glob).map(([key, value]) => [key, value.default])
// )
// console.log(images)

// function getExifSummary(image: string) {
//     const file = fs.readFileSync(image);
//     const exif = EXIF.readFromBinaryFile(file);
//     console.log(exif)
//     return exif;
// }

</script>