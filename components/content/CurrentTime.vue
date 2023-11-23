<template>
    <code>{{ time }}</code>
</template>

<script setup lang="ts">
const props = defineProps({
    format: {
        type: String,
        default: "short"
    },
    timezone: {
        type: String,
        required: false
    }
})

const time = ref("")

function updateTime() {
    const date = new Date()
    time.value = date.toLocaleTimeString("en-US", { timeZone: props.timezone, timeStyle: props.format as any, hour12: true })
}
updateTime()

let timer: NodeJS.Timeout
onMounted(() => {
    timer = setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
    clearInterval(timer)
})
</script>