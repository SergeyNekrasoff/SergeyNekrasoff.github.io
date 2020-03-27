module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Сдать анализы на дому | Культура здоровья',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  css: [
    'vue2-datepicker/index.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~plugins/carousel3d.js', ssr: false },
    { src: '~plugins/vueMask.js', ssr: false },
    { src: '~plugins/infiniteScroll.js', ssr: false },
    { src: '~plugins/progressBar.js', ssr: false },
  ],
  modules: [
    '@nuxtjs/axios',
    // ['@nuxtjs/moment', ['ru']],
    '@nuxtjs/gtm',
  ],
  gtm: {
    dev: true,
  
    id: 'GTM-TDPGD5T',
    layer: 'dataLayer',
    variables: {},
  
    pageTracking: false,
    pageViewEventName: 'nuxtRoute',
  
    autoInit: true,
    respectDoNotTrack: true,
  
    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
  
    noscript: false,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://api.hculture.ru/v1/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    base: '/'
  }
}

