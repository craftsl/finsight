// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","nuxt-icon", "@vueuse/nuxt","@morev/vue-transitions/nuxt",    "nuxt-headlessui",
],
  tailwindcss: { exposeConfig: true },
  app: {
    head: {
      title: "FinSight",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo.svg" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },
  headlessui: { prefix: "H" },
})
