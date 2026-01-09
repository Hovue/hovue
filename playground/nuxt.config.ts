// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false, // Disable SSR for static generation (SPA mode)
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  modules: ['../packages/nuxt/src/module'],
  hovue: {
    prefix: 'Ho'
  },
  app: {
    baseURL: '/playground/',
    buildAssetsDir: '_nuxt/',
    head: {
      title: 'Hovue Playground - Interactive Icon Testing',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Test and explore Hovue animated icons with interactive controls. Adjust size, color, and animations in real-time.'
        },
        {
          name: 'keywords',
          content: 'hovue, vue icons, animated icons, icon playground, vue 3 icons, nuxt icons, icon testing'
        },
        {
          property: 'og:title',
          content: 'Hovue Playground - Interactive Icon Testing'
        },
        {
          property: 'og:description',
          content: 'Test and explore Hovue animated icons with interactive controls. Adjust size, color, and animations in real-time.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: '/logo.png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Hovue Playground - Interactive Icon Testing'
        },
        {
          name: 'twitter:description',
          content: 'Test and explore Hovue animated icons with interactive controls.'
        },
        {
          name: 'twitter:image',
          content: '/logo.png'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo.png'
        }
      ]
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['@hovue/icons']
    }
  }
})
