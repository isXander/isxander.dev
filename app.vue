<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'darkreader-lock' }
  ]
})

useSeoMeta({
  title: "isXander's Website",
  ogTitle: "isXander's Website",
  description: "Xander makes Minecraft mods and does photography. Adept in Java and Kotlin, with small experience in web development.",
  ogDescription: "Xander makes Minecraft mods and does photography. Adept in Java and Kotlin, with small experience in web development.",
  ogImage: "https://www.isxander.dev/avatar.png",
})
</script>
