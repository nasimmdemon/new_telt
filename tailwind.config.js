/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0C1228",
        surface1: "#646570",
        surface2: "#ABB0B4",
        surface: "#EFF0F3",
        outline: "#E4E4E4",
        blue: "#2D4FE1",
        yellow: "#F4D118",
        pink: "#E13789",
        green: "#63E483",
        purple: "#5B45F3",
        grey: "rgba(39, 75, 227, 0.10)",
        line: "rgba(229, 229, 229, 0.10)",
        themeColor: "#4682B4",
        barColor: "#e3e3e3",
        barActive: "#f7f7f7",
        about2Bg:
          "linear-gradient(90deg, hsla(350, 73%, 44%, 1) 0%, hsla(274, 65%, 12%, 1) 100%)",
      },
    },
    container: {
      padding: {
        DEFAULT: "16px",
        xl: "35px",
      },
    },
  },
  plugins: [],
};
