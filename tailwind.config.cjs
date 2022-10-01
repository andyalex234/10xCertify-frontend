/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0F3F74",
          dark: "#0F3F74",
          light: "#315D8C",
        },
        lightPink: "#F3AB96",
        accent: "#F24E1E",
        // secondary: colors.indigo[500],
        background: "#FCFCFC",
        overlay: "rgba(0, 0, 0, 0.7)",
        // text: colors.gray[900],
        // muted: colors.gray[600],
        gray: {
          light: "#EDEDED",
          medium: "#C4C4C4",
          dark: "#8E8E8E",
        },
        blue: {
          light: "#1573DC",
          medium: "#0B4789",
          dark: "#0F3F74",
        },
      },
    },
  },
  plugins: [],
};
