/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '10px',
      },
    },
    shadow: {
      medium: '0 0 5px 10px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1300px',
    },
    extend: {
      colors: {
        red: "#fc0404",
        darkRed: "#bb0606",
        black: "#000",
        pink: "rgba(218,78,162,0.81)",
        blue: "#0fd9d9",
        milk: "rgba(208, 204, 204, 1)"
      },
    },
  },
  plugins: [],
}

