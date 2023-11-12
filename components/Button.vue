<template>
    <NuxtLink 
      v-if="props.to"
      :to="props.to"
      class="container">
        <slot/>
    </NuxtLink>

    <button 
      v-else-if="props.action"
      @click="props.action"
      class="container">
        <slot/>
    </button>    
</template>

<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        default: null
    },
    action: {
        type: Function,
        default: null
    }
})
</script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
</style>