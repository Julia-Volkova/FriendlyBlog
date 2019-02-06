const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Friendly blog',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'New Vue blog'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'}
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#41c5b5',
    height: '5px',
    duration: 5000,
  },
  loadingIndicator: {
    name: 'circle',
    color: '#41c5b5',
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://http-de0a4.firebaseio.com',
    credentials: false,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  },
  env: {
    contentUrl: 'http://serveta.com',
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        components: resolve(__dirname, 'pages/index.vue'),
      });
    }
  }
};
