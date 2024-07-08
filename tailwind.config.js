// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust this to your project's structure
    './public/index.html', // Include other relevant files if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3f51b5',
          DEFAULT: '#1a237e',
          dark: '#0d1137',
        },
        secondary: {
          light: '#f50057',
          DEFAULT: '#c51162',
          dark: '#880e4f',
        },
        customGreen: {
          light: '#b2fab4',
          DEFAULT: '#00e676',
          dark: '#00a152',
        },
      },
    },
  },
  plugins: [],
};
