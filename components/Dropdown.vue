<template>
<div id="dropdown" @click="toggle()">
    <slot name="current">{{ currentItem }}</slot>

    <FontAwesomeIcon v-if="!open" icon="fa-solid fa-caret-down" size="sm"/>
    <FontAwesomeIcon v-else icon="fa-solid fa-caret-up" size="sm"/>

    <div id="dropdown-items" v-if="open">
        <slot v-for="[item, onclick] in Object.entries(items)" :name="item">
            <div @click="pressOption(item, onclick)">
                {{ item }}
            </div>
        </slot>
    </div>
</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    items: {
        type: Object as PropType<DropdownItems>,
    },
    default: {
        type: String,
        default: null
    }
})

const currentItem = ref(props.default ?? Object.keys(props.items)[0])

const open = ref(false)

function toggle() {
    open.value = !open.value
}

function pressOption(option: string, onclick: () => void) {
    currentItem.value = option
    onclick()
    open.value = false
}

interface DropdownItems {
    [key: string]: () => void
}

</script>

<style scoped lang="scss">
#dropdown {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    user-select: none;

    &:hover {
        cursor: pointer;
    }

    #dropdown-items {
        position: fixed;
    }
}
</style>