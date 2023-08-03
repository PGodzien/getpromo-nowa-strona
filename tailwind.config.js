const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        flash: {
          "0%": { opacity: "0.1" },
          "2%": { opacity: "1" },
          "8%": { opacity: "0.1" },
          "9%": { opacity: "1" },
          "12%": { opacity: "0.1" },
          "20%": { opacity: "1" },
          "25%": { opacity: "0.3" },
          "30%": { opacity: "1" },
          "70%": { opacity: "0.7" },
          "72%": { opacity: "0.2" },
          "77%": { opacity: ".9" },
          "100%": { opacity: ".9" },
        },
      },
      animation: {
        flash: 'flash 6s infinite',
      },
      fontFamily: {
        serif: ["var(--font-clash)"],
        sans: ["var(--font-satoshi)"],
      },
      colors: {
        primary: "#D5FF40",
        secondary: "#292929",
        getDark: "#171717",
        getGray: "#3B3D44",
        grayText: "#3B3D44",
        current: "currentColor",
      },
    },
  },
}
