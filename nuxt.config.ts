import { defineNuxtConfig } from 'nuxt/config'
import contributors from "./public/contributors.json"

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxtjs/plausible',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-vuefire',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxthub/core',
    ["@nuxtjs/google-adsense", { id: "ca-pub-4312209976800902" }],
  ],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
    pageTransition: false,
  },

  colorMode: { preference: 'light', fallback: 'light' },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    sessionPassword: '',
    github: {
      accessToken: '',
      clientId: '',
      clientSecret: '',
    },
    discord: {
      clientId: '',
      clientSecret: '',
      guildId: '',
      nuxterRoleId: '',
      soundsterRoleId: '',
      moduleMaintainerRoleId: '',
      uIProRoleId: '',
      botToken: '',
    },
  },

  // ssr: false,

  nitro: {
    firebase: {
      gen: 2
    }
    //   prerender: {
    //     routes: [
    //       // ...contributors.map(contributor => `/${contributor.username}`),
    //       ...contributors.map(contributor => `/__og-image__/image/${contributor.username}/og.png`)
    //     ],
    //     // ignore: ['/dynamic'],
    //   },
  },

  routeRules: {
    '/card/**': { proxy: '/__og-image__/image/**' },
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: '2026-01-17',

  hub: {
    cache: true,
  },

  typescript: {
    tsConfig: {
      include: ['../test'],
    },
    nodeTsConfig: {
      include: ['../vitest.config.ts'],
    },
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },

  image: {
    provider: 'github',
  },

  vuefire: {
    auth: true,
    appCheck: {
      debug: process.env.NODE_ENV !== "production",
      isTokenAutoRefreshEnabled: process.env.NUXT_PUBLIC_VUEFIRE_TOKEN_AUTO_REFRESH || true,
      provider: process.env.NUXT_PUBLIC_VUEFIRE_APP_CHECK_PROVIDER || "ReCaptchaV3",
      key: process.env.NUXT_PUBLIC_VUEFIRE_APP_CHECK_KEY || "",
    },
    config: {
      apiKey: process.env.NUXT_PUBLIC_VUEFIRE_API_KEY || "",
      authDomain: process.env.NUXT_PUBLIC_VUEFIRE_AUTH_DOMAIN || "sounds-designed.firebaseapp.com",
      projectId: process.env.NUXT_PUBLIC_VUEFIRE_PROJECT_ID || "sounds-designed",
      storageBucket: process.env.NUXT_PUBLIC_VUEFIRE_STORAGE_BUCKET || "sounds-designed.firebasestorage.app",
      messagingSenderId: process.env.NUXT_PUBLIC_VUEFIRE_MESSAGING_SENDER_ID || "496837511158",
      appId: process.env.NUXT_PUBLIC_VUEFIRE_APP_ID || "1:496837511158:web:f1e74f7808c99b1737e9d7",
      measurementId: process.env.NUXT_PUBLIC_VUEFIRE_MEASUREMENT_ID || "G-M0DJR6KDPK",
    },
  },

  ogImage: {
    defaults: {
      cacheMaxAgeSeconds: 60 * 60 * .01 * 1 // 7 days
    },
    // runtimeCacheStorage: {
    //   driver: 'vercel-runtime-cache',
    // },
    // compatibility: {
    //   runtime: {
    //     chromium: false,
    //   },
    // },

    // zeroRuntime: true,
    compatibility: {
      // disable chromium for prerendering (skips install in CI)
      // prerender: {
      //   chromium: false
      // },
      // force WASM binding at runtime
      // runtime: {
      //   resvg: 'wasm'
      // }
    }
  }
})
