<template>
    <NuxtLayout>
        <HttpError :errorcode="error.statusCode.toString()" :errormessage="error.message" :action="handleError"/>
    </NuxtLayout>
</template>

<script setup lang="ts">
const props = defineProps<{
    error: Object
}>()

const handleError = () => clearError({ redirect: '/' })
</script>