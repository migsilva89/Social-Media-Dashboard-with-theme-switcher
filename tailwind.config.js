module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  
  darkMode: 'class',

  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '0.65em',
      }
    },
    colors: {
      'white': '#ffffff',
      'limeGreen':'hsl(163, 72%, 42%)',
      'facebook': 'hsl(208, 92%, 53%)',
      'twitter': 'hsl(203, 89%, 53%)',
      'instagram': 'hsl(329, 70%, 58%)',
      'youtube': 'hsl(348, 97%, 39%)',
      'toggle1': 'hsl(210, 78%, 56%)',
      'toggle2':' hsl(146, 68%, 55%)',
      'toggleLight':'hsl(230, 22%, 74%)',
      'bgDark':'hsl(230, 17%, 14%)',
      'topBgDark':'hsl(232, 19%, 15%)',
      'cardBgDark':'hsl(228, 28%, 20%)',
      'blueTextDark':'hsl(228, 34%, 66%)',
      'bgWhite':'hsl(230, 17%, 14%)',
      'bgLight':'hsl(230, 17%, 14%)',
      'topBgLight':'hsl(225, 100%, 98%)',
      'cardBgLight':'hsl(227, 47%, 96%)',
      'blueTextLight':'hsl(228, 12%, 44%)',
      'bgWhite':'hsl(230, 17%, 14%)',
      'black':'hsl(0, 100%, 0%)',
      'blueR':'#007cc2',
      'blueC':'#0aa7ff',
    },
  },
  plugins: [],
}