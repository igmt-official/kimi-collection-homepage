/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "kimi-serif": ["Oranienbaum", "serif"],
      },
      colors: {
        "kimi-primary": "#ab8372",
        "kimi-secondary": "#e6c6b5",
        "kimi-accent": "#dd9090",
      },
      animation: {
        fade: "fade 0.5s ease backwards",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
