import topLevelAwait from 'vite-plugin-top-level-await'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    '@nuxt/image',
    '@vueuse/nuxt',
  ],
  css: [
    "~/assets/css/main.scss",
    '@fortawesome/fontawesome-svg-core/styles.css'
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
      theme: 'github-dark'
    },
    markdown: {
      rehypePlugins: [
        'remark-emoji'
      ]
    }
  }
})