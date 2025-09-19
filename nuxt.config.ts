// https://nuxt.com/docs/api/configuration/nuxt-config
import {process} from "std-env";

export default defineNuxtConfig({
  app: {
    baseURL: '/films/'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      baseUrl: process.env.BASE_API_URL,
      imagesUrl: process.env.IMAGES_URL,
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/movies']
    }
  }
})