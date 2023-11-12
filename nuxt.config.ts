// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
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
  },
  image: {
    provider: 'ipx'
  }
})