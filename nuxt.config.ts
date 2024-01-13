import topLevelAwait from 'vite-plugin-top-level-await'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    '@nuxt/image',
    '@vueuse/nuxt',
    'vue3-carousel-nuxt',
  ],
  css: [
    "~/assets/css/main.scss",
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_colors.scss" as *;'
        }
      }
    },
    plugins: [
      topLevelAwait({
        promiseExportName: '_tla',
        promiseImportName: i => `__tla_${i}`,
      })
    ]
  },
  content: {
    contentHead: false,
    highlight: {
      theme: 'github-dark',
      preload: [
        'java',
        'json',
        'json5',
        'groovy',
        'kotlin',
        'python',
      ]
    },
    markdown: {
      rehypePlugins: [
        'remark-emoji'
      ]
    }
  }
})