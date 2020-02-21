import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['~/assets/scss/styles/main.scss'],
  plugins: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv'
  ],
  modules: ['@nuxtjs/pwa', '@nuxtjs/style-resources', 'nuxt-fontawesome'],
  styleResources: {
    scss: [
      '~/assets/scss/variables/main.scss',
      '~/assets/scss/mixins/main.scss'
    ]
  },
  fontawesome: {
    component: 'fa'
  },
  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID as string,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID as string,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN as string
  },
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }
  }
}

export default config