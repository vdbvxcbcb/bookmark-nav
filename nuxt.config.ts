// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/device'
  ],
  app: {
    head: {
      title: '个人收藏夹导航',
      meta: [
        { name: 'title', content: '个人收藏夹导航' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  build: { transpile: [/^elementPlus/] },
  elementPlus: {
    importStyle: 'scss'
  }
})
