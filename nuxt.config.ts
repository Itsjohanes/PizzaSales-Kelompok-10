export default {
  nitro: {
    preset: 'vercel-edge',
  },
  css: ["~/assets/main.css"],
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  router: {
    base: '/PizzaSales/',
  },
};
