// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    apiSecretKey: "NUXT_API_SECRET_KEY",
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
        ? process.env.NUXT_PUBLIC_API_BASE
        : "http://localhost:8888",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "@nuxt-alt/markdown-it"],
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: "default",
    runtime: true,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "default" },
  },
});
