// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
  ],
  css: [
    "~/assets/css/main.scss",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/css/_colors.scss" as *;'
        }
      }
    }
  },
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
  },
  content: {
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