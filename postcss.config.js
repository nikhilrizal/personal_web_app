export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.js'  // Explicit path to your config
    },
    autoprefixer: {}
  }
}