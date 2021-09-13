const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: ["production", "staging"].includes(process.env.RAILS_ENV),
    content: [  
      './app/**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/javascript/**/*.js'
    ],
    defaultExtractor: (content) => { content.match(/[A-Za-z0-9-_:/]+/g) || [] }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
