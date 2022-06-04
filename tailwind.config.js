module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      }
    },
  },
  plugins: [],
}