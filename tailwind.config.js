/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'

  ],
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'sky': '#0ea5e9'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

