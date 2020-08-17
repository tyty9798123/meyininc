// eslint-disable-next-line
/* eslint-disable */
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' },
      //{ src: 'https://cdn.ckeditor.com/4.6.0/standard/ckeditor.js'}
    ],
  },
  plugins: [
      { src: '~/plugins/material' },
      { src: '~/plugins/ckeditor.js', ssr: false },
      { src: '~/plugins/eventBus.js'},
      { src: '~/plugins/route.js'},
      { src: '~/plugins/filters.js'}
  ],
  /*  
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'vue-material'],
    /*
    ** Run ESLINT on save
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    */
  },
  modules: [
    '@nuxtjs/axios',
    ['nuxt-vue-material', {
      theme: 'default',
      components: [/*'MdDrawer', 'MdRadio', 'MdMenu', 'MdContent', 'MdList', 'MdButton', 'MdToolbar',*/]
    }],
  ],
  axios: {
    credentials: true
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
