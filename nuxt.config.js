const pkg = require('./package')

module.exports = {
  ssr: false,
  target: 'static', // default is 'server'

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", integrity:"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", crossorigin:"anonymous" }
    ],
    script: [
      { src:"https://code.jquery.com/jquery-3.3.1.slim.min.js", integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo", crossorigin:"anonymous" },
      { src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js", integrity:"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49", crossorigin:"anonymous" },
      { src:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", integrity:"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy", crossorigin:"anonymous" },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
   css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/vuelidate.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-fontawesome', {
        component: 'fab',
        imports: [
          {
            set: '@fortawesome/fontawesome-free-brands',
            icons: ['faFacebookSquare',
                    'faTwitter',
                    'faGooglePlusG',
                    'faLinkedinIn',
                    'faInstagram',
                    'faPinterest',
                    'faYoutube',
                    'faImdb']
          },
          {
            set: '@fortawesome/fontawesome-free-solid',
            icons: ['faWindowClose']
          },
        ]
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
