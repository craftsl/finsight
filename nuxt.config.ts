// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","nuxt-icon", "@vueuse/nuxt","@morev/vue-transitions/nuxt",    "nuxt-headlessui",
  "shadcn-nuxt"],
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
   shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  headlessui: { prefix: "H" },
})
