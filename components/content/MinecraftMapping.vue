<template>
    <template v-if="inline">
        {{ mappedName ?? intermediary }}
    </template>
    <a v-else class="mapping"><code>{{ mappedName ?? intermediary }}</code></a>
</template>

<script setup lang="ts">
const props = defineProps({
    intermediary: {
        type: String,
        default: "short"
    },
    version: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    targetNamespace: {
        type: String,
        required: true
    },
    inline: {
        type: Boolean,
        default: false
    }
})

const mapped = computedAsync(async () => {
    const searchResults = await useLinkieSearch(props.intermediary, LinkieSymbolType[props.symbol], props.version, props.targetNamespace)

    if (searchResults.entries.length === 0) {
        return null
    }

    const bestResult = searchResults.entries[0]
    const matchPercent = bestResult["z"]
    if (matchPercent < 1) {
        return null
    }

    const translation = bestResult["l"]
    let mapped: string
    if (translation) {
        mapped = translation["n"]
    } else {
        mapped = bestResult["n"]
    }

    return mapped
})

const mappedName = computed(() => {
    return mapped.value?.split("/").pop()
})
</script>

<style lang="scss">
.mapping {
    cursor: pointer;
}
</style>