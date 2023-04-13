/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sanofiSansBold: ['sanofiSansBold', 'sans-serif'],
        sanofiSansBoldItalic: ['sanofiSansBoldItalic', 'sans-serif'],
        sanofiSansItalic: ['sanofiSansItalic', 'sans-serif'],
        sanofiSansRegular: ['sanofiSansRegular', 'sans-serif'],
        sanofiSansLight: ['sanofiSansLight', 'sans-serif'],
        sanofiSansLightItalic: ['sanofiSansLightItalic', 'sans-serif'],
      },
      colors: {
        sanofiPurpleDark: '#22004C',
        sanofiPurple: '#7A01E6',
        sanofiViolet: '#F2E6FD',
        sanofiGray: '#F4F2F7',
        sanofiSecondaryOrange: '#CF483E',
        sanofiLightOrange: '#E0B8B5',
        secondaryBlue: '#525CA3',
        secondaryRed: '#CF483E',
        secondaryPink: '#BE006B',
        secondaryGreen: '#478040',
      },
      boxShadow: {
        customShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};

