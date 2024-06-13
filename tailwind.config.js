/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Rajdhani"]
      }
    },
  },
  daisyui: {
    themes: ["dracula"],
  },
  plugins: [
    require('daisyui'),
  ],
}