<template>
    <Carousel :items-to-show="itemsToShow">
        <Slide v-for="[i, video] in videos.entries()" :key="i">
            <YoutubeEmbed class="carousel__item" :video="video"/>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>


</template>

<script setup lang="ts">
const props = defineProps({
    videos: {
        type: Array<string>,
        required: true
    },
    itemsToShow: {
        type: Number,
        default: 2.5
    }
})
</script>

<style scoped lang="scss">
.carousel__item {
    margin: 0 0.2rem;
}
</style>