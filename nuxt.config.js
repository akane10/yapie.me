export default {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Yapie Rosyadie',
    title: process.env.npm_package_name || 'yapie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { css: true, materialDesignIcons: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          // import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          }
        ]
      }
    ],
    '@nuxtjs/component-cache',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],
  pwa: {
    icon: {
      cacheDir: 'icon'
    },
    manifest: {
      name: 'Yapie Rosyadie',
      short_name: 'Yapie',
      display: 'standalone',
      background_color: '#FFFF00',
      theme_color: '#FFFF00',
      description: 'Personal Website',
      start_url: 'https://yapie.me',
      icons: [
        {
          src: '/icon.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        // {
        //   // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        //   urlPattern: 'https://cdn.materialdesignicons.com/*',
        //   // Defaults to `networkFirst` if omitted
        //   // handler: 'networkFirst',
        //   // Defaults to `GET` if omitted
        //   // method: 'GET'
        //   strategyOptions: {
        //     cacheName: 'our-cache',
        //     cacheExpiration: {
        //       maxEntries: 10,
        //       maxAgeSeconds: 3600
        //     }
        //   }
        // },
        {
          urlPattern: 'https://platform.twitter.com/*',
          handler: 'StaleWhileRevalidate',
          strategyOptions: {
            cacheName: 'our-cache',
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 3600
            }
          }
        }
      ]
    }
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
