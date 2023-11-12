<template>
    <main>
        <div class="center">
            <h1 id="error-code">{{ errorcode }}</h1>
            <h2 id="msg">{{ errormessage }}</h2>

            <NuxtLink v-if="backurl" :to="backurl" class="big-button">Go back</NuxtLink>
            <button v-else-if="action" @click="action()" class="big-button">Go back</button>
        </div>
    </main>
</template>

<script setup lang="ts">
const props = defineProps({
    errorcode: {
        type: String,
    },
    errormessage: {
        type: String,
        default: "That's an error!"
    },
    backurl: {
        type: String,
        default: "/"
    },
    action: {
        type: Function,
        default: null
    }
})
</script>

<style lang="scss">
#error-code {
    font-size: 10rem;
    font-weight: 900;
    color: $primary-color;
    margin-bottom: auto;
}

#msg {
    font-size: 3rem;
    font-weight: 900;
    color: $foreground-color;
    margin-top: auto;
    margin-bottom: 2rem;
}

.big-button {
    text-decoration: none;
    color: $foreground-color;
    padding: 1rem;
    background-color: $primary-color;
    border-radius: 0.5rem;
    font-size: 2rem;
}

.big-button:hover {
    background-color: $primary-lighter-color;
}
</style>